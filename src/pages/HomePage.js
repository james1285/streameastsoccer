/**
 * StreamEast - Homepage View
 * Complete modern dashboard featuring Hero, Quick Sports Ticker, Today's Matches,
 * USA Soccer Pyramid Showcase, Upcoming Filters, Popular Leagues, and News.
 */

import { updateSEO, getCanonicalUrl } from '../utils/seo.js';
import { getTodayMatches, getFilteredMatches } from '../data/matches.js';
import { fetchRealLiveMatches, getCachedLiveMatches } from '../services/liveScoresApi.js';
import { leagues, getUSALeagues } from '../data/leagues.js';
import { sports } from '../data/sports.js';
import { newsArticles } from '../data/news.js';
import { createMatchCard } from '../components/MatchCard.js';
import { createLeagueCard } from '../components/LeagueCard.js';
import { createNewsCard } from '../components/NewsCard.js';
import { createFilterBar } from '../components/Filters.js';
import { createEmptyState } from '../components/StateComponents.js';

export function renderHomePage(container) {
  // Update SEO for Homepage
  updateSEO({
    title: 'StreamEast Soccer – Live Soccer Schedule & Streaming Guide',
    description: 'StreamEast Soccer brings you today\'s soccer matches, upcoming fixtures, schedules, scores, league information and legal ways to watch football online.',
    canonical: getCanonicalUrl('/')
  });

  const todayMatches = getTodayMatches();
  const usaLeagues = getUSALeagues();
  let currentPeriod = 'today';
  let currentLeague = 'all';

  container.innerHTML = `
    <!-- Hero Section -->
    <section class="hero-section" aria-labelledby="hero-title">
      <div class="container">
        <div class="hero-content">
          <div class="hero-pill">
            <span class="pulse-dot" style="background:var(--accent-green); width:6px; height:6px; border-radius:50%; display:inline-block;"></span>
            <span>2026/27 Live Schedules, Scores & TV Broadcaster Directory</span>
          </div>

          <h1 id="hero-title">StreamEast Soccer – Live Soccer Schedule & Streaming Guide</h1>

          <p class="text-lead">
            Follow today's soccer matches, upcoming fixtures, league schedules, kickoff times, scores, and information on where to watch your favorite teams.
          </p>

          <div class="hero-actions">
            <a href="#todays-matches" class="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
              Today's Matches
            </a>
            <a href="/usa-soccer" class="btn btn-secondary" data-link style="border-color:rgba(239, 68, 68, 0.4);">
              <span style="font-size:1.1rem;">🇺🇸</span>
              USA Soccer Central (All Tiers)
            </a>
            <a href="/schedule" class="btn btn-secondary" data-link>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Full Schedule
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Sports Category Strip Carousel -->
    <div class="container" style="margin-bottom:2rem;">
      <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:0.75rem 1rem; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.75rem;">
        <span style="font-size:0.85rem; font-weight:700; color:var(--text-muted); text-transform:uppercase;">Quick Sports Filter:</span>
        <div style="display:flex; flex-wrap:wrap; gap:0.4rem;">
          ${sports.map(s => `
            <a href="/sport/${s.slug}" class="badge badge-league" data-link style="transition:all 0.15s ease; cursor:pointer;">
              <strong>${s.code}</strong>
            </a>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Today's Matches Dashboard -->
    <section id="todays-matches" class="section-container" style="padding: 2rem 0;" aria-labelledby="todays-matches-heading">
      <div class="container">
        <div style="display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:1.75rem; flex-wrap:wrap; gap:1rem;">
          <div>
            <span class="text-green" style="font-size:0.85rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em;">Live & Scheduled</span>
            <h2 id="todays-matches-heading" style="margin-top:0.25rem;">Today's Matches & Action</h2>
          </div>
          <a href="/live-scores" class="btn btn-outline btn-sm" data-link>
            View Live Match Centre &rarr;
          </a>
        </div>

        <div class="grid-matches" id="today-matches-grid">
          ${todayMatches.length 
            ? todayMatches.map(m => createMatchCard(m)).join('')
            : createEmptyState({ title: 'No matches scheduled for today', message: 'Check the upcoming schedule for tomorrow and this weekend fixtures.' })
          }
        </div>
      </div>
    </section>

    <!-- Dedicated USA Soccer Pyramid Showcase -->
    <section class="section-container" style="padding: 3rem 0; background:linear-gradient(180deg, rgba(239,68,68,0.03) 0%, rgba(10,14,20,0) 100%); border-top:1px solid rgba(239,68,68,0.2);" aria-labelledby="usa-pyramid-heading">
      <div class="container">
        <div style="display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:1.75rem; flex-wrap:wrap; gap:1rem;">
          <div>
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.25rem;">
              <span class="badge-usa-pyramid">AMERICAN SOCCER COMPLETE ECOSYSTEM</span>
              <span class="badge badge-league">Grassroots to Tier 1</span>
            </div>
            <h2 id="usa-pyramid-heading" style="margin-top:0.25rem;">USA Soccer Leagues & Pyramid</h2>
            <p class="text-muted" style="margin:0; font-size:0.95rem;">Explore all American professional divisions, independent leagues, development systems, and national cup fixtures.</p>
          </div>
          <a href="/usa-soccer" class="btn btn-secondary btn-sm" data-link style="border-color:rgba(239, 68, 68, 0.4);">
            Explore USA Soccer Hub &rarr;
          </a>
        </div>

        <div class="grid-leagues">
          ${usaLeagues.slice(0, 4).map(l => createLeagueCard(l)).join('')}
        </div>
      </div>
    </section>

    <!-- Upcoming Matches with Interactive Filters -->
    <section class="section-container" style="padding: 3rem 0; background:rgba(255,255,255,0.01);" aria-labelledby="upcoming-fixtures-heading">
      <div class="container">
        <div style="display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:1.5rem; flex-wrap:wrap; gap:1rem;">
          <div>
            <span class="text-green" style="font-size:0.85rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em;">Fixture Explorer</span>
            <h2 id="upcoming-fixtures-heading" style="margin-top:0.25rem;">Upcoming Matches & Fixtures</h2>
          </div>
          <a href="/schedule" class="btn btn-secondary btn-sm" data-link>
            Full Fixture Calendar &rarr;
          </a>
        </div>

        <!-- Filter Bar -->
        ${createFilterBar({
          activePeriod: currentPeriod,
          activeLeague: currentLeague,
          showSearch: false
        })}

        <!-- Dynamic Filtered Grid -->
        <div class="grid-matches" id="upcoming-matches-grid" style="margin-top:1.5rem;">
          <!-- Injected via JavaScript -->
        </div>
      </div>
    </section>

    <!-- Popular Leagues Showcase -->
    <section class="section-container" style="padding: 3.5rem 0;" aria-labelledby="leagues-heading">
      <div class="container">
        <div style="margin-bottom:2rem;">
          <span class="text-green" style="font-size:0.85rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em;">Worldwide Competitions</span>
          <h2 id="leagues-heading" style="margin-top:0.25rem;">Popular Leagues</h2>
          <p class="text-muted" style="margin:0;">Explore comprehensive schedules, team directories, and legal broadcaster details for elite soccer leagues.</p>
        </div>

        <div class="grid-leagues">
          ${leagues.filter(l => ['premier-league', 'champions-league', 'la-liga', 'serie-a', 'bundesliga', 'ligue-1', 'mls'].includes(l.id)).map(l => createLeagueCard(l)).join('')}
        </div>
      </div>
    </section>

    <!-- Soccer News & Analysis Preview -->
    <section class="section-container" style="padding: 3rem 0; background:rgba(255,255,255,0.01);" aria-labelledby="news-preview-heading">
      <div class="container">
        <div style="display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:2rem; flex-wrap:wrap; gap:1rem;">
          <div>
            <span class="text-green" style="font-size:0.85rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em;">Editorial & Previews</span>
            <h2 id="news-preview-heading" style="margin-top:0.25rem;">Latest Soccer News</h2>
          </div>
          <a href="/news" class="btn btn-outline btn-sm" data-link>
            All Soccer Articles &rarr;
          </a>
        </div>

        <div class="grid-news">
          ${newsArticles.slice(0, 3).map(n => createNewsCard(n)).join('')}
        </div>
      </div>
    </section>

    <!-- Legal Broadcasting & Viewing Guide Promo -->
    <section class="section-container" style="padding: 3.5rem 0;" aria-labelledby="viewing-guide-heading">
      <div class="container">
        <div class="card" style="background:linear-gradient(135deg, #131b26 0%, #0d1219 100%); border-color:var(--border-green); padding:2.5rem;">
          <div style="max-width:760px;">
            <span class="badge badge-league" style="border-color:var(--border-green); color:var(--accent-green); margin-bottom:1rem;">
              Authorized Streaming Guide
            </span>
            <h2 id="viewing-guide-heading" style="font-size:1.8rem; margin-bottom:1rem;">
              How to Watch Live Soccer Online Legally
            </h2>
            <p style="color:var(--text-secondary); font-size:1.05rem; line-height:1.6; margin-bottom:1.5rem;">
              Broadcasting rights are licensed across official television channels and digital streaming providers such as Peacock, Paramount+, ESPN+, Apple TV, Sky Sports, and TNT Sports. StreamEast Soccer helps supporters identify legitimate, high-quality streams in their territory.
            </p>
            <div style="display:flex; gap:1rem; flex-wrap:wrap;">
              <a href="/how-to-watch" class="btn btn-primary" data-link>
                Explore Legal Broadcasters Directory &rarr;
              </a>
              <a href="/faq" class="btn btn-secondary" data-link>
                Frequently Asked Questions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Dynamic filter state handler for Upcoming Matches section
  const renderUpcomingMatches = () => {
    const upcomingGrid = container.querySelector('#upcoming-matches-grid');
    if (!upcomingGrid) return;

    const filtered = getFilteredMatches({
      period: currentPeriod,
      leagueId: currentLeague
    });

    if (filtered.length === 0) {
      upcomingGrid.innerHTML = createEmptyState({
        title: 'No upcoming fixtures found',
        message: 'No scheduled matches match this period and league filter. Try choosing "All Fixtures" or another competition.',
        actionLabel: 'Reset Period Filter'
      });
      const resetBtn = upcomingGrid.querySelector('#empty-state-reset-btn');
      resetBtn?.addEventListener('click', () => {
        currentPeriod = 'all';
        currentLeague = 'all';
        container.querySelectorAll('#period-filter-group .filter-pill').forEach(btn => {
          btn.classList.toggle('active', btn.dataset.period === 'all');
        });
        const select = container.querySelector('#league-filter-select');
        if (select) select.value = 'all';
        renderUpcomingMatches();
      });
    } else {
      upcomingGrid.innerHTML = filtered.map(m => createMatchCard(m)).join('');
    }
  };

  // Attach Period Filter Listeners
  const periodButtons = container.querySelectorAll('#period-filter-group .filter-pill');
  periodButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      periodButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPeriod = btn.dataset.period;
      renderUpcomingMatches();
    });
  });

  // Attach League Selector Listener
  const leagueSelect = container.querySelector('#league-filter-select');
  leagueSelect?.addEventListener('change', (e) => {
    currentLeague = e.target.value;
    renderUpcomingMatches();
  });

  // Initial render of upcoming matches
  renderUpcomingMatches();

  // Asynchronously fetch genuine live scoreboard matches and inject into Today's Matches
  fetchRealLiveMatches().then(realMatches => {
    if (realMatches && realMatches.length > 0) {
      const todayGrid = container.querySelector('#today-matches-grid');
      if (todayGrid) {
        const liveAndToday = [...realMatches, ...todayMatches];
        const unique = [];
        const seen = new Set();
        for (const m of liveAndToday) {
          if (!seen.has(m.slug)) {
            seen.add(m.slug);
            unique.push(m);
          }
        }
        todayGrid.innerHTML = unique.map(m => createMatchCard(m)).join('');
      }
    }
  }).catch(() => {});
}
