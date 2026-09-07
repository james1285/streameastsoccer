/**
 * StreamEast Soccer - TeamCard Component
 * Displays team crest, stadium venue, city, and league relationship.
 */

export function createTeamCard(team) {
  return `
    <div class="card card-interactive" style="display:flex; align-items:center; gap:1rem; padding:1.25rem;">
      <div style="width:48px; height:48px; flex-shrink:0;">
        ${team.crestSvg}
      </div>
      <div>
        <h4 style="margin:0; font-size:1.05rem;">${team.name}</h4>
        <span style="font-size:0.8rem; color:var(--text-muted);">${team.venue}</span>
      </div>
    </div>
  `;
}
