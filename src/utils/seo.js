/**
 * StreamEast Soccer - SEO & Metadata Manager
 * Manages dynamic document title, meta descriptions, canonical links, OpenGraph,
 * Twitter cards, and structured JSON-LD schemas on every route change.
 */

export const SITE_URL = 'https://www.streameastsoccer.live';

export function getCanonicalUrl(path = '') {
  if (!path || path === '/') return `${SITE_URL}/`;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

export const DEFAULT_SEO = {
  title: 'StreamEast Soccer – Live Soccer Schedule & Streaming Guide',
  description: 'StreamEast Soccer brings you today\'s soccer matches, upcoming fixtures, schedules, scores, league information and legal ways to watch football online.',
  canonical: `${SITE_URL}/`,
  type: 'website',
  image: `${SITE_URL}/images/og-streameast-soccer.png`
};

export function updateSEO({
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  canonical = DEFAULT_SEO.canonical,
  type = DEFAULT_SEO.type,
  image = DEFAULT_SEO.image,
  robots = 'index, follow',
  structuredData = null
} = {}) {
  // Update document title
  document.title = title;

  // Helper to set meta attribute
  const setMeta = (selector, attribute, value) => {
    let el = document.querySelector(selector);
    if (!el) {
      el = document.createElement('meta');
      if (selector.startsWith('meta[name=')) {
        const name = selector.match(/name="([^"]+)"/)?.[1];
        if (name) el.setAttribute('name', name);
      } else if (selector.startsWith('meta[property=')) {
        const prop = selector.match(/property="([^"]+)"/)?.[1];
        if (prop) el.setAttribute('property', prop);
      }
      document.head.appendChild(el);
    }
    el.setAttribute(attribute, value);
  };

  // Primary Meta Tags
  setMeta('meta[name="title"]', 'content', title);
  setMeta('meta[name="description"]', 'content', description);
  setMeta('meta[name="robots"]', 'content', robots);

  // Canonical link
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', canonical);

  // Open Graph
  setMeta('meta[property="og:title"]', 'content', title);
  setMeta('meta[property="og:description"]', 'content', description);
  setMeta('meta[property="og:url"]', 'content', canonical);
  setMeta('meta[property="og:type"]', 'content', type);
  setMeta('meta[property="og:image"]', 'content', image);

  // Twitter
  setMeta('meta[name="twitter:title"]', 'content', title);
  setMeta('meta[name="twitter:description"]', 'content', description);
  setMeta('meta[name="twitter:url"]', 'content', canonical);
  setMeta('meta[name="twitter:image"]', 'content', image);

  // JSON-LD Structured Data
  let scriptEl = document.getElementById('seo-structured-data');
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = 'seo-structured-data';
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }

  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'StreamEast Soccer',
    'url': `${SITE_URL}/`,
    'description': description
  };

  const schemaToInject = structuredData ? structuredData : baseSchema;
  scriptEl.textContent = JSON.stringify(schemaToInject, null, 2);

  // Synchronize Google Analytics page view on SPA route navigation
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_title: title,
      page_location: window.location.href,
      page_path: window.location.pathname
    });
  }
}

/**
 * Generates SportsEvent schema for a match
 */
export function generateMatchSchema(match, homeTeam, awayTeam, league) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    'name': `${homeTeam.name} vs ${awayTeam.name}`,
    'description': `${league.name} match between ${homeTeam.name} and ${awayTeam.name} at ${match.venue}. Kickoff: ${match.displayTime}.`,
    'startDate': `${match.date}T${match.kickoffTime}:00Z`,
    'sport': 'Soccer',
    'competitor': [
      {
        '@type': 'SportsTeam',
        'name': homeTeam.name,
        'homeLocation': homeTeam.city
      },
      {
        '@type': 'SportsTeam',
        'name': awayTeam.name,
        'homeLocation': awayTeam.city
      }
    ],
    'location': {
      '@type': 'Place',
      'name': match.venue,
      'address': match.venue
    },
    'offers': {
      '@type': 'Offer',
      'category': 'Broadcasting',
      'description': `Legal live broadcast via ${match.broadcastInfo?.us || 'Official Broadcaster'} (US) and ${match.broadcastInfo?.uk || 'Official Broadcaster'} (UK)`
    }
  };
}

/**
 * Generates Article schema for news
 */
export function generateArticleSchema(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    'headline': article.title,
    'description': article.excerpt,
    'datePublished': `${article.publishDate}T09:00:00Z`,
    'dateModified': `${article.publishDate}T09:00:00Z`,
    'author': {
      '@type': 'Person',
      'name': article.author
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'StreamEast Soccer',
      'url': `${SITE_URL}/`
    },
    'mainEntityOfPage': `${SITE_URL}/news/${article.slug}`
  };
}

/**
 * Generates BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url ? (item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`) : undefined
    }))
  };
}

/**
 * Generates BlogPosting & FAQPage combined schema for blog detail pages
 */
export function generateBlogPostSchema(blog) {
  const blogUrl = `${SITE_URL}/blog/${blog.slug}`;
  const graph = [
    {
      '@type': 'BlogPosting',
      '@id': `${blogUrl}#article`,
      'isPartOf': {
        '@type': 'Blog',
        '@id': `${SITE_URL}/blog#blog`,
        'name': 'StreamEast Soccer Blog',
        'url': `${SITE_URL}/blog`
      },
      'headline': blog.metaTitle || blog.title,
      'name': blog.title,
      'description': blog.metaDescription || blog.excerpt,
      'image': blog.image ? `${SITE_URL}${blog.image}` : `${SITE_URL}/images/og-streameast-soccer.png`,
      'datePublished': `${blog.publishDate}T08:00:00Z`,
      'dateModified': `${blog.publishDate}T08:00:00Z`,
      'mainEntityOfPage': blogUrl,
      'url': blogUrl,
      'author': {
        '@type': 'Organization',
        'name': blog.author || 'StreamEast Soccer Editorial',
        'url': `${SITE_URL}/`
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'StreamEast Soccer',
        'url': `${SITE_URL}/`,
        'logo': {
          '@type': 'ImageObject',
          'url': `${SITE_URL}/images/og-streameast-soccer.png`
        }
      },
      'articleSection': blog.category || 'Soccer Guides',
      'inLanguage': 'en-US'
    }
  ];

  if (blog.faqs && blog.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${blogUrl}#faq`,
      'mainEntity': blog.faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph
  };
}

/**
 * Generates Blog collection schema for blog index page
 */
export function generateBlogIndexSchema(blogs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_URL}/blog#blog`,
    'name': 'StreamEast Soccer Blog & Football Guides',
    'url': `${SITE_URL}/blog`,
    'description': 'In-depth football guides, Premier League fixture explainers, match rules, broadcast schedules, and soccer tactical insights.',
    'publisher': {
      '@type': 'Organization',
      'name': 'StreamEast Soccer',
      'url': `${SITE_URL}/`
    },
    'blogPost': blogs.map(b => ({
      '@type': 'BlogPosting',
      'headline': b.metaTitle || b.title,
      'url': `${SITE_URL}/blog/${b.slug}`,
      'datePublished': `${b.publishDate}T08:00:00Z`,
      'description': b.metaDescription || b.excerpt
    }))
  };
}

