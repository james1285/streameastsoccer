/**
 * StreamEast - MatchCard Component
 * Displays match fixtures, live score indicators, team crests (SVG or live image),
 * kickoff times, and details links.
 */

import { getLeagueBySlug } from '../data/leagues.js';
import { getTeamById } from '../data/teams.js';

export function createMatchCard(match) {
  const localHome = match.homeTeamId ? getTeamById(match.homeTeamId) : null;
  const localAway = match.awayTeamId ? getTeamById(match.awayTeamId) : null;
  const league = getLeagueBySlug(match.leagueId) || { name: match.leagueName || 'Soccer League', badgeSvg: '' };

  const homeName = localHome?.name || match.homeTeamName || 'Home Team';
  const awayName = localAway?.name || match.awayTeamName || 'Away Team';

  const homeCrest = localHome?.crestSvg || 
    (match.homeTeamLogo ? `<img src="${match.homeTeamLogo}" alt="${homeName}" style="width:100%;height:100%;object-fit:contain;" />` : '<div style="width:24px;height:24px;border-radius:50%;background:#334155;"></div>');
  
  const awayCrest = localAway?.crestSvg || 
    (match.awayTeamLogo ? `<img src="${match.awayTeamLogo}" alt="${awayName}" style="width:100%;height:100%;object-fit:contain;" />` : '<div style="width:24px;height:24px;border-radius:50%;background:#334155;"></div>');

  let statusBadge = '';
  let scoreOrTimeDisplay = '';

  if (match.status === 'LIVE') {
    statusBadge = `<span class="badge badge-live"><span class="pulse-dot"></span>LIVE ${match.minute || ''}</span>`;
    scoreOrTimeDisplay = `
      <div class="match-score">${match.homeScore ?? 0} - ${match.awayScore ?? 0}</div>
      <span class="match-date-subtle text-green">In Progress</span>
    `;
  } else if (match.status === 'FT') {
    statusBadge = `<span class="badge badge-finished">FT</span>`;
    scoreOrTimeDisplay = `
      <div class="match-score">${match.homeScore ?? 0} - ${match.awayScore ?? 0}</div>
      <span class="match-date-subtle">Completed</span>
    `;
  } else {
    statusBadge = `<span class="badge badge-upcoming">UPCOMING</span>`;
    scoreOrTimeDisplay = `
      <div class="match-time">${(match.displayTime || match.kickoffTime || '').split('/')[0].trim()}</div>
      <span class="match-date-subtle">${match.date}</span>
    `;
  }

  return `
    <article class="match-card" data-match-id="${match.id}">
      <!-- Header: League & Status Indicator -->
      <div class="match-card-header">
        <div class="match-league-info">
          <div class="match-league-icon">${league.badgeSvg || '<span style="font-size:1rem;">⚽</span>'}</div>
          <span>${league.name}</span>
          ${match.isRealLiveApi ? `<span class="badge" style="background:rgba(0,230,118,0.15); color:#00e676; font-size:0.65rem; padding:0.1rem 0.35rem; margin-left:0.25rem;">VERIFIED LIVE FEED</span>` : ''}
        </div>
        ${statusBadge}
      </div>

      <!-- Body: Teams and Time/Score -->
      <div class="match-fixture-body">
        <!-- Home Team -->
        <div class="team-display">
          <div class="team-crest-wrapper" aria-hidden="true">
            ${homeCrest}
          </div>
          <span class="team-name">${homeName}</span>
        </div>

        <!-- Center Score or Kickoff -->
        <div class="match-center-info">
          ${scoreOrTimeDisplay}
        </div>

        <!-- Away Team -->
        <div class="team-display">
          <div class="team-crest-wrapper" aria-hidden="true">
            ${awayCrest}
          </div>
          <span class="team-name">${awayName}</span>
        </div>
      </div>

      <!-- Footer: Broadcaster Tag & Action -->
      <div class="match-card-footer">
        <div class="broadcaster-tag" title="Official Licensed Broadcasters">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
            <polyline points="17 2 12 7 7 2"></polyline>
          </svg>
          <span>${match.broadcastInfo?.us ? match.broadcastInfo.us.split('/')[0].trim() : 'Official TV'}</span>
        </div>

        <a href="/match/${match.slug}" class="btn btn-secondary btn-sm" data-link>
          Match Details
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>
      </div>
    </article>
  `;
}

export function createLiveMatchCard(match) {
  return createMatchCard(match);
}
