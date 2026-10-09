/**
 * StreamEast Soccer - Blog Detail Page (/blog/:slug)
 * Renders complete editorial blog posts, formatted tables, FAQ accordion,
 * author bio/links, and valid BlogPosting + FAQPage JSON-LD structured schemas.
 */

import { updateSEO, generateBlogPostSchema, generateBreadcrumbSchema, getCanonicalUrl } from '../utils/seo.js';
import { getBlogBySlug, getAllBlogs } from '../data/blogs.js';
import { createBreadcrumbs } from '../components/Breadcrumbs.js';
import { createBlogCard } from '../components/BlogCard.js';

export function renderBlogDetailPage(container, slug) {
  const blog = getBlogBySlug(slug);

  if (!blog) {
    container.innerHTML = `
      <div class="container" style="padding:4rem 0; text-align:center;">
        <h2>Blog Post Not Found</h2>
        <p>The requested soccer guide does not exist or may have been updated.</p>
        <a href="/blog" class="btn btn-primary" data-link>Back to Soccer Blog</a>
      </div>
    `;
    return;
  }

  // Update SEO with exact Meta Title, Meta Description, Canonical URL, and structured JSON-LD schemas
  updateSEO({
    title: blog.metaTitle || `${blog.title} | StreamEast Soccer`,
    description: blog.metaDescription || blog.excerpt,
    canonical: getCanonicalUrl(`/blog/${blog.slug}`),
    type: 'article',
    image: blog.image ? getCanonicalUrl(blog.image) : undefined,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: blog.metaTitle || blog.title, url: `/blog/${blog.slug}` }
        ]),
        ...generateBlogPostSchema(blog)['@graph']
      ]
    }
  });

  const breadcrumbsHtml = createBreadcrumbs([
    { label: 'Blog', path: '/blog' },
    { label: blog.title.length > 35 ? blog.title.substring(0, 35) + '...' : blog.title, path: `/blog/${blog.slug}` }
  ]);

  const otherBlogs = getAllBlogs().filter(b => b.id !== blog.id);

  const tocItems = blog.toc && blog.toc.length > 0 ? blog.toc : [
    { id: 'faq', label: 'Frequently Asked Questions' },
    { id: 'final-thoughts', label: 'Final Thoughts' }
  ];

  container.innerHTML = `
    <div class="container" style="padding-top:2rem;">
      ${breadcrumbsHtml}

      <div class="blog-layout" style="display:grid; grid-template-columns:1fr; max-width:880px; margin:0 auto 4rem;">
        <article class="blog-article">
          <!-- Article Header -->
          <header class="blog-header" style="margin-bottom:2.5rem;">
            <div style="display:flex; align-items:center; gap:0.75rem; flex-wrap:wrap; margin-bottom:1rem;">
              <span class="badge badge-league" style="border-color:var(--border-green); color:var(--accent-green);">
                ${blog.category}
              </span>
              <span style="font-size:0.85rem; color:var(--text-dim);">${blog.readTime}</span>
            </div>

            <h1 style="font-size:clamp(1.85rem, 3.8vw, 2.75rem); line-height:1.2; margin-bottom:1.25rem;">
              ${blog.title}
            </h1>

            <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem; padding-bottom:1.5rem; border-bottom:1px solid var(--border-subtle); font-size:0.9rem; color:var(--text-dim);">
              <div style="display:flex; align-items:center; gap:1rem; flex-wrap:wrap;">
                <span><strong>By ${blog.author}</strong></span>
                <span>&bull;</span>
                <span>Published: ${blog.publishDate}</span>
              </div>
              <div style="display:flex; align-items:center; gap:0.5rem;">
                <button id="blog-copy-link-btn" class="btn btn-secondary btn-sm" type="button" title="Copy article link" aria-label="Copy link to clipboard">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  <span>Share</span>
                </button>
              </div>
            </div>
          </header>

          <!-- Banner Visual Graphic -->
          <div class="card" style="margin-bottom:2.5rem; padding:0; overflow:hidden; border-color:var(--border-subtle); background:linear-gradient(135deg, #091018 0%, #131c2a 100%);">
            ${blog.image ? `
              <img 
                src="${blog.image}" 
                alt="${blog.title}" 
                style="width:100%; height:auto; max-height:480px; object-fit:cover; display:block;" 
                loading="eager"
                width="1280"
                height="720"
              />
            ` : `
              <svg viewBox="0 0 880 360" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%; height:260px; display:block;" aria-hidden="true">
                <rect width="880" height="360" fill="#0a0f16"/>
                <circle cx="440" cy="180" r="160" stroke="#00e676" stroke-width="1.5" stroke-dasharray="8 8" opacity="0.25"/>
                <circle cx="440" cy="180" r="110" stroke="#00e676" stroke-width="2" opacity="0.4"/>
                <rect x="340" y="90" width="200" height="180" rx="12" fill="#151d2a" stroke="#00e676" stroke-width="2"/>
                <text x="440" y="170" fill="#00e676" font-family="'Outfit', sans-serif" font-weight="900" font-size="52" text-anchor="middle">PREMIER LEAGUE</text>
                <text x="440" y="210" fill="#f8fafc" font-family="'Outfit', sans-serif" font-weight="700" font-size="16" text-anchor="middle">SOCCER GUIDE</text>
                <circle cx="440" cy="240" r="5" fill="#00e676"/>
              </svg>
            `}
          </div>

          <!-- Table of Contents Quick Nav -->
          <nav class="blog-toc-box" aria-label="Table of contents">
            <div class="blog-toc-header">
              <span style="font-weight:700; font-family:var(--font-heading); font-size:0.95rem; color:var(--text-primary); display:flex; align-items:center; gap:0.4rem;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                Table of Contents
              </span>
            </div>
            <ul class="blog-toc-list">
              ${tocItems.map(item => `<li><a href="#${item.id}">${item.label}</a></li>`).join('')}
            </ul>
          </nav>

          <!-- Main Article Editorial Content -->
          <div class="article-content blog-content" style="font-size:1.08rem; line-height:1.8; color:var(--text-secondary);">
            ${blog.contentHtml}
          </div>

          <!-- Author Bio & Editorial Note -->
          <div class="card" style="margin-top:3.5rem; background:var(--bg-surface); padding:1.75rem; border-color:var(--border-subtle);">
            <h4 style="margin:0 0 0.5rem; font-size:1.1rem; color:var(--text-primary);">About StreamEast Soccer Guides</h4>
            <p style="margin:0 0 0.75rem; font-size:0.95rem; color:var(--text-secondary); line-height:1.6;">
              StreamEast Soccer provides comprehensive fixture schedules, kickoff times across US timezones, and legal broadcast information for soccer fans worldwide.
            </p>
            <div style="display:flex; gap:1rem; flex-wrap:wrap; font-size:0.85rem; color:var(--text-dim);">
              <a href="/" data-link style="color:var(--accent-green);">Today's Soccer Schedule &rarr;</a>
              <a href="/premier-league" data-link style="color:var(--accent-green);">Premier League Hub &rarr;</a>
              <a href="/how-to-watch" data-link style="color:var(--accent-green);">How to Watch in USA &rarr;</a>
            </div>
          </div>
        </article>
      </div>

      <!-- More Guides Section -->
      ${otherBlogs.length ? `
        <section style="max-width:880px; margin:0 auto 3rem; padding-top:2rem; border-top:1px solid var(--border-subtle);">
          <h3 style="margin-bottom:1.5rem; font-size:1.4rem;">More Soccer Guides & Articles</h3>
          <div class="grid-news">
            ${otherBlogs.map(b => createBlogCard(b)).join('')}
          </div>
        </section>
      ` : ''}
    </div>
  `;

  // Attach Accordion behavior to FAQ items
  initBlogAccordions(container);

  // Attach Share button handler
  initShareButton(container);
}

function initBlogAccordions(container) {
  const headers = container.querySelectorAll('.blog-faq-wrapper .accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      const isOpen = item.classList.contains('open');

      // Toggle current item
      if (isOpen) {
        item.classList.remove('open');
        header.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initShareButton(container) {
  const shareBtn = container.querySelector('#blog-copy-link-btn');
  shareBtn?.addEventListener('click', async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        showToast('Link copied to clipboard!');
      } else {
        showToast('Article URL ready to share!');
      }
    } catch {
      showToast('Article URL ready to share!');
    }
  });
}

function showToast(message) {
  const toastRoot = document.getElementById('toast-root');
  if (!toastRoot) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00e676" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;

  toastRoot.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3500);
}
