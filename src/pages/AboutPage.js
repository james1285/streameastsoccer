/**
 * StreamEast Soccer - About Page (/about)
 * Platform mission, editorial policy, schedule accuracy, and independent legal declaration.
 */

import { updateSEO, generateBreadcrumbSchema, getCanonicalUrl } from '../utils/seo.js';
import { createBreadcrumbs } from '../components/Breadcrumbs.js';

export function renderAboutPage(container) {
  // Update SEO
  updateSEO({
    title: 'About Us – Soccer Schedule & Match Information | StreamEast Soccer',
    description: 'Learn about StreamEast Soccer, an independent soccer schedules, fixtures, and legal broadcasting guide created for football enthusiasts worldwide.',
    canonical: getCanonicalUrl('/about'),
    structuredData: generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'About', url: '/about' }
    ])
  });

  const breadcrumbsHtml = createBreadcrumbs([
    { label: 'About Us', path: '/about' }
  ]);

  container.innerHTML = `
    <div class="container" style="padding-top:2rem;">
      ${breadcrumbsHtml}

      <article style="max-width:820px; margin:0 auto 4rem;">
        <header style="margin-bottom:2.5rem;">
          <span class="badge badge-league" style="border-color:var(--border-green); color:var(--accent-green); margin-bottom:1rem;">
            About StreamEast Soccer
          </span>
          <h1 style="margin-bottom:1rem;">Connecting Football Fans to Matches & Schedules</h1>
          <p class="text-lead">
            StreamEast Soccer is an independent soccer information and schedule platform designed to help fans discover matches, fixtures, kickoff times, scores, and legal viewing information.
          </p>
        </header>

        <!-- Mission -->
        <section class="card" style="margin-bottom:2rem; padding:2rem;">
          <h2 style="font-size:1.4rem; margin-bottom:1rem;">Our Mission</h2>
          <p style="font-size:1.05rem; line-height:1.7; color:var(--text-secondary); margin-bottom:1rem;">
            Soccer fandom is truly global, but navigating fragmented television broadcast rights, varying kickoff times, and multiple subscription tiers can be confusing. StreamEast Soccer was developed to bring clarity to the football calendar.
          </p>
          <p style="font-size:1.05rem; line-height:1.7; color:var(--text-secondary); margin:0;">
            We offer accurate kickoff schedules, match previews, and clear signposts to official, licensed broadcasters in every major market.
          </p>
        </section>

        <!-- Editorial Independence & Legal Disclaimer -->
        <section class="card" style="margin-bottom:2rem; padding:2rem; background:rgba(0, 230, 118, 0.03); border-color:var(--border-green);">
          <h2 style="font-size:1.4rem; margin-bottom:1rem; color:var(--accent-green);">Independent Service Declaration</h2>
          <p style="font-size:1rem; line-height:1.7; color:var(--text-secondary); margin-bottom:1rem;">
            StreamEast Soccer is an independent soccer information website. We do NOT falsely claim partnerships, sponsorships, or official affiliations with any sports league, club, broadcaster, or third-party streaming service, nor do we represent or belong to official StreamEast commercial entities.
          </p>
          <p style="font-size:1rem; line-height:1.7; color:var(--text-secondary); margin:0;">
            We do not host, store, broadcast, embed, or facilitate unauthorized streams of live sports content. All trademarks, league emblems, and logos referenced on our website remain the intellectual property of their respective copyright owners and are utilized strictly for informational and editorial purposes.
          </p>
        </section>

        <!-- What We Cover -->
        <section class="card" style="margin-bottom:2.5rem; padding:2rem;">
          <h2 style="font-size:1.4rem; margin-bottom:1rem;">What We Offer</h2>
          <ul style="list-style:none; display:flex; flex-direction:column; gap:0.75rem; color:var(--text-secondary);">
            <li style="display:flex; gap:0.75rem;">
              <span style="color:var(--accent-green); font-weight:bold;">&check;</span>
              <span><strong>Up-to-Date Schedules:</strong> Synchronized kickoff times across Premier League, Champions League, La Liga, Serie A, Bundesliga, Ligue 1, and MLS.</span>
            </li>
            <li style="display:flex; gap:0.75rem;">
              <span style="color:var(--accent-green); font-weight:bold;">&check;</span>
              <span><strong>Verified Match Results:</strong> Real-time and verified full-time scores without fabricated live statistics.</span>
            </li>
            <li style="display:flex; gap:0.75rem;">
              <span style="color:var(--accent-green); font-weight:bold;">&check;</span>
              <span><strong>Broadcaster Directory:</strong> Country-specific guides pointing fans to authorized services like Peacock, Paramount+, ESPN+, Apple TV, and Sky Sports.</span>
            </li>
            <li style="display:flex; gap:0.75rem;">
              <span style="color:var(--accent-green); font-weight:bold;">&check;</span>
              <span><strong>Tactical News & Previews:</strong> Original articles analyzing match tactics, squad rotations, and key European rivalries.</span>
            </li>
          </ul>
        </section>
      </article>
    </div>
  `;
}
