/**
 * StreamEast Soccer - 404 Not Found Page
 */

import { updateSEO, getCanonicalUrl } from '../utils/seo.js';

export function renderNotFoundPage(container) {
  updateSEO({
    title: '404 Page Not Found | StreamEast Soccer',
    description: 'The requested soccer page, match, or schedule could not be found on StreamEast Soccer.',
    canonical: getCanonicalUrl('/404')
  });

  container.innerHTML = `
    <div class="container" style="padding:5rem 1.5rem; text-align:center;">
      <div style="max-width:560px; margin:0 auto;">
        <span class="badge badge-league" style="border-color:var(--status-live); color:var(--status-live); margin-bottom:1.5rem;">
          Error 404
        </span>
        <h1 style="font-size:clamp(2.5rem, 5vw, 4rem); margin-bottom:1rem;">Out of Bounds</h1>
        <p class="text-lead" style="margin:0 auto 2rem;">
          The soccer fixture, league page, or article you were looking for doesn't exist or has moved to another pitch.
        </p>

        <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
          <a href="/" class="btn btn-primary" data-link>
            Return to Homepage
          </a>
          <a href="/schedule" class="btn btn-secondary" data-link>
            Browse Match Schedule
          </a>
        </div>
      </div>
    </div>
  `;
}
