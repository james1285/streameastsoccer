/**
 * StreamEast - Sport Page View (/sport/:sportSlug)
 * Dedicated hub for any sport selected from the top multi-sport banner:
 * NFL, NBA, FIBA, WNBA, MLB, NHL, CFL, CFB, NCAAB, UFC, BOXING, SOCCER, F1.
 */

import { updateSEO, generateBreadcrumbSchema, getCanonicalUrl } from '../utils/seo.js';
import { getSportBySlug, getAllSports } from '../data/sports.js';
import { getMatchesBySport } from '../data/matches.js';
import { getTeamsBySport } from '../data/teams.js';
import { createBreadcrumbs } from '../components/Breadcrumbs.js';
import { createMatchCard } from '../components/MatchCard.js';
import { createTeamCard } from '../components/TeamCard.js';
import { createEmptyState } from '../components/StateComponents.js';

export function renderSportPage(container, sportSlug) {
  const sport = getSportBySlug(sportSlug);

  if (!sport) {
    container.innerHTML = `
      <div class="container" style="padding:4rem 0; text-align:center;">
        <h2>Sport Not Found</h2>
        <p>The requested sport does not exist.</p>
        <a href="/" class="btn btn-primary" data-link>Back to Home</a>
      </div>
    `;
    return;
  }

  // Update SEO for this sport
  updateSEO({
    title: `${sport.name} – Live Scores, Schedule & Streaming Guide | StreamEast`,
    description: `Follow live ${sport.name} scores, upcoming fixtures, broadcast channels, and legal streaming information. Official schedules for ${sport.governingBody}.`,
    canonical: getCanonicalUrl(`/sport/${sport.slug}`),
    structuredData: generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: sport.name, url: `/sport/${sport.slug}` }
    ])
  });

  const sportMatches = getMatchesBySport(sport.id);
  const sportTeams = getTeamsBySport(sport.id);

  const breadcrumbsHtml = createBreadcrumbs([
    { label: sport.name, path: `/sport/${sport.slug}` }
  ]);

  container.innerHTML = `
    <div class="container" style="padding-top:2rem;">
      ${breadcrumbsHtml}

      <!-- Sport Header Hero -->
      <header class="card" style="margin-bottom:2.5rem; background:linear-gradient(135deg, #180509 0%, #111721 100%); border-color:rgba(196, 18, 36, 0.4); padding:2rem 2.5rem;">
        <div style="display:flex; align-items:center; gap:1.5rem; flex-wrap:wrap;">
          <div style="background:#c41224; color:#ffffff; font-family:var(--font-heading); font-size:1.6rem; font-weight:900; padding:0.6rem 1.2rem; border-radius:var(--radius-md); letter-spacing:0.05em;">
            ${sport.code}
          </div>
          <div style="flex:1;">
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.25rem;">
              <span class="badge" style="background:rgba(255,255,255,0.06); color:var(--text-secondary);">${sport.governingBody}</span>
              <span class="badge badge-league">${sport.currentSeason}</span>
            </div>
            <h1 style="margin:0 0 0.5rem; font-size:clamp(1.8rem, 3.5vw, 2.6rem);">${sport.name}</h1>
            <p style="margin:0; font-size:1.05rem; color:var(--text-secondary);">${sport.tagline}</p>
          </div>
        </div>
      </header>

      <!-- Live & Scheduled Matchups -->
      <section style="margin-bottom:3rem;" aria-labelledby="sport-fixtures-heading">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.25rem; flex-wrap:wrap; gap:0.5rem;">
          <h2 id="sport-fixtures-heading" style="font-size:1.6rem;">Live & Upcoming ${sport.code} Events</h2>
          <span class="badge badge-league">${sportMatches.length} Fixtures</span>
        </div>

        ${sportMatches.length ? `
          <div class="grid-matches">
            ${sportMatches.map(m => createMatchCard(m)).join('')}
          </div>
        ` : createEmptyState({
          title: `No ${sport.name} events currently scheduled`,
          message: `Check back soon for the next round of ${sport.name} fixtures and television listings.`,
          actionLabel: 'Browse Soccer Schedule'
        })}
      </section>

      <!-- Featured Competitors / Teams (if available) -->
      ${sportTeams.length ? `
        <section style="margin-bottom:3rem;">
          <h2 style="font-size:1.5rem; margin-bottom:1.25rem;">Featured ${sport.code} Teams & Competitors</h2>
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:1rem;">
            ${sportTeams.map(t => createTeamCard(t)).join('')}
          </div>
        </section>
      ` : ''}

      <!-- Authorized TV & Streaming Channels -->
      <section class="card" style="margin-bottom:3rem; padding:2rem; background:var(--bg-surface); border-color:var(--border-subtle);">
        <span class="badge" style="background:rgba(196,18,36,0.15); color:#ff6b7d; border:1px solid rgba(196,18,36,0.4); margin-bottom:0.75rem;">
          Licensed Broadcasters
        </span>
        <h2 style="font-size:1.5rem; margin-bottom:1rem;">Where to Legally Watch ${sport.name}</h2>
        <p style="color:var(--text-secondary); margin-bottom:1.5rem;">
          Official television and online streaming rights for ${sport.governingBody} are carried across licensed networks:
        </p>
        <div style="display:flex; flex-wrap:wrap; gap:0.75rem;">
          ${sport.primaryBroadcasters.map(b => `
            <div style="background:var(--bg-card); border:1px solid var(--border-medium); padding:0.6rem 1rem; border-radius:var(--radius-md); font-size:0.9rem; font-weight:600; color:var(--text-primary);">
              ${b}
            </div>
          `).join('')}
        </div>
      </section>

      <!-- All Sports Directory Grid -->
      <section style="margin-bottom:3rem;">
        <h3 style="font-size:1.3rem; margin-bottom:1rem;">Explore Other Sports</h3>
        <div style="display:flex; flex-wrap:wrap; gap:0.6rem;">
          ${getAllSports().filter(s => s.id !== sport.id).map(s => `
            <a href="/sport/${s.slug}" class="btn btn-secondary btn-sm" data-link>
              <strong>${s.code}</strong> &bull; ${s.name}
            </a>
          `).join('')}
        </div>
      </section>
    </div>
  `;
}
