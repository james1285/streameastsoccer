/**
 * StreamEast Soccer - News Detail Page (/news/:slug)
 * Full editorial article view with rich typography, author credentials, and Article JSON-LD schema.
 */

import { updateSEO, generateArticleSchema, generateBreadcrumbSchema, getCanonicalUrl } from '../utils/seo.js';
import { getNewsBySlug, getAllNews } from '../data/news.js';
import { createBreadcrumbs } from '../components/Breadcrumbs.js';
import { createNewsCard } from '../components/NewsCard.js';

export function renderNewsDetailPage(container, slug) {
  const article = getNewsBySlug(slug);

  if (!article) {
    container.innerHTML = `
      <div class="container" style="padding:4rem 0; text-align:center;">
        <h2>Article Not Found</h2>
        <p>The requested soccer article does not exist or has been relocated.</p>
        <a href="/news" class="btn btn-primary" data-link>Back to Soccer News</a>
      </div>
    `;
    return;
  }

  // Update SEO with Article Structured Data
  updateSEO({
    title: `${article.title} | StreamEast Soccer`,
    description: article.excerpt,
    canonical: getCanonicalUrl(`/news/${article.slug}`),
    type: 'article',
    structuredData: generateArticleSchema(article)
  });

  const breadcrumbsHtml = createBreadcrumbs([
    { label: 'News', path: '/news' },
    { label: article.title.length > 30 ? article.title.substring(0, 30) + '...' : article.title, path: `/news/${article.slug}` }
  ]);

  const relatedArticles = getAllNews().filter(n => n.id !== article.id).slice(0, 2);

  container.innerHTML = `
    <div class="container" style="padding-top:2rem;">
      ${breadcrumbsHtml}

      <article style="max-width:840px; margin:0 auto 4rem;">
        <header style="margin-bottom:2.5rem;">
          <span class="badge badge-league" style="border-color:var(--border-green); color:var(--accent-green); margin-bottom:1rem;">
            ${article.category}
          </span>
          <h1 style="font-size:clamp(1.8rem, 3.5vw, 2.8rem); line-height:1.2; margin-bottom:1.25rem;">
            ${article.title}
          </h1>
          <div style="display:flex; align-items:center; gap:1rem; flex-wrap:wrap; font-size:0.9rem; color:var(--text-dim); padding-bottom:1.5rem; border-bottom:1px solid var(--border-subtle);">
            <span><strong>By ${article.author}</strong></span>
            <span>&bull;</span>
            <span>Published on ${article.publishDate}</span>
            <span>&bull;</span>
            <span>${article.readTime}</span>
          </div>
        </header>

        <!-- Article Banner Image -->
        <div class="card" style="margin-bottom:2.5rem; padding:0; overflow:hidden; border-color:var(--border-subtle);">
          <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%; height:320px; display:block;">
            <rect width="800" height="400" fill="#0d141e"/>
            <circle cx="400" cy="200" r="140" stroke="#00e676" stroke-width="2" stroke-dasharray="6 6" opacity="0.4"/>
            <polygon points="400,100 500,180 460,300 340,300 300,180" fill="#151d2a" stroke="#00e676" stroke-width="3"/>
            <circle cx="400" cy="200" r="25" fill="#00e676"/>
          </svg>
        </div>

        <!-- Article Editorial Body -->
        <div class="article-content" style="font-size:1.1rem; line-height:1.8; color:var(--text-secondary);">
          ${article.content}
        </div>

        <!-- Author Byline & Disclaimer -->
        <div class="card" style="margin-top:3rem; background:var(--bg-surface); padding:1.5rem;">
          <h4 style="margin:0 0 0.5rem; font-size:1.1rem;">About the Author</h4>
          <p style="margin:0 0 0.75rem; font-size:0.95rem; color:var(--text-muted);">
            ${article.author} is a senior soccer analyst covering tactical trends, European competitions, and global football broadcasting developments for StreamEast Soccer.
          </p>
          <div style="font-size:0.8rem; color:var(--text-dim);">
            StreamEast Soccer is an independent soccer analysis and schedule guide.
          </div>
        </div>
      </article>

      <!-- Related Stories -->
      ${relatedArticles.length ? `
        <section style="max-width:840px; margin:0 auto 3rem; padding-top:2rem; border-top:1px solid var(--border-subtle);">
          <h3 style="margin-bottom:1.5rem; font-size:1.4rem;">Related Articles</h3>
          <div class="grid-news" style="grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));">
            ${relatedArticles.map(a => createNewsCard(a)).join('')}
          </div>
        </section>
      ` : ''}
    </div>
  `;
}
