/**
 * StreamEast Soccer - Static Pre-rendering Engine for Technical SEO
 * Generates fully rendered static HTML files for all 64 sitemap routes into dist/
 * Ensures search engine crawlers (Googlebot, Bingbot) receive complete semantic HTML,
 * exact per-page metadata, unique canonical links, and JSON-LD structured data on initial HTTP GET.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Data imports for route enumeration
import { leagues } from '../src/data/leagues.js';
import { sports } from '../src/data/sports.js';
import { newsArticles } from '../src/data/news.js';
import { matches } from '../src/data/matches.js';

// Component and Page imports
import { renderHeader } from '../src/components/Header.js';
import { renderFooter } from '../src/components/Footer.js';
import { renderHomePage } from '../src/pages/HomePage.js';
import { renderUSASoccerPage } from '../src/pages/USASoccerPage.js';
import { renderLiveScoresPage } from '../src/pages/LiveScoresPage.js';
import { renderSchedulePage } from '../src/pages/SchedulePage.js';
import { renderLeaguesPage } from '../src/pages/LeaguesPage.js';
import { renderLeagueDetailPage } from '../src/pages/LeagueDetailPage.js';
import { renderSportPage } from '../src/pages/SportPage.js';
import { renderNewsPage } from '../src/pages/NewsPage.js';
import { renderNewsDetailPage } from '../src/pages/NewsDetailPage.js';
import { renderMatchDetailPage } from '../src/pages/MatchDetailPage.js';
import { renderHowToWatchPage } from '../src/pages/HowToWatchPage.js';
import { renderFAQPage } from '../src/pages/FAQPage.js';
import { renderAboutPage } from '../src/pages/AboutPage.js';
import { renderContactPage } from '../src/pages/ContactPage.js';
import { 
  renderPrivacyPage, 
  renderTermsPage, 
  renderDisclaimerPage, 
  renderCopyrightPage 
} from '../src/pages/LegalPages.js';
import { renderNotFoundPage } from '../src/pages/NotFoundPage.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const templatePath = path.resolve(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error(`[Pre-render Error] ${templatePath} does not exist. Run vite build first.`);
  process.exit(1);
}

const baseHtmlTemplate = fs.readFileSync(templatePath, 'utf-8');

/**
 * Creates a lightweight virtual DOM context for the static renderer
 */
function createVirtualDOM(route) {
  let docTitle = 'StreamEast Soccer – Live Soccer Schedule & Streaming Guide';
  const metaTags = new Map(); // selector -> attributes
  const elements = new Map(); // id -> Element
  const headChildren = [];

  class MockElement {
    constructor(tagName, id = '') {
      this.tagName = tagName.toUpperCase();
      this.id = id;
      this.attributes = new Map();
      this.children = [];
      this._innerHTML = '';
      this._textContent = '';
      this.classList = {
        add: () => {},
        remove: () => {},
        contains: () => false
      };
    }

    setAttribute(name, value) {
      this.attributes.set(name, String(value));
    }

    getAttribute(name) {
      return this.attributes.get(name) || null;
    }

    removeAttribute(name) {
      this.attributes.delete(name);
    }

    addEventListener() {}
    removeEventListener() {}
    querySelector() { return null; }
    querySelectorAll() { return []; }
    closest() { return null; }

    set innerHTML(val) {
      this._innerHTML = val;
    }

    get innerHTML() {
      return this._innerHTML;
    }

    set textContent(val) {
      this._textContent = val;
    }

    get textContent() {
      return this._textContent;
    }

    appendChild(child) {
      this.children.push(child);
      return child;
    }
  }

  const headerRoot = new MockElement('div', 'header-root');
  const mainContent = new MockElement('main', 'main-content');
  const footerRoot = new MockElement('div', 'footer-root');
  const searchModalRoot = new MockElement('div', 'search-modal-root');
  const toastRoot = new MockElement('div', 'toast-root');
  const seoStructuredData = new MockElement('script', 'seo-structured-data');
  seoStructuredData.setAttribute('type', 'application/ld+json');

  elements.set('header-root', headerRoot);
  elements.set('main-content', mainContent);
  elements.set('footer-root', footerRoot);
  elements.set('search-modal-root', searchModalRoot);
  elements.set('toast-root', toastRoot);
  elements.set('seo-structured-data', seoStructuredData);

  const mockDocument = {
    get title() {
      return docTitle;
    },
    set title(val) {
      docTitle = val;
    },
    getElementById(id) {
      return elements.get(id) || null;
    },
    createElement(tagName) {
      return new MockElement(tagName);
    },
    head: {
      appendChild(child) {
        headChildren.push(child);
        return child;
      }
    },
    querySelector(selector) {
      if (selector === '#header-root') return headerRoot;
      if (selector === '#main-content') return mainContent;
      if (selector === '#footer-root') return footerRoot;
      if (selector === '#seo-structured-data') return seoStructuredData;
      if (selector.startsWith('#')) return elements.get(selector.slice(1)) || null;

      // Handle meta tags and link tags
      if (selector.startsWith('meta[') || selector.startsWith('link[')) {
        if (!metaTags.has(selector)) {
          const el = new MockElement(selector.startsWith('meta') ? 'meta' : 'link');
          const nameMatch = selector.match(/name="([^"]+)"/);
          const propMatch = selector.match(/property="([^"]+)"/);
          const relMatch = selector.match(/rel="([^"]+)"/);
          if (nameMatch) el.setAttribute('name', nameMatch[1]);
          if (propMatch) el.setAttribute('property', propMatch[1]);
          if (relMatch) el.setAttribute('rel', relMatch[1]);
          metaTags.set(selector, el);
        }
        return metaTags.get(selector);
      }
      return null;
    },
    querySelectorAll() {
      return [];
    },
    addEventListener() {},
    removeEventListener() {}
  };

  const mockWindow = {
    location: {
      pathname: route,
      href: `https://www.streameastsoccer.live${route === '/' ? '/' : route}`,
      origin: 'https://www.streameastsoccer.live'
    },
    scrollTo: () => {},
    gtag: () => {},
    addEventListener: () => {},
    removeEventListener: () => {}
  };

  return {
    document: mockDocument,
    window: mockWindow,
    headerRoot,
    mainContent,
    footerRoot,
    seoStructuredData,
    metaTags,
    getTitle: () => docTitle
  };
}

// Build list of all routes to pre-render
const routesToRender = [
  { path: '/', render: (c) => renderHomePage(c) },
  { path: '/usa-soccer', render: (c) => renderUSASoccerPage(c) },
  { path: '/live-scores', render: (c) => renderLiveScoresPage(c) },
  { path: '/schedule', render: (c) => renderSchedulePage(c) },
  { path: '/leagues', render: (c) => renderLeaguesPage(c) },
  { path: '/how-to-watch', render: (c) => renderHowToWatchPage(c) },
  { path: '/faq', render: (c) => renderFAQPage(c) },
  { path: '/about', render: (c) => renderAboutPage(c) },
  { path: '/contact', render: (c) => renderContactPage(c) },
  { path: '/privacy', render: (c) => renderPrivacyPage(c) },
  { path: '/terms', render: (c) => renderTermsPage(c) },
  { path: '/disclaimer', render: (c) => renderDisclaimerPage(c) },
  { path: '/copyright', render: (c) => renderCopyrightPage(c) },
  { path: '/news', render: (c) => renderNewsPage(c) },
  { path: '/404', render: (c) => renderNotFoundPage(c) },
];

// Add 14 leagues
leagues.forEach(league => {
  routesToRender.push({
    path: `/${league.slug}`,
    render: (c) => renderLeagueDetailPage(c, league.slug)
  });
});

// Add 13 sports
sports.forEach(sport => {
  routesToRender.push({
    path: `/sport/${sport.slug}`,
    render: (c) => renderSportPage(c, sport.slug)
  });
});

// Add news articles
newsArticles.forEach(article => {
  routesToRender.push({
    path: `/news/${article.slug}`,
    render: (c) => renderNewsDetailPage(c, article.slug)
  });
});

// Add match detail pages
matches.forEach(match => {
  routesToRender.push({
    path: `/match/${match.slug}`,
    render: (c) => renderMatchDetailPage(c, match.slug)
  });
});

console.log(`[Pre-render Engine] Starting static generation for ${routesToRender.length} routes...`);

let generatedCount = 0;

for (const routeConfig of routesToRender) {
  const vdom = createVirtualDOM(routeConfig.path);
  
  // Attach globals for page rendering
  globalThis.document = vdom.document;
  globalThis.window = vdom.window;

  // Render Header, Page Content, and Footer
  renderHeader(routeConfig.path);
  routeConfig.render(vdom.mainContent);
  renderFooter();

  const title = vdom.getTitle();
  const descEl = vdom.metaTags.get('meta[name="description"]');
  const description = descEl?.getAttribute('content') || '';
  const canonicalEl = vdom.metaTags.get('link[rel="canonical"]');
  const canonical = canonicalEl?.getAttribute('href') || `https://www.streameastsoccer.live${routeConfig.path === '/' ? '/' : routeConfig.path}`;
  const robotsEl = vdom.metaTags.get('meta[name="robots"]');
  const robots = robotsEl?.getAttribute('content') || 'index, follow';
  const ogTitle = vdom.metaTags.get('meta[property="og:title"]')?.getAttribute('content') || title;
  const ogDesc = vdom.metaTags.get('meta[property="og:description"]')?.getAttribute('content') || description;
  const ogUrl = vdom.metaTags.get('meta[property="og:url"]')?.getAttribute('content') || canonical;
  const ogType = vdom.metaTags.get('meta[property="og:type"]')?.getAttribute('content') || 'website';
  const ogImage = vdom.metaTags.get('meta[property="og:image"]')?.getAttribute('content') || 'https://www.streameastsoccer.live/images/og-streameast-soccer.png';
  const twTitle = vdom.metaTags.get('meta[name="twitter:title"]')?.getAttribute('content') || title;
  const twDesc = vdom.metaTags.get('meta[name="twitter:description"]')?.getAttribute('content') || description;
  const twUrl = vdom.metaTags.get('meta[name="twitter:url"]')?.getAttribute('content') || canonical;
  const twImage = vdom.metaTags.get('meta[name="twitter:image"]')?.getAttribute('content') || ogImage;
  const schemaJson = vdom.seoStructuredData.textContent || '';

  // Inject into template
  let pageHtml = baseHtmlTemplate;

  // Replace document title
  pageHtml = pageHtml.replace(/<title[^>]*>.*?<\/title>/is, `<title id="page-title">${title}</title>`);
  pageHtml = pageHtml.replace(/<meta name="title"[^>]*>/i, `<meta name="title" id="meta-title" content="${title}">`);
  pageHtml = pageHtml.replace(/<meta name="description"[^>]*>/i, `<meta name="description" id="meta-description" content="${description}">`);
  pageHtml = pageHtml.replace(/<meta name="robots"[^>]*>/i, `<meta name="robots" content="${robots}">`);
  pageHtml = pageHtml.replace(/<link rel="canonical"[^>]*>/i, `<link rel="canonical" id="canonical-url" href="${canonical}">`);

  // Open Graph
  pageHtml = pageHtml.replace(/<meta property="og:title"[^>]*>/i, `<meta property="og:title" id="og-title" content="${ogTitle}">`);
  pageHtml = pageHtml.replace(/<meta property="og:description"[^>]*>/i, `<meta property="og:description" id="og-description" content="${ogDesc}">`);
  pageHtml = pageHtml.replace(/<meta property="og:url"[^>]*>/i, `<meta property="og:url" id="og-url" content="${ogUrl}">`);
  pageHtml = pageHtml.replace(/<meta property="og:type"[^>]*>/i, `<meta property="og:type" id="og-type" content="${ogType}">`);
  pageHtml = pageHtml.replace(/<meta property="og:image"[^>]*>/i, `<meta property="og:image" id="og-image" content="${ogImage}">`);

  // Twitter
  pageHtml = pageHtml.replace(/<meta name="twitter:title"[^>]*>/i, `<meta name="twitter:title" id="twitter-title" content="${twTitle}">`);
  pageHtml = pageHtml.replace(/<meta name="twitter:description"[^>]*>/i, `<meta name="twitter:description" id="twitter-description" content="${twDesc}">`);
  pageHtml = pageHtml.replace(/<meta name="twitter:url"[^>]*>/i, `<meta name="twitter:url" id="twitter-url" content="${twUrl}">`);
  pageHtml = pageHtml.replace(/<meta name="twitter:image"[^>]*>/i, `<meta name="twitter:image" id="twitter-image" content="${twImage}">`);

  // Structured Data Schema
  if (schemaJson) {
    pageHtml = pageHtml.replace(/<script type="application\/ld\+json" id="seo-structured-data">.*?<\/script>/is, 
      `<script type="application/ld+json" id="seo-structured-data">\n${schemaJson}\n  </script>`);
  }

  // Inject Header, Main Content, and Footer
  const headerHtml = vdom.headerRoot.innerHTML;
  const mainHtml = vdom.mainContent.innerHTML;
  const footerHtml = vdom.footerRoot.innerHTML;

  pageHtml = pageHtml.replace('<div id="header-root"></div>', `<div id="header-root">${headerHtml}</div>`);
  pageHtml = pageHtml.replace('<main id="main-content" role="main"></main>', `<main id="main-content" role="main">${mainHtml}</main>`);
  pageHtml = pageHtml.replace('<div id="footer-root"></div>', `<div id="footer-root">${footerHtml}</div>`);

  // Determine output filepath
  if (routeConfig.path === '/') {
    fs.writeFileSync(path.resolve(distDir, 'index.html'), pageHtml, 'utf-8');
  } else if (routeConfig.path === '/404') {
    fs.writeFileSync(path.resolve(distDir, '404.html'), pageHtml, 'utf-8');
  } else {
    const cleanRoute = routeConfig.path.replace(/^\//, '');
    const routeDir = path.resolve(distDir, cleanRoute);
    fs.mkdirSync(routeDir, { recursive: true });
    fs.writeFileSync(path.resolve(routeDir, 'index.html'), pageHtml, 'utf-8');
    // Also save clean route .html for hosting compatibility
    const singleHtmlPath = path.resolve(distDir, `${cleanRoute}.html`);
    const singleHtmlDir = path.dirname(singleHtmlPath);
    if (!fs.existsSync(singleHtmlDir)) {
      fs.mkdirSync(singleHtmlDir, { recursive: true });
    }
    fs.writeFileSync(singleHtmlPath, pageHtml, 'utf-8');
  }

  generatedCount++;
}

console.log(`[Pre-render Engine] Successfully generated static pre-rendered HTML for all ${generatedCount} routes into dist/.`);
