/**
 * StreamEast Soccer - Global Search Overlay Component
 * Fast autocomplete search across matches, teams, leagues, and soccer news.
 */

import { matches } from '../data/matches.js';
import { teams } from '../data/teams.js';
import { leagues } from '../data/leagues.js';
import { newsArticles } from '../data/news.js';
import { blogPosts } from '../data/blogs.js';

export function initSearchModal() {
  const modalRoot = document.getElementById('search-modal-root');
  if (!modalRoot) return;

  modalRoot.innerHTML = `
    <div id="search-modal-backdrop" class="modal-backdrop" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="search-input">
      <div class="search-modal">
        <div class="search-input-wrapper">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--accent-green);" aria-hidden="true">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            id="global-search-input" 
            class="search-input" 
            placeholder="Search matches, teams, leagues, news, or blogs..." 
            autocomplete="off"
            spellcheck="false"
          />
          <button id="search-modal-close" style="background:none; border:none; color:var(--text-dim); cursor:pointer; font-size:1.2rem; padding:0.2rem 0.5rem;" aria-label="Close search">
            &times;
          </button>
        </div>

        <div id="search-results" class="search-results-list" role="listbox">
          <div style="padding:1.5rem; text-align:center; color:var(--text-muted); font-size:0.9rem;">
            Type to search live matches, upcoming fixtures, leagues, news, or blog guides...
          </div>
        </div>

        <div class="search-modal-footer">
          <span>Navigation: <kbd>Esc</kbd> to exit &bull; <kbd>&uarr;&darr;</kbd> to navigate</span>
          <span class="text-green">StreamEast Soccer Index</span>
        </div>
      </div>
    </div>
  `;

  const backdrop = document.getElementById('search-modal-backdrop');
  const input = document.getElementById('global-search-input');
  const resultsContainer = document.getElementById('search-results');
  const closeBtn = document.getElementById('search-modal-close');

  const openModal = () => {
    backdrop?.classList.add('open');
    backdrop?.setAttribute('aria-hidden', 'false');
    setTimeout(() => input?.focus(), 50);
  };

  const closeModal = () => {
    backdrop?.classList.remove('open');
    backdrop?.setAttribute('aria-hidden', 'true');
    if (input) input.value = '';
    renderDefaultPrompt();
  };

  const renderDefaultPrompt = () => {
    if (!resultsContainer) return;
    resultsContainer.innerHTML = `
      <div style="padding:1.5rem; text-align:center; color:var(--text-muted); font-size:0.9rem;">
        Type to search live matches, upcoming fixtures, leagues, news, or blog guides...
      </div>
    `;
  };

  const performSearch = (query) => {
    const q = query.toLowerCase().trim();
    if (!q) {
      renderDefaultPrompt();
      return;
    }

    // Match Search
    const matchedFixtures = matches.filter(m => {
      const home = teams.find(t => t.id === m.homeTeamId)?.name.toLowerCase() || '';
      const away = teams.find(t => t.id === m.awayTeamId)?.name.toLowerCase() || '';
      const league = leagues.find(l => l.id === m.leagueId)?.name.toLowerCase() || '';
      return home.includes(q) || away.includes(q) || league.includes(q) || m.slug.includes(q);
    });

    // League Search
    const matchedLeagues = leagues.filter(l => 
      l.name.toLowerCase().includes(q) || l.country.toLowerCase().includes(q)
    );

    // Blog Search
    const matchedBlogs = blogPosts.filter(b => 
      b.title.toLowerCase().includes(q) || 
      (b.metaTitle && b.metaTitle.toLowerCase().includes(q)) || 
      b.category.toLowerCase().includes(q) ||
      (b.tags && b.tags.some(t => t.toLowerCase().includes(q))) ||
      b.slug.includes(q)
    );

    // News Search
    const matchedNews = newsArticles.filter(n => 
      n.title.toLowerCase().includes(q) || n.category.toLowerCase().includes(q)
    );

    if (!matchedFixtures.length && !matchedLeagues.length && !matchedBlogs.length && !matchedNews.length) {
      resultsContainer.innerHTML = `
        <div style="padding:2rem; text-align:center; color:var(--text-muted);">
          <p style="margin:0;">No matches or content found for "<strong>${escapeHtml(query)}</strong>"</p>
          <span style="font-size:0.8rem; color:var(--text-dim);">Try searching for "Premier League", "380 matches", "Arsenal", or "Champions League"</span>
        </div>
      `;
      return;
    }

    let html = '';

    // Matches Section
    if (matchedFixtures.length) {
      html += `<div style="padding:0.4rem 0.5rem; font-size:0.75rem; font-weight:700; color:var(--accent-green); text-transform:uppercase;">Matches & Fixtures</div>`;
      html += matchedFixtures.slice(0, 4).map(m => {
        const home = teams.find(t => t.id === m.homeTeamId)?.name || 'Home';
        const away = teams.find(t => t.id === m.awayTeamId)?.name || 'Away';
        const league = leagues.find(l => l.id === m.leagueId)?.name || '';
        return `
          <a href="/match/${m.slug}" class="search-result-item" data-link>
            <div style="display:flex; align-items:center; gap:0.75rem;">
              <span style="color:var(--text-primary); font-weight:600;">${home} vs ${away}</span>
              <span class="badge badge-league" style="font-size:0.7rem;">${league}</span>
            </div>
            <span style="font-size:0.8rem; color:var(--accent-green); font-family:var(--font-heading);">${m.status === 'LIVE' ? 'LIVE' : m.displayTime.split('/')[0].trim()}</span>
          </a>
        `;
      }).join('');
    }

    // Blogs Section
    if (matchedBlogs.length) {
      html += `<div style="padding:0.6rem 0.5rem 0.4rem; font-size:0.75rem; font-weight:700; color:var(--accent-green); text-transform:uppercase;">Soccer Guides & Blogs</div>`;
      html += matchedBlogs.slice(0, 3).map(b => `
        <a href="/blog/${b.slug}" class="search-result-item" data-link>
          <div style="display:flex; flex-direction:column; gap:0.2rem;">
            <span style="color:var(--text-primary); font-weight:600; font-size:0.92rem;">${b.metaTitle || b.title}</span>
            <span style="font-size:0.75rem; color:var(--text-dim);">${b.category} &bull; ${b.readTime}</span>
          </div>
          <span class="badge badge-league" style="font-size:0.65rem; color:var(--accent-green); border-color:var(--border-green);">GUIDE</span>
        </a>
      `).join('');
    }

    // Leagues Section
    if (matchedLeagues.length) {
      html += `<div style="padding:0.6rem 0.5rem 0.4rem; font-size:0.75rem; font-weight:700; color:var(--accent-green); text-transform:uppercase;">Leagues</div>`;
      html += matchedLeagues.map(l => `
        <a href="/${l.slug}" class="search-result-item" data-link>
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <div style="width:22px; height:22px;">${l.badgeSvg}</div>
            <span style="color:var(--text-primary); font-weight:600;">${l.name}</span>
          </div>
          <span style="font-size:0.8rem; color:var(--text-muted);">${l.country}</span>
        </a>
      `).join('');
    }

    // News Section
    if (matchedNews.length) {
      html += `<div style="padding:0.6rem 0.5rem 0.4rem; font-size:0.75rem; font-weight:700; color:var(--accent-green); text-transform:uppercase;">Soccer News</div>`;
      html += matchedNews.slice(0, 3).map(n => `
        <a href="/news/${n.slug}" class="search-result-item" data-link>
          <div style="display:flex; flex-direction:column; gap:0.2rem;">
            <span style="color:var(--text-primary); font-weight:500; font-size:0.9rem;">${n.title}</span>
            <span style="font-size:0.75rem; color:var(--text-dim);">${n.category} &bull; ${n.readTime}</span>
          </div>
        </a>
      `).join('');
    }

    resultsContainer.innerHTML = html;

    // Attach click listeners to newly rendered items to close modal
    resultsContainer.querySelectorAll('a[data-link]').forEach(a => {
      a.addEventListener('click', closeModal);
    });
  };

  // Event Listeners
  input?.addEventListener('input', (e) => performSearch(e.target.value));
  closeBtn?.addEventListener('click', closeModal);

  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  // Global Keyboard listener: "/" or "Ctrl+K" to open, "Escape" to close
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
      e.preventDefault();
      openModal();
    } else if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openModal();
    } else if (e.key === 'Escape' && backdrop?.classList.contains('open')) {
      closeModal();
    }
  });

  // Attach to trigger button in header
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('#search-trigger-btn');
    if (trigger) {
      e.preventDefault();
      openModal();
    }
  });
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
