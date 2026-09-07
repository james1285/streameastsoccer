/**
 * StreamEast Soccer - Match Detail Page (/match/:slug)
 * Reusable match preview & center displaying kickoff times, stadium venues, form guides,
 * head-to-head analysis, legal broadcasters, and SportsEvent JSON-LD structured data.
 */

import { updateSEO, generateMatchSchema, generateBreadcrumbSchema, getCanonicalUrl } from '../utils/seo.js';
import { getMatchBySlug, getMatchesByLeague } from '../data/matches.js';
import { getTeamById } from '../data/teams.js';
import { getLeagueBySlug } from '../data/leagues.js';
import { createBreadcrumbs } from '../components/Breadcrumbs.js';
import { createMatchCard } from '../components/MatchCard.js';

export function renderMatchDetailPage(container, slug) {
  const match = getMatchBySlug(slug);

  if (!match) {
    container.innerHTML = `
      <div class="container" style="padding:4rem 0; text-align:center;">
        <h2>Match Not Found</h2>
        <p>The requested soccer fixture does not exist or has been rescheduled.</p>
        <a href="/schedule" class="btn btn-primary" data-link>View Full Schedule</a>
      </div>
    `;
    return;
  }

  const homeTeam = getTeamById(match.homeTeamId) || { name: 'Home Team', crestSvg: '', venue: '' };
  const awayTeam = getTeamById(match.awayTeamId) || { name: 'Away Team', crestSvg: '', venue: '' };
  const league = getLeagueBySlug(match.leagueId) || { name: 'Soccer Competition', badgeSvg: '' };

  // Update SEO with SportsEvent Structured Data
  updateSEO({
    title: `${homeTeam.name} vs ${awayTeam.name} – Match Schedule & Where to Watch | StreamEast Soccer`,
    description: `Kickoff time, stadium venue, form guide, head-to-head preview, and legal streaming broadcasters for ${homeTeam.name} vs ${awayTeam.name} in the ${league.name}.`,
    canonical: getCanonicalUrl(`/match/${match.slug}`),
    structuredData: generateMatchSchema(match, homeTeam, awayTeam, league)
  });

  const breadcrumbsHtml = createBreadcrumbs([
    { label: 'Schedule', path: '/schedule' },
    { label: league.name, path: `/${league.slug}` },
    { label: `${homeTeam.name} vs ${awayTeam.name}`, path: `/match/${match.slug}` }
  ]);

  const relatedMatches = getMatchesByLeague(league.id)
    .filter(m => m.id !== match.id)
    .slice(0, 2);

  let statusBadge = '';
  let scoreOrTimeDisplay = '';

  if (match.status === 'LIVE') {
    statusBadge = `<span class="badge badge-live"><span class="pulse-dot"></span>LIVE ${match.minute || ''}</span>`;
    scoreOrTimeDisplay = `<div style="font-family:var(--font-heading); font-size:2.4rem; font-weight:800; letter-spacing:0.05em; color:var(--text-primary);">${match.homeScore ?? 0} - ${match.awayScore ?? 0}</div>`;
  } else if (match.status === 'FT') {
    statusBadge = `<span class="badge badge-finished">Full Time</span>`;
    scoreOrTimeDisplay = `<div style="font-family:var(--font-heading); font-size:2.4rem; font-weight:800; letter-spacing:0.05em; color:var(--text-primary);">${match.homeScore ?? 0} - ${match.awayScore ?? 0}</div>`;
  } else {
    statusBadge = `<span class="badge badge-upcoming">UPCOMING FIXTURE</span>`;
    scoreOrTimeDisplay = `
      <div style="font-family:var(--font-heading); font-size:1.8rem; font-weight:700; color:var(--accent-green);">${match.displayTime.split('/')[0].trim()}</div>
      <div style="font-size:0.9rem; color:var(--text-muted); margin-top:0.25rem;">${match.date}</div>
    `;
  }

  container.innerHTML = `
    <div class="container" style="padding-top:2rem;">
      ${breadcrumbsHtml}

      <!-- Match Header Scoreboard / Hero Card -->
      <section class="card" style="margin-bottom:2.5rem; background:linear-gradient(180deg, #131b26 0%, #0d1219 100%); border-color:var(--border-green); padding:2.5rem 1.5rem; text-align:center;">
        <!-- League Info Pill -->
        <div style="display:inline-flex; align-items:center; gap:0.5rem; margin-bottom:1.5rem; background:rgba(255,255,255,0.04); padding:0.35rem 1rem; border-radius:var(--radius-full); border:1px solid var(--border-subtle);">
          <div style="width:20px; height:20px;">${league.badgeSvg}</div>
          <span style="font-size:0.9rem; font-weight:600; color:var(--text-secondary);">${league.name}</span>
          <span style="color:var(--text-dim);">&bull;</span>
          ${statusBadge}
        </div>

        <!-- Team Crests and Center Score/Time -->
        <div style="display:flex; align-items:center; justify-content:center; gap:clamp(1rem, 5vw, 4rem); max-width:800px; margin:0 auto 2rem;">
          <!-- Home Team -->
          <div style="display:flex; flex-direction:column; align-items:center; flex:1; max-width:220px;">
            <div style="width:80px; height:80px; background:rgba(255,255,255,0.03); border-radius:50%; padding:12px; border:1px solid var(--border-subtle); margin-bottom:0.75rem;">
              ${homeTeam.crestSvg}
            </div>
            <h2 style="font-size:clamp(1.2rem, 2.5vw, 1.6rem); margin:0;">${homeTeam.name}</h2>
            <span style="font-size:0.8rem; color:var(--text-muted); margin-top:0.25rem;">Home</span>
          </div>

          <!-- Center Time / Score -->
          <div style="display:flex; flex-direction:column; align-items:center; min-width:140px;">
            ${scoreOrTimeDisplay}
            <span style="font-size:0.8rem; color:var(--text-dim); margin-top:0.5rem;">${match.venue}</span>
          </div>

          <!-- Away Team -->
          <div style="display:flex; flex-direction:column; align-items:center; flex:1; max-width:220px;">
            <div style="width:80px; height:80px; background:rgba(255,255,255,0.03); border-radius:50%; padding:12px; border:1px solid var(--border-subtle); margin-bottom:0.75rem;">
              ${awayTeam.crestSvg}
            </div>
            <h2 style="font-size:clamp(1.2rem, 2.5vw, 1.6rem); margin:0;">${awayTeam.name}</h2>
            <span style="font-size:0.8rem; color:var(--text-muted); margin-top:0.25rem;">Away</span>
          </div>
        </div>

        <!-- Venue and Referee Meta -->
        <div style="display:flex; justify-content:center; gap:2rem; flex-wrap:wrap; font-size:0.85rem; color:var(--text-muted); border-top:1px solid var(--border-subtle); padding-top:1.25rem; max-width:600px; margin:0 auto;">
          <span><strong>Venue:</strong> ${match.venue}</span>
          <span><strong>Referee:</strong> ${match.referee}</span>
          <span><strong>Expected Attendance:</strong> ${match.attendance}</span>
        </div>
      </section>

      <!-- Grid for Match Details & Form -->
      <div style="display:grid; grid-template-columns:2fr 1fr; gap:2rem; margin-bottom:3rem;">
        <!-- Left Column: Preview & Tactical Matchup -->
        <div style="display:flex; flex-direction:column; gap:2rem;">
          <!-- Match Preview -->
          <section class="card" aria-labelledby="preview-heading">
            <h3 id="preview-heading" style="margin-bottom:1rem; font-size:1.3rem;">Match Preview & Analysis</h3>
            <p style="font-size:1.05rem; line-height:1.7; color:var(--text-secondary); margin-bottom:1.25rem;">
              ${match.preview}
            </p>
            <div style="background:var(--bg-surface); padding:1rem 1.25rem; border-radius:var(--radius-md); border-left:3px solid var(--accent-green);">
              <strong style="color:var(--accent-green); font-size:0.9rem; text-transform:uppercase;">Key Tactical Matchup:</strong>
              <p style="margin:0.25rem 0 0; font-size:0.95rem; color:var(--text-primary);">${match.keyMatchup}</p>
            </div>
          </section>

          <!-- Recent Form & Head-to-Head -->
          <section class="card" aria-labelledby="form-heading">
            <h3 id="form-heading" style="margin-bottom:1.25rem; font-size:1.3rem;">Recent Form & Head-to-Head</h3>
            
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:1.5rem;">
              <!-- Home Form -->
              <div style="background:var(--bg-surface); padding:1.25rem; border-radius:var(--radius-md);">
                <span style="font-size:0.85rem; color:var(--text-muted); font-weight:600;">${homeTeam.name} Form (Last 5)</span>
                <div style="display:flex; gap:0.4rem; margin-top:0.5rem;">
                  ${match.homeForm.map(res => `
                    <span style="width:28px; height:28px; border-radius:4px; display:inline-flex; align-items:center; justify-content:center; font-weight:700; font-size:0.8rem; background:${res === 'W' ? 'rgba(0,230,118,0.2)' : res === 'D' ? 'rgba(255,255,255,0.1)' : 'rgba(255,51,75,0.2)'}; color:${res === 'W' ? 'var(--accent-green)' : res === 'D' ? 'var(--text-primary)' : 'var(--status-live)'};">
                      ${res}
                    </span>
                  `).join('')}
                </div>
              </div>

              <!-- Away Form -->
              <div style="background:var(--bg-surface); padding:1.25rem; border-radius:var(--radius-md);">
                <span style="font-size:0.85rem; color:var(--text-muted); font-weight:600;">${awayTeam.name} Form (Last 5)</span>
                <div style="display:flex; gap:0.4rem; margin-top:0.5rem;">
                  ${match.awayForm.map(res => `
                    <span style="width:28px; height:28px; border-radius:4px; display:inline-flex; align-items:center; justify-content:center; font-weight:700; font-size:0.8rem; background:${res === 'W' ? 'rgba(0,230,118,0.2)' : res === 'D' ? 'rgba(255,255,255,0.1)' : 'rgba(255,51,75,0.2)'}; color:${res === 'W' ? 'var(--accent-green)' : res === 'D' ? 'var(--text-primary)' : 'var(--status-live)'};">
                      ${res}
                    </span>
                  `).join('')}
                </div>
              </div>
            </div>

            <p style="font-size:0.95rem; color:var(--text-muted); margin:0;">
              <strong>Historical Record:</strong> ${match.headToHead}
            </p>
          </section>
        </div>

        <!-- Right Column: Where to Watch Legally -->
        <div style="display:flex; flex-direction:column; gap:2rem;">
          <section class="card" style="border-color:var(--border-green);" aria-labelledby="watch-guide-heading">
            <span class="badge badge-league" style="border-color:var(--border-green); color:var(--accent-green); margin-bottom:0.75rem;">
              Authorized Broadcasters
            </span>
            <h3 id="watch-guide-heading" style="margin-bottom:1rem; font-size:1.25rem;">Where to Watch Legally</h3>
            <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1.25rem;">
              Broadcast rights for ${league.name} are licensed across official regional partners:
            </p>

            <ul style="list-style:none; display:flex; flex-direction:column; gap:0.75rem; margin-bottom:1.5rem;">
              <li style="background:var(--bg-surface); padding:0.75rem 1rem; border-radius:var(--radius-md); font-size:0.88rem;">
                <span style="color:var(--text-dim); display:block; font-size:0.75rem; font-weight:600; text-transform:uppercase;">United States</span>
                <strong style="color:var(--accent-green);">${match.broadcastInfo.us}</strong>
              </li>
              <li style="background:var(--bg-surface); padding:0.75rem 1rem; border-radius:var(--radius-md); font-size:0.88rem;">
                <span style="color:var(--text-dim); display:block; font-size:0.75rem; font-weight:600; text-transform:uppercase;">United Kingdom</span>
                <strong style="color:var(--accent-green);">${match.broadcastInfo.uk}</strong>
              </li>
              <li style="background:var(--bg-surface); padding:0.75rem 1rem; border-radius:var(--radius-md); font-size:0.88rem;">
                <span style="color:var(--text-dim); display:block; font-size:0.75rem; font-weight:600; text-transform:uppercase;">Canada</span>
                <strong style="color:var(--text-primary);">${match.broadcastInfo.ca}</strong>
              </li>
              <li style="background:var(--bg-surface); padding:0.75rem 1rem; border-radius:var(--radius-md); font-size:0.88rem;">
                <span style="color:var(--text-dim); display:block; font-size:0.75rem; font-weight:600; text-transform:uppercase;">Australia</span>
                <strong style="color:var(--text-primary);">${match.broadcastInfo.au}</strong>
              </li>
            </ul>

            <a href="/how-to-watch" class="btn btn-secondary btn-sm" style="width:100%; text-align:center;" data-link>
              Full TV & Broadcaster Directory &rarr;
            </a>
          </section>
        </div>
      </div>

      <!-- Related League Matches -->
      ${relatedMatches.length ? `
        <section style="margin-bottom:3rem;" aria-labelledby="related-matches-heading">
          <h3 id="related-matches-heading" style="margin-bottom:1.25rem; font-size:1.4rem;">More ${league.name} Fixtures</h3>
          <div class="grid-matches">
            ${relatedMatches.map(m => createMatchCard(m)).join('')}
          </div>
        </section>
      ` : ''}
    </div>
  `;
}
