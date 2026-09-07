/**
 * StreamEast - Filters Component
 * Date, Sport, and League filter bars for interactive multi-sport and USA soccer match lists.
 */

import { leagues } from '../data/leagues.js';

export function createFilterBar({
  activePeriod = 'today',
  activeLeague = 'all',
  periods = [
    { id: 'today', label: 'Today' },
    { id: 'tomorrow', label: 'Tomorrow' },
    { id: 'weekend', label: 'Weekend' },
    { id: 'this-week', label: 'This Week' },
    { id: 'all', label: 'All Fixtures' }
  ],
  showSearch = true,
  searchPlaceholder = 'Filter by team name...'
} = {}) {
  const usaSoccerLeagues = leagues.filter(l => ['mls', 'nwsl', 'usl-championship', 'usl-league-one', 'mls-next-pro', 'nisa', 'us-open-cup', 'leagues-cup'].includes(l.id));
  const europeanSoccerLeagues = leagues.filter(l => ['premier-league', 'champions-league', 'la-liga', 'serie-a', 'bundesliga', 'ligue-1'].includes(l.id));
  const otherSportsLeagues = leagues.filter(l => l.sportId !== 'soccer');

  return `
    <div class="filter-bar" role="toolbar" aria-label="Match Filters">
      <!-- Period Pill Filters -->
      <div class="filter-group" id="period-filter-group">
        ${periods.map(p => `
          <button 
            type="button" 
            class="filter-pill ${activePeriod === p.id ? 'active' : ''}" 
            data-period="${p.id}"
            aria-pressed="${activePeriod === p.id}">
            ${p.label}
          </button>
        `).join('')}
      </div>

      <!-- League & Search Group -->
      <div class="filter-group">
        <label for="league-filter-select" class="visually-hidden" style="position:absolute;width:1px;height:1px;overflow:hidden;">Select League</label>
        <select id="league-filter-select" class="filter-select" aria-label="Filter by League">
          <option value="all" ${activeLeague === 'all' ? 'selected' : ''}>All Competitions</option>
          
          <optgroup label="🇺🇸 USA Soccer Pyramid (All Tiers)">
            ${usaSoccerLeagues.map(l => `
              <option value="${l.id}" ${activeLeague === l.id ? 'selected' : ''}>${l.name}</option>
            `).join('')}
          </optgroup>

          <optgroup label="⚽ European Soccer">
            ${europeanSoccerLeagues.map(l => `
              <option value="${l.id}" ${activeLeague === l.id ? 'selected' : ''}>${l.name}</option>
            `).join('')}
          </optgroup>

          <optgroup label="🏈 Major Sports (NFL, NBA, MLB, etc.)">
            ${otherSportsLeagues.map(l => `
              <option value="${l.id}" ${activeLeague === l.id ? 'selected' : ''}>${l.name}</option>
            `).join('')}
          </optgroup>
        </select>

        ${showSearch ? `
          <input 
            type="text" 
            id="team-search-input" 
            class="filter-select" 
            placeholder="${searchPlaceholder}" 
            style="min-width:200px;" 
            aria-label="Filter fixtures by team name"
          />
        ` : ''}
      </div>
    </div>
  `;
}
