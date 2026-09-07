/**
 * StreamEast Soccer - NewsCard Component
 * Displays soccer news thumbnail, category pill, publication date, headline, and link.
 */

export function createNewsCard(article) {
  return `
    <article class="news-card" data-news-id="${article.id}">
      <div class="news-thumb">
        <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="200" fill="#0d141e"/>
          <circle cx="200" cy="100" r="80" stroke="#00e676" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.4"/>
          <circle cx="200" cy="100" r="40" fill="#151d2a" stroke="#00e676" stroke-width="2"/>
          <path d="M170 140L230 60" stroke="#00e676" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
          <polygon points="200,85 210,95 205,110 195,110 190,95" fill="#00e676"/>
        </svg>
        <span class="badge badge-league" style="position:absolute; top:1rem; left:1rem; background:rgba(6,9,13,0.85); backdrop-filter:blur(4px); border-color:var(--border-green);">
          ${article.category}
        </span>
      </div>

      <div class="news-body">
        <div class="news-meta">
          <span>${article.publishDate}</span>
          <span>&bull;</span>
          <span>${article.readTime}</span>
          <span>&bull;</span>
          <span>By ${article.author}</span>
        </div>

        <h3>${article.title}</h3>
        <p class="news-excerpt">${article.excerpt}</p>

        <a href="/news/${article.slug}" class="btn btn-secondary btn-sm" style="align-self:flex-start; margin-top:auto;" data-link>
          Read Article &rarr;
        </a>
      </div>
    </article>
  `;
}
