/**
 * StreamEast Soccer - BlogCard Component
 * Displays blog card with category pill, publication date, reading time, author, title, excerpt and CTA link.
 */

export function createBlogCard(blog) {
  return `
    <article class="news-card blog-card" data-blog-id="${blog.id}">
      <div class="news-thumb">
        ${blog.image ? `
          <img src="${blog.image}" alt="${blog.title}" style="width:100%; height:100%; object-fit:cover; display:block;" loading="lazy" />
        ` : `
          <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="400" height="200" fill="#0d141e"/>
            <circle cx="200" cy="100" r="85" stroke="#00e676" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.35"/>
            <rect x="140" y="55" width="120" height="90" rx="8" fill="#151d2a" stroke="#00e676" stroke-width="1.5"/>
            <path d="M155 75H245M155 95H225M155 115H205" stroke="#00e676" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
            <circle cx="270" cy="65" r="14" fill="#00e676" opacity="0.9"/>
            <polygon points="270,58 274,66 266,66" fill="#0c131d"/>
          </svg>
        `}
        <span class="badge badge-league" style="position:absolute; top:1rem; left:1rem; background:rgba(6,9,13,0.85); backdrop-filter:blur(4px); border-color:var(--border-green); color:var(--accent-green);">
          ${blog.category}
        </span>
      </div>

      <div class="news-body">
        <div class="news-meta">
          <span>${blog.publishDate}</span>
          <span>&bull;</span>
          <span>${blog.readTime}</span>
          <span>&bull;</span>
          <span>By ${blog.author}</span>
        </div>

        <h3 style="font-size:1.15rem; line-height:1.35; margin-bottom:0.6rem; color:var(--text-primary);">${blog.title}</h3>
        <p class="news-excerpt" style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:1rem; flex:1;">${blog.excerpt}</p>

        <div style="display:flex; align-items:center; justify-content:space-between; margin-top:auto; padding-top:0.75rem; border-top:1px solid var(--border-subtle);">
          <div style="display:flex; gap:0.35rem; flex-wrap:wrap;">
            ${(blog.tags || []).slice(0, 2).map(tag => `<span style="font-size:0.7rem; color:var(--text-dim); background:rgba(255,255,255,0.04); padding:0.15rem 0.45rem; border-radius:4px;">#${tag}</span>`).join('')}
          </div>
          <a href="/blog/${blog.slug}" class="btn btn-secondary btn-sm" data-link>
            Read Blog &rarr;
          </a>
        </div>
      </div>
    </article>
  `;
}
