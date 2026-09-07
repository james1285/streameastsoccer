/**
 * StreamEast Soccer - News Page (/news)
 * Professional soccer journalism hub featuring breaking news, match previews, and tactical reports.
 */

import { updateSEO, generateBreadcrumbSchema, getCanonicalUrl } from '../utils/seo.js';
import { newsArticles, getFeaturedNews } from '../data/news.js';
import { createBreadcrumbs } from '../components/Breadcrumbs.js';
import { createNewsCard } from '../components/NewsCard.js';

export function renderNewsPage(container) {
  // Update SEO
  updateSEO({
    title: 'Soccer News, Match Previews & Tactical Reports | StreamEast Soccer',
    description: 'Read original soccer news, tactical previews, European football analysis, transfer trends, and league updates on StreamEast Soccer.',
    canonical: getCanonicalUrl('/news'),
    structuredData: generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Soccer News', url: '/news' }
    ])
  });

  const featured = getFeaturedNews();
  const regularArticles = newsArticles.filter(n => n.id !== featured.id);

  const breadcrumbsHtml = createBreadcrumbs([
    { label: 'News', path: '/news' }
  ]);

  container.innerHTML = `
    <div class="container" style="padding-top:2rem;">
      ${breadcrumbsHtml}

      <header style="margin-bottom:2.5rem;">
        <span class="text-green" style="font-size:0.85rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em;">Editorial & Insights</span>
        <h1 style="margin-top:0.25rem;">Soccer News & Tactical Analysis</h1>
        <p class="text-lead">
          Explore match previews, transfer developments, tactical breakdowns, and comprehensive coverage across the top leagues in world football.
        </p>
      </header>

      <!-- Featured Story Banner -->
      <article class="card card-interactive" style="margin-bottom:3rem; padding:0; overflow:hidden; display:grid; grid-template-columns:1.2fr 1fr; gap:0;">
        <div class="news-thumb" style="height:100%; min-height:280px;">
          <svg viewBox="0 0 600 350" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%; height:100%;">
            <rect width="600" height="350" fill="#0d141e"/>
            <circle cx="300" cy="175" r="130" stroke="#00e676" stroke-width="2" stroke-dasharray="6 6" opacity="0.3"/>
            <polygon points="300,90 390,160 350,260 250,260 210,160" fill="#151d2a" stroke="#00e676" stroke-width="2.5"/>
            <circle cx="300" cy="175" r="30" fill="#00e676" opacity="0.8"/>
          </svg>
        </div>

        <div style="padding:2.5rem; display:flex; flex-direction:column; justify-content:center;">
          <span class="badge badge-league" style="align-self:flex-start; margin-bottom:1rem; border-color:var(--border-green); color:var(--accent-green);">
            Featured Story &bull; ${featured.category}
          </span>
          <h2 style="font-size:clamp(1.4rem, 2.5vw, 1.9rem); line-height:1.3; margin-bottom:1rem;">
            ${featured.title}
          </h2>
          <p style="color:var(--text-secondary); margin-bottom:1.5rem; font-size:1rem; line-height:1.6;">
            ${featured.excerpt}
          </p>
          <div style="display:flex; align-items:center; justify-content:space-between; margin-top:auto; font-size:0.85rem; color:var(--text-dim);">
            <span>By ${featured.author} &bull; ${featured.readTime}</span>
            <a href="/news/${featured.slug}" class="btn btn-primary btn-sm" data-link>
              Read Full Story &rarr;
            </a>
          </div>
        </div>
      </article>

      <!-- Latest News Grid -->
      <section aria-labelledby="latest-articles-heading">
        <h2 id="latest-articles-heading" style="font-size:1.6rem; margin-bottom:1.5rem;">Latest Articles & Previews</h2>
        <div class="grid-news">
          ${regularArticles.map(a => createNewsCard(a)).join('')}
        </div>
      </section>
    </div>
  `;
}
