/**
 * StreamEast Soccer - How to Watch Legally Page (/how-to-watch)
 * Complete guide to official licensed broadcasters by competition and country.
 */

import { updateSEO, generateBreadcrumbSchema, getCanonicalUrl } from '../utils/seo.js';
import { broadcastersByRegion } from '../data/broadcasters.js';
import { leagues } from '../data/leagues.js';
import { createBreadcrumbs } from '../components/Breadcrumbs.js';

export function renderHowToWatchPage(container) {
  // Update SEO
  updateSEO({
    title: 'How to Legally Watch Soccer Online – Broadcaster & Streaming Guide | StreamEast Soccer',
    description: 'Learn where to legally watch soccer online in the US, UK, Canada, and Australia. Official licensed streaming platforms and TV networks for Premier League, Champions League, and more.',
    canonical: getCanonicalUrl('/how-to-watch'),
    structuredData: generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'How to Watch', url: '/how-to-watch' }
    ])
  });

  const breadcrumbsHtml = createBreadcrumbs([
    { label: 'How to Watch', path: '/how-to-watch' }
  ]);

  container.innerHTML = `
    <div class="container" style="padding-top:2rem;">
      ${breadcrumbsHtml}

      <header style="margin-bottom:2.5rem; max-width:860px;">
        <span class="badge badge-league" style="border-color:var(--border-green); color:var(--accent-green); margin-bottom:1rem;">
          Official Broadcaster Directory
        </span>
        <h1 style="margin-bottom:1rem;">How to Watch Live Soccer Online Legally</h1>
        <p class="text-lead">
          Sports broadcasting rights are licensed on a country-by-country basis. StreamEast Soccer helps supporters find legal, high-definition, and authorized streaming options for every major tournament.
        </p>
      </header>

      <!-- Legal Compliance Alert Banner -->
      <div class="card" style="margin-bottom:3rem; background:rgba(0,230,118,0.04); border-color:var(--border-green); padding:1.75rem;">
        <div style="display:flex; gap:1rem; align-items:flex-start;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00e676" stroke-width="2" style="flex-shrink:0; margin-top:2px;">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <div>
            <h3 style="margin:0 0 0.5rem; font-size:1.15rem; color:var(--text-primary);">Always Use Licensed Broadcasters</h3>
            <p style="margin:0; font-size:0.95rem; color:var(--text-secondary); line-height:1.6;">
              StreamEast Soccer does not host, stream, or embed unauthorized sports video broadcasts. Supporting licensed broadcasters ensures high-definition video, stable uptime, commentary choices, and directly supports the clubs, athletes, and leagues you love.
            </p>
          </div>
        </div>
      </div>

      <!-- Quick Navigation by League -->
      <section style="margin-bottom:3rem;">
        <h2 style="font-size:1.4rem; margin-bottom:1rem;">Jump to Competition</h2>
        <div style="display:flex; flex-wrap:wrap; gap:0.75rem;">
          ${leagues.map(l => `
            <a href="#league-${l.id}" class="btn btn-secondary btn-sm" style="display:flex; align-items:center; gap:0.5rem;">
              <span style="width:16px; height:16px;">${l.badgeSvg}</span>
              ${l.name}
            </a>
          `).join('')}
        </div>
      </section>

      <!-- Broadcaster Breakdown by League -->
      <section style="display:flex; flex-direction:column; gap:3rem; margin-bottom:4rem;">
        ${leagues.map(league => {
          return `
            <div id="league-${league.id}" class="card" style="padding:2rem;">
              <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.25rem; border-bottom:1px solid var(--border-subtle); padding-bottom:1.25rem;">
                <div style="width:48px; height:48px;">${league.badgeSvg}</div>
                <div>
                  <h3 style="margin:0; font-size:1.4rem;">${league.name}</h3>
                  <span style="font-size:0.85rem; color:var(--text-muted);">${league.tagline}</span>
                </div>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1.25rem;">
                ${broadcastersByRegion.map(reg => {
                  const matchInfo = reg.leagues.find(l => l.leagueId === league.id);
                  if (!matchInfo) return '';
                  return `
                    <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.25rem;">
                      <span class="badge badge-league" style="margin-bottom:0.75rem;">${reg.region}</span>
                      <h4 style="margin:0 0 0.5rem; font-size:1.1rem; color:var(--text-primary);">${matchInfo.primaryBroadcaster}</h4>
                      <p style="margin:0 0 0.5rem; font-size:0.85rem; color:var(--text-secondary);">
                        <strong>TV Channels:</strong> ${matchInfo.linearChannels.join(', ')}
                      </p>
                      <p style="margin:0 0 0.5rem; font-size:0.85rem; color:var(--text-secondary);">
                        <strong>Digital:</strong> ${matchInfo.digitalStreaming.join(', ')}
                      </p>
                      <div style="font-size:0.8rem; color:var(--accent-green); margin-top:0.75rem; font-weight:600;">
                        ${matchInfo.costInfo}
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </section>

      <!-- Country Availability Warning -->
      <div class="card" style="padding:2rem; background:var(--bg-card); margin-bottom:3rem;">
        <h3 style="margin-bottom:0.75rem; font-size:1.25rem;">Geographic Availability & Subscription Notices</h3>
        <p style="color:var(--text-secondary); line-height:1.7; font-size:0.95rem; margin-bottom:1rem;">
          Broadcast licensing agreements vary by nation and are updated regularly between seasons. Certain matches may be subject to regional broadcast blackouts (such as Saturday 3:00 PM UK blackout regulations designed to safeguard domestic grassroots stadium attendance).
        </p>
        <p style="color:var(--text-muted); font-size:0.9rem; margin:0;">
          For the most up-to-date pricing and subscription tiers, always visit the official websites of the licensed providers indicated above.
        </p>
      </div>
    </div>
  `;
}
