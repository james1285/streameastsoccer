/**
 * StreamEast Soccer - Blog Detail Page (/blog/:slug)
 * Renders complete editorial blog posts, formatted tables, FAQ accordion,
 * comment discussion section, and valid BlogPosting + FAQPage JSON-LD structured schemas.
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
                alt="${blog.title} - 20 Clubs, 38 Matches per Club, 380 Matches in Total" 
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
                <text x="440" y="170" fill="#00e676" font-family="'Outfit', sans-serif" font-weight="900" font-size="52" text-anchor="middle">380</text>
                <text x="440" y="210" fill="#f8fafc" font-family="'Outfit', sans-serif" font-weight="700" font-size="16" text-anchor="middle">PREMIER LEAGUE FIXTURES</text>
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
              <li><a href="#how-many-matches">How Many Matches Are in a Premier League Season?</a></li>
              <li><a href="#why-38-games">Why Does Each Club Play 38 Games?</a></li>
              <li><a href="#total-breakdown">How Is the 380 Total Broken Down?</a></li>
              <li><a href="#history-462">Why Did the Premier League Once Have 462 Matches?</a></li>
              <li><a href="#fixtures-decided">How Are Premier League Fixtures Decided?</a></li>
              <li><a href="#real-workload">How Many Matches Does a Club Really Play in a Season?</a></li>
              <li><a href="#postponed-matches">What Happens When Matches Are Postponed?</a></li>
              <li><a href="#comparison-leagues">How Does 380 Compare With Other Leagues?</a></li>
              <li><a href="#title-relegation">How Do 38 Games Shape the Title Race and Relegation?</a></li>
              <li><a href="#california-kickoff">What Time Do Premier League Matches Start in California?</a></li>
              <li><a href="#usa-channels">Which Channels Show Premier League Games in the USA?</a></li>
              <li><a href="#future-changes">Could the Premier League Change the Number of Matches?</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
              <li><a href="#final-thoughts">Final Thoughts</a></li>
            </ul>
          </nav>

          <!-- Main Article Editorial Content -->
          <div class="article-content blog-content" style="font-size:1.08rem; line-height:1.8; color:var(--text-secondary);">
            ${blog.contentHtml}
          </div>

          <!-- Interactive Comments & Discussion Section -->
          <section id="comments-section" class="blog-comments-container" style="margin-top:4rem; padding-top:2.5rem; border-top:1px solid var(--border-subtle);">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem; flex-wrap:wrap; gap:1rem;">
              <h3 style="font-size:1.4rem; margin:0; display:flex; align-items:center; gap:0.5rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                Reader Discussion & Comments (<span id="comments-count">2</span>)
              </h3>
              <span style="font-size:0.85rem; color:var(--accent-green); font-weight:600;">Join the debate</span>
            </div>

            <div class="card" style="background:var(--bg-surface); padding:1.5rem; margin-bottom:2rem;">
              <p style="font-weight:600; color:var(--text-primary); margin-bottom:1rem;">
                💬 "Would you keep 20 clubs, or would you cut the league to 18 for a lighter calendar? Share your take in the comments."
              </p>

              <form id="blog-comment-form">
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:1rem;">
                  <div class="form-group" style="margin-bottom:0;">
                    <label for="comment-author" class="form-label" style="font-size:0.85rem;">Your Name / Username</label>
                    <input type="text" id="comment-author" class="form-control" placeholder="e.g. Alex (Arsenal Fan)" required />
                  </div>
                  <div class="form-group" style="margin-bottom:0;">
                    <label for="comment-stance" class="form-label" style="font-size:0.85rem;">Your Stance</label>
                    <select id="comment-stance" class="form-control">
                      <option value="Keep 20 clubs (380 matches)">Keep 20 clubs (380 matches)</option>
                      <option value="Reduce to 18 clubs (306 matches)">Reduce to 18 clubs (306 matches)</option>
                      <option value="Keep 20 but adjust domestic cups">Keep 20 but adjust domestic cups</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="comment-body" class="form-label" style="font-size:0.85rem;">Your Comment</label>
                  <textarea id="comment-body" class="form-control" rows="3" placeholder="Share your perspective on the 38-game calendar, player fatigue, or fixture congestion..." required></textarea>
                </div>

                <button type="submit" class="btn btn-primary btn-sm">
                  Post Comment
                </button>
              </form>
            </div>

            <!-- Comments List -->
            <div id="blog-comments-list" style="display:flex; flex-direction:column; gap:1rem;">
              <!-- Default Comments -->
              <div class="card" style="padding:1.25rem; background:var(--bg-card);">
                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.5rem;">
                  <div style="display:flex; align-items:center; gap:0.5rem;">
                    <span style="font-weight:700; color:var(--text-primary); font-size:0.95rem;">Liam Davies</span>
                    <span class="badge badge-league" style="font-size:0.65rem; padding:0.1rem 0.4rem;">Keep 20 Clubs</span>
                  </div>
                  <span style="font-size:0.75rem; color:var(--text-dim);">October 8, 2026</span>
                </div>
                <p style="margin:0; font-size:0.92rem; color:var(--text-secondary); line-height:1.5;">
                  The 38-match format is what makes the Premier League so prestigious. Over 38 weeks, luck gets eliminated and only the most consistent squad lifts the trophy. Cutting to 18 would hurt mid-table clubs and reduce TV revenue drastically.
                </p>
              </div>

              <div class="card" style="padding:1.25rem; background:var(--bg-card);">
                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.5rem;">
                  <div style="display:flex; align-items:center; gap:0.5rem;">
                    <span style="font-weight:700; color:var(--text-primary); font-size:0.95rem;">Carlos M. (San Diego, CA)</span>
                    <span class="badge badge-league" style="font-size:0.65rem; padding:0.1rem 0.4rem;">Keep 20 but adjust cups</span>
                  </div>
                  <span style="font-size:0.75rem; color:var(--text-dim);">October 8, 2026</span>
                </div>
                <p style="margin:0; font-size:0.92rem; color:var(--text-secondary); line-height:1.5;">
                  Waking up at 7am on Saturdays here in California is our weekend ritual. Don't touch the 380 games! If player fatigue is a concern, they should simplify the League Cup or remove two-legged cup ties instead.
                </p>
              </div>
            </div>
          </section>

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

  // Attach Comment form submission handler
  initCommentForm(container);

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

function initCommentForm(container) {
  const form = container.querySelector('#blog-comment-form');
  const list = container.querySelector('#blog-comments-list');
  const countSpan = container.querySelector('#comments-count');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const author = container.querySelector('#comment-author')?.value.trim();
    const stance = container.querySelector('#comment-stance')?.value;
    const body = container.querySelector('#comment-body')?.value.trim();

    if (!author || !body) return;

    const newCommentEl = document.createElement('div');
    newCommentEl.className = 'card';
    newCommentEl.style.cssText = 'padding:1.25rem; background:var(--bg-card); border-color:var(--border-green);';
    newCommentEl.innerHTML = `
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.5rem;">
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <span style="font-weight:700; color:var(--text-primary); font-size:0.95rem;">${escapeHtml(author)}</span>
          <span class="badge badge-league" style="font-size:0.65rem; padding:0.1rem 0.4rem; color:var(--accent-green); border-color:var(--border-green);">${escapeHtml(stance)}</span>
        </div>
        <span style="font-size:0.75rem; color:var(--accent-green);">Just now</span>
      </div>
      <p style="margin:0; font-size:0.92rem; color:var(--text-secondary); line-height:1.5;">
        ${escapeHtml(body)}
      </p>
    `;

    list?.insertBefore(newCommentEl, list.firstChild);
    form.reset();

    // Update count
    if (countSpan) {
      const current = parseInt(countSpan.textContent, 10) || 2;
      countSpan.textContent = String(current + 1);
    }

    // Show toast confirmation
    showToast('Thank you! Your comment has been posted to the discussion.');
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

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
