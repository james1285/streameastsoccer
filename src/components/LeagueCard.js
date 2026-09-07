/**
 * StreamEast Soccer - LeagueCard Component
 * Displays league brand badge, name, description, match count, and schedule CTA.
 */

import { getMatchesByLeague } from '../data/matches.js';

export function createLeagueCard(league) {
  const matches = getMatchesByLeague(league.id);
  const upcomingCount = matches.filter(m => m.status === 'UPCOMING').length;

  return `
    <article class="league-card" data-league-id="${league.id}">
      <div class="league-card-header">
        <div class="league-badge-img" aria-hidden="true">
          ${league.badgeSvg}
        </div>
        <div class="league-meta">
          <h3>${league.name}</h3>
          <span>${league.country} &bull; ${league.season}</span>
        </div>
      </div>

      <p class="league-desc">${league.description}</p>

      <div class="league-footer">
        <span><strong>${upcomingCount}</strong> upcoming fixtures</span>
        <a href="/${league.slug}" class="btn btn-outline btn-sm" data-link>
          View Schedule &rarr;
        </a>
      </div>
    </article>
  `;
}
