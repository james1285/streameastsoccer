/**
 * StreamEast - Header Component
 * Clean, perfectly aligned single-row navigation with zero awkward text wrapping.
 */

import { sports } from '../data/sports.js';

export function renderHeader(currentPath = '/') {
  const headerRoot = document.getElementById('header-root');
  if (!headerRoot) return;

  const navItems = [
    { label: 'Home', path: '/' },
    { label: '🇺🇸 USA Soccer', path: '/usa-soccer' },
    { label: 'Live Scores', path: '/live-scores', badge: 'LIVE' },
    { label: 'Schedule', path: '/schedule' },
    { label: 'Leagues', path: '/leagues' },
    { label: 'News', path: '/news' },
    { label: 'Blog', path: '/blog' },
    { label: 'How to Watch', path: '/how-to-watch' },
    { label: 'FAQ', path: '/faq' }
  ];

  headerRoot.innerHTML = `
    <!-- Top Multi-Sport Navigation Strip (Matching User Reference) -->
    <div class="sports-strip-container" role="navigation" aria-label="Sports Categories">
      <nav class="sports-strip">
        ${sports.map(sport => {
          const isCurrentSport = currentPath === `/sport/${sport.slug}` || 
            (sport.slug === 'soccer' && (currentPath === '/' || currentPath === '/usa-soccer' || currentPath.startsWith('/match/') || currentPath === '/schedule'));
          return `
            <a href="/sport/${sport.slug}" class="sport-strip-item ${isCurrentSport ? 'active' : ''}" data-link title="${sport.name}">
              ${sport.code}
            </a>
          `;
        }).join('')}
      </nav>
    </div>

    <!-- Main Header -->
    <header class="site-header" role="banner">
      <div class="container header-container">
        <!-- Brand Logo -->
        <a href="/" class="brand-logo" data-link aria-label="StreamEast Soccer Home">
          <svg class="brand-icon" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5 8L19 3L33 8V22C33 30 19 35 19 35C19 35 5 30 5 22V8Z" fill="#0c131d" stroke="#00e676" stroke-width="2"/>
            <polygon points="19,10 24,14 22,21 16,21 14,14" fill="#00e676"/>
            <path d="M19 10V4" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M24 14L29 11" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M22 21L27 25" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M16 21L11 25" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M14 14L9 11" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M16 29L22 29L26 25" stroke="#00e676" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>StreamEast <span class="text-green">Soccer</span></span>
        </a>

        <!-- Desktop Navigation (Single Row, No Wrapping) -->
        <nav class="nav-desktop" aria-label="Main Navigation">
          ${navItems.map(item => {
            const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));
            return `
              <a href="${item.path}" class="nav-link ${isActive ? 'active' : ''}" data-link>
                ${item.label}
                ${item.badge ? `<span class="badge badge-live" style="font-size:0.65rem; padding: 0.15rem 0.45rem; margin-left: 0.25rem;"><span class="pulse-dot"></span>${item.badge}</span>` : ''}
              </a>
            `;
          }).join('')}
        </nav>

        <!-- Header Actions: Search & Mobile Menu -->
        <div class="header-actions">
          <button id="search-trigger-btn" class="search-trigger" type="button" aria-label="Search fixtures, sports, and teams">
            <svg class="search-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span>Search</span>
            <kbd class="search-shortcut">/</kbd>
          </button>

          <!-- Mobile Hamburger Toggle -->
          <button id="mobile-menu-btn" class="menu-toggle" type="button" aria-label="Open mobile navigation menu" aria-expanded="false">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Navigation Drawer -->
    <div id="mobile-backdrop" class="mobile-nav-backdrop" aria-hidden="true"></div>
    <aside id="mobile-drawer" class="mobile-nav-drawer" aria-label="Mobile Navigation">
      <div class="mobile-nav-header">
        <span style="font-family: var(--font-heading); font-weight: 800; font-size: 1.15rem;">
          StreamEast <span class="text-green">Soccer</span>
        </span>
        <button id="mobile-close-btn" style="background:none; border:none; color:var(--text-muted); cursor:pointer; padding:0.4rem;" aria-label="Close menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Quick Sports Switcher in Mobile Drawer -->
      <div style="margin-bottom: 1.25rem;">
        <span style="font-size:0.75rem; font-weight:700; color:var(--text-dim); text-transform:uppercase; display:block; margin-bottom:0.5rem;">Sports Categories</span>
        <div style="display:flex; flex-wrap:wrap; gap:0.35rem;">
          ${sports.map(s => `
            <a href="/sport/${s.slug}" data-link style="background:rgba(255,255,255,0.06); padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; color:#fff;">
              ${s.code}
            </a>
          `).join('')}
        </div>
      </div>

      <ul class="mobile-nav-links">
        ${navItems.map(item => `
          <li>
            <a href="${item.path}" class="${currentPath === item.path ? 'active' : ''}" data-link>
              ${item.label}
              ${item.badge ? `<span class="badge badge-live" style="margin-left: 0.5rem;"><span class="pulse-dot"></span>${item.badge}</span>` : ''}
            </a>
          </li>
        `).join('')}
        <li style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
          <a href="/about" data-link style="font-size: 0.95rem; color: var(--text-dim);">About Us</a>
        </li>
        <li>
          <a href="/contact" data-link style="font-size: 0.95rem; color: var(--text-dim);">Contact & Support</a>
        </li>
      </ul>
    </aside>
  `;

  // Attach mobile toggle handlers
  const openBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-close-btn');
  const backdrop = document.getElementById('mobile-backdrop');
  const drawer = document.getElementById('mobile-drawer');

  const openDrawer = () => {
    drawer?.classList.add('open');
    backdrop?.classList.add('open');
    openBtn?.setAttribute('aria-expanded', 'true');
    backdrop?.setAttribute('aria-hidden', 'false');
  };

  const closeDrawer = () => {
    drawer?.classList.remove('open');
    backdrop?.classList.remove('open');
    openBtn?.setAttribute('aria-expanded', 'false');
    backdrop?.setAttribute('aria-hidden', 'true');
  };

  openBtn?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', closeDrawer);

  drawer?.querySelectorAll('a[data-link]').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}
