/**
 * StreamEast - Client-Side Router
 * Lightweight, accessible pushState router with deep-link support and SEO synchronization.
 * Supports all USA soccer tiers and all 13 multi-sport banner hubs.
 */

import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderHomePage } from './pages/HomePage.js';
import { renderLiveScoresPage } from './pages/LiveScoresPage.js';
import { renderSchedulePage } from './pages/SchedulePage.js';
import { renderLeaguesPage } from './pages/LeaguesPage.js';
import { renderLeagueDetailPage } from './pages/LeagueDetailPage.js';
import { renderUSASoccerPage } from './pages/USASoccerPage.js';
import { renderSportPage } from './pages/SportPage.js';
import { renderNewsPage } from './pages/NewsPage.js';
import { renderNewsDetailPage } from './pages/NewsDetailPage.js';
import { renderHowToWatchPage } from './pages/HowToWatchPage.js';
import { renderMatchDetailPage } from './pages/MatchDetailPage.js';
import { renderFAQPage } from './pages/FAQPage.js';
import { renderAboutPage } from './pages/AboutPage.js';
import { renderContactPage } from './pages/ContactPage.js';
import { 
  renderPrivacyPage, 
  renderTermsPage, 
  renderDisclaimerPage, 
  renderCopyrightPage 
} from './pages/LegalPages.js';
import { renderNotFoundPage } from './pages/NotFoundPage.js';

const LEAGUE_SLUGS = [
  // European soccer
  'premier-league',
  'champions-league',
  'la-liga',
  'serie-a',
  'bundesliga',
  'ligue-1',
  // USA Soccer Pyramid
  'mls',
  'nwsl',
  'usl-championship',
  'usl-league-one',
  'mls-next-pro',
  'nisa',
  'us-open-cup',
  'leagues-cup'
];

const SPORT_SLUGS = [
  'nfl',
  'nba',
  'fiba',
  'wnba',
  'mlb',
  'nhl',
  'cfl',
  'cfb',
  'ncaab',
  'ufc',
  'boxing',
  'soccer',
  'f1'
];

export function navigateTo(url) {
  history.pushState(null, null, url);
  handleRoute();
}

export function handleRoute() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  // Re-render Header with current path highlight
  renderHeader(path);

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Route Dispatcher
  if (path === '/') {
    renderHomePage(mainContent);
  } else if (path === '/usa-soccer') {
    renderUSASoccerPage(mainContent);
  } else if (path === '/live-scores') {
    renderLiveScoresPage(mainContent);
  } else if (path === '/schedule') {
    renderSchedulePage(mainContent);
  } else if (path === '/leagues') {
    renderLeaguesPage(mainContent);
  } else if (path.startsWith('/sport/')) {
    const sportSlug = path.replace('/sport/', '');
    renderSportPage(mainContent, sportSlug);
  } else if (SPORT_SLUGS.includes(path.slice(1))) {
    // e.g. /nfl, /nba, /mlb, /ufc, /f1
    const sportSlug = path.slice(1);
    renderSportPage(mainContent, sportSlug);
  } else if (LEAGUE_SLUGS.includes(path.slice(1))) {
    const slug = path.slice(1);
    renderLeagueDetailPage(mainContent, slug);
  } else if (path === '/news') {
    renderNewsPage(mainContent);
  } else if (path.startsWith('/news/')) {
    const slug = path.replace('/news/', '');
    renderNewsDetailPage(mainContent, slug);
  } else if (path === '/how-to-watch') {
    renderHowToWatchPage(mainContent);
  } else if (path.startsWith('/match/')) {
    const slug = path.replace('/match/', '');
    renderMatchDetailPage(mainContent, slug);
  } else if (path === '/faq') {
    renderFAQPage(mainContent);
  } else if (path === '/about') {
    renderAboutPage(mainContent);
  } else if (path === '/contact') {
    renderContactPage(mainContent);
  } else if (path === '/privacy') {
    renderPrivacyPage(mainContent);
  } else if (path === '/terms') {
    renderTermsPage(mainContent);
  } else if (path === '/disclaimer') {
    renderDisclaimerPage(mainContent);
  } else if (path === '/copyright') {
    renderCopyrightPage(mainContent);
  } else {
    renderNotFoundPage(mainContent);
  }
}

export function initRouter() {
  // Render persistent Footer once
  renderFooter();

  // Intercept internal link clicks
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-link]') || (e.target.closest('a') && e.target.closest('a').getAttribute('href')?.startsWith('/') ? e.target.closest('a') : null);

    if (link) {
      const href = link.getAttribute('href');
      // Only intercept internal relative links
      if (href && href.startsWith('/') && !href.startsWith('//') && !link.hasAttribute('target') && !link.hasAttribute('download')) {
        e.preventDefault();
        navigateTo(href);
      }
    }
  });

  // Handle browser Back / Forward buttons
  window.addEventListener('popstate', handleRoute);

  // Initial route execution
  handleRoute();
}
