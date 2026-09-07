/**
 * StreamEast Soccer - Soccer Schedule Page (/schedule)
 * Searchable, filterable calendar of today's and upcoming soccer matches across all leagues.
 */

import { updateSEO, generateBreadcrumbSchema, getCanonicalUrl } from '../utils/seo.js';
import { getFilteredMatches } from '../data/matches.js';
import { leagues } from '../data/leagues.js';
import { createBreadcrumbs } from '../components/Breadcrumbs.js';
import { createFilterBar } from '../components/Filters.js';
import { createMatchCard } from '../components/MatchCard.js';
import { createEmptyState } from '../components/StateComponents.js';

export function renderSchedulePage(container) {
  // Update SEO
  updateSEO({
    title: "Soccer Schedule – Today's & Upcoming Football Matches | StreamEast Soccer",
    description: "Browse the complete soccer fixture schedule. Find today's matches, upcoming weekend kickoffs, league filters, team matchups, and legal TV channels.",
    canonical: getCanonicalUrl('/schedule'),
    structuredData: generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Soccer Schedule', url: '/schedule' }
    ])
  });

  let activePeriod = 'all';
  let activeLeague = 'all';
  let searchQuery = '';

  const breadcrumbsHtml = createBreadcrumbs([
    { label: 'Schedule', path: '/schedule' }
  ]);

  container.innerHTML = `
    <div class="container" style="padding-top:2rem;">
      ${breadcrumbsHtml}

      <header style="margin-bottom:2rem;">
        <span class="text-green" style="font-size:0.85rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em;">Fixtures & Kickoff Times</span>
        <h1 style="margin-top:0.25rem;">Soccer Schedule & Match Calendar</h1>
        <p class="text-lead">
          Find upcoming soccer fixtures, filter by your favorite league, check kickoff times in your local timezone, and locate official legal broadcasters.
        </p>
      </header>

      <!-- Interactive Filter Bar -->
      ${createFilterBar({
        activePeriod,
        activeLeague,
        showSearch: true,
        searchPlaceholder: 'Search club (e.g. Arsenal, Real Madrid)...'
      })}

      <!-- Schedule Count Header -->
      <div style="display:flex; align-items:center; justify-content:space-between; margin:1.5rem 0 1rem; font-size:0.9rem; color:var(--text-muted);">
        <span id="schedule-results-count">Showing all matches</span>
        <span>All kickoff times localized</span>
      </div>

      <!-- Schedule Matches Grid -->
      <div class="grid-matches" id="schedule-matches-grid">
        <!-- Rendered dynamically -->
      </div>
    </div>
  `;

  const renderMatches = () => {
    const grid = container.querySelector('#schedule-matches-grid');
    const countEl = container.querySelector('#schedule-results-count');
    if (!grid) return;

    const filtered = getFilteredMatches({
      period: activePeriod,
      leagueId: activeLeague,
      search: searchQuery
    });

    if (countEl) {
      countEl.textContent = `Showing ${filtered.length} fixture${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = createEmptyState({
        title: 'No fixtures match your criteria',
        message: 'Try adjusting your date period, selecting another league, or clearing the team search box.',
        actionLabel: 'Reset All Filters'
      });
      const resetBtn = grid.querySelector('#empty-state-reset-btn');
      resetBtn?.addEventListener('click', () => {
        activePeriod = 'all';
        activeLeague = 'all';
        searchQuery = '';
        container.querySelectorAll('#period-filter-group .filter-pill').forEach(btn => {
          btn.classList.toggle('active', btn.dataset.period === 'all');
        });
        const lSelect = container.querySelector('#league-filter-select');
        if (lSelect) lSelect.value = 'all';
        const searchInput = container.querySelector('#team-search-input');
        if (searchInput) searchInput.value = '';
        renderMatches();
      });
    } else {
      grid.innerHTML = filtered.map(m => createMatchCard(m)).join('');
    }
  };

  // Period buttons
  const periodButtons = container.querySelectorAll('#period-filter-group .filter-pill');
  periodButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      periodButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activePeriod = btn.dataset.period;
      renderMatches();
    });
  });

  // League select
  const leagueSelect = container.querySelector('#league-filter-select');
  leagueSelect?.addEventListener('change', (e) => {
    activeLeague = e.target.value;
    renderMatches();
  });

  // Team search
  const searchInput = container.querySelector('#team-search-input');
  searchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderMatches();
  });

  renderMatches();
}
