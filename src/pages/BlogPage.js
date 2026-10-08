/**
 * StreamEast Soccer - Blog Hub Page (/blog)
 * Displays soccer guides, rules explainers, tactical insights, and fixture breakdowns.
 */

import { updateSEO, generateBreadcrumbSchema, generateBlogIndexSchema, getCanonicalUrl } from '../utils/seo.js';
import { getAllBlogs, getFeaturedBlog } from '../data/blogs.js';
import { createBreadcrumbs } from '../components/Breadcrumbs.js';
import { createBlogCard } from '../components/BlogCard.js';

export function renderBlogPage(container) {
  const allBlogs = getAllBlogs();
  const featured = getFeaturedBlog();
  const otherBlogs = allBlogs.filter(b => b.id !== featured.id);

  // Update SEO with collection schema & breadcrumbs
  updateSEO({
    title: 'Soccer Blog & Football Guides | StreamEast Soccer',
    description: 'Explore in-depth soccer guides, Premier League fixture breakdowns, rules explainers, TV broadcast schedules, and football insights on StreamEast Soccer.',
    canonical: getCanonicalUrl('/blog'),
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' }
        ]),
        generateBlogIndexSchema(allBlogs)
      ]
    }
  });

  const breadcrumbsHtml = createBreadcrumbs([
    { label: 'Blog', path: '/blog' }
  ]);

  container.innerHTML = `
    <div class="container" style="padding-top:2rem;">
      ${breadcrumbsHtml}

      <header style="margin-bottom:2.5rem;">
        <span class="text-green" style="font-size:0.85rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; display:inline-flex; align-items:center; gap:0.4rem;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          Editorial Guides & Explanations
        </span>
        <h1 style="margin-top:0.25rem;">Soccer Blog & Guides</h1>
        <p class="text-lead">
          In-depth guides, fixture math, competition formats, league history, and broadcast details for passionate football enthusiasts worldwide.
        </p>
      </header>

      <!-- Featured Blog Card Hero -->
      <article class="card card-interactive" style="margin-bottom:3rem; padding:0; overflow:hidden; display:grid; grid-template-columns:1.2fr 1fr; gap:0;">
        <div class="news-thumb" style="height:100%; min-height:300px; background:linear-gradient(135deg, #091018 0%, #111d2d 100%);">
          ${featured.image ? `
            <img src="${featured.image}" alt="${featured.title}" style="width:100%; height:100%; object-fit:cover; display:block;" />
          ` : `
            <svg viewBox="0 0 600 350" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%; height:100%;" aria-hidden="true">
              <rect width="600" height="350" fill="#091018"/>
              <circle cx="300" cy="175" r="140" stroke="#00e676" stroke-width="2" stroke-dasharray="8 8" opacity="0.3"/>
              <rect x="210" y="80" width="180" height="190" rx="12" fill="#151d2a" stroke="#00e676" stroke-width="2.5"/>
              <text x="300" y="150" fill="#00e676" font-family="'Outfit', sans-serif" font-weight="900" font-size="54" text-anchor="middle">380</text>
              <text x="300" y="185" fill="#f8fafc" font-family="'Outfit', sans-serif" font-weight="700" font-size="16" text-anchor="middle">MATCHES</text>
              <path d="M240 220H360" stroke="#00e676" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
              <circle cx="250" cy="240" r="4" fill="#00e676"/>
              <circle cx="300" cy="240" r="4" fill="#00e676"/>
              <circle cx="350" cy="240" r="4" fill="#00e676"/>
            </svg>
          `}
        </div>

        <div style="padding:2.5rem; display:flex; flex-direction:column; justify-content:center;">
          <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:1rem;">
            <span class="badge badge-league" style="border-color:var(--border-green); color:var(--accent-green);">
              Featured &bull; ${featured.category}
            </span>
            <span style="font-size:0.8rem; color:var(--text-dim);">${featured.readTime}</span>
          </div>
          
          <h2 style="font-size:clamp(1.4rem, 2.5vw, 1.9rem); line-height:1.3; margin-bottom:1rem;">
            <a href="/blog/${featured.slug}" data-link style="color:var(--text-primary); text-decoration:none;">
              ${featured.metaTitle || featured.title}
            </a>
          </h2>

          <p style="color:var(--text-secondary); margin-bottom:1.5rem; font-size:1rem; line-height:1.6;">
            ${featured.excerpt}
          </p>

          <div style="display:flex; align-items:center; justify-content:space-between; margin-top:auto; font-size:0.85rem; color:var(--text-dim); flex-wrap:wrap; gap:1rem;">
            <span>By ${featured.author} &bull; ${featured.publishDate}</span>
            <a href="/blog/${featured.slug}" class="btn btn-primary btn-sm" data-link>
              Read Full Guide &rarr;
            </a>
          </div>
        </div>
      </article>

      <!-- Blog Posts Grid / Directory -->
      <section aria-labelledby="all-blogs-heading" style="margin-bottom:4rem;">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem; flex-wrap:wrap; gap:1rem;">
          <h2 id="all-blogs-heading" style="font-size:1.6rem; margin-bottom:0;">All Blog Guides & Articles</h2>
          <span style="font-size:0.9rem; color:var(--text-muted);">${allBlogs.length} Articles Available</span>
        </div>

        <div class="grid-news">
          ${allBlogs.map(b => createBlogCard(b)).join('')}
        </div>
      </section>

      <!-- Knowledge & Resources CTA Box -->
      <div class="card" style="background:linear-gradient(135deg, var(--bg-card) 0%, var(--bg-surface) 100%); border-color:var(--border-green); padding:2.5rem; margin-bottom:3rem; text-align:center;">
        <h3 style="font-size:1.4rem; margin-bottom:0.75rem;">Looking for Live Soccer Match Schedules?</h3>
        <p style="max-width:620px; margin:0 auto 1.5rem; color:var(--text-secondary);">
          Check today's real-time kickoff times, live score updates, broadcast channel listings, and head-to-head fixtures across all major European and American leagues.
        </p>
        <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
          <a href="/" class="btn btn-primary" data-link>Explore Today's Matches</a>
          <a href="/schedule" class="btn btn-secondary" data-link>View Full Schedule</a>
        </div>
      </div>
    </div>
  `;
}
