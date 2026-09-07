/**
 * StreamEast Soccer - Leagues Overview Page (/leagues)
 * Directory of premier domestic and international soccer leagues.
 */

import { updateSEO, generateBreadcrumbSchema, getCanonicalUrl } from '../utils/seo.js';
import { leagues } from '../data/leagues.js';
import { createBreadcrumbs } from '../components/Breadcrumbs.js';
import { createLeagueCard } from '../components/LeagueCard.js';

export function renderLeaguesPage(container) {
  // Update SEO
  updateSEO({
    title: 'Soccer Leagues & Competitions Directory | StreamEast Soccer',
    description: 'Explore the world\'s top soccer leagues including Premier League, Champions League, La Liga, Serie A, Bundesliga, Ligue 1, and MLS schedules.',
    canonical: getCanonicalUrl('/leagues'),
    structuredData: generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Leagues', url: '/leagues' }
    ])
  });

  const breadcrumbsHtml = createBreadcrumbs([
    { label: 'Leagues', path: '/leagues' }
  ]);

  container.innerHTML = `
    <div class="container" style="padding-top:2rem;">
      ${breadcrumbsHtml}

      <header style="margin-bottom:2.5rem;">
        <span class="text-green" style="font-size:0.85rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em;">International Competitions</span>
        <h1 style="margin-top:0.25rem;">Soccer Leagues & Competitions</h1>
        <p class="text-lead">
          StreamEast Soccer provides comprehensive fixture tracking, kickoff dates, results, and licensed TV broadcaster directories for Europe and North America's premier soccer tournaments.
        </p>
      </header>

      <div class="grid-leagues">
        ${leagues.map(l => createLeagueCard(l)).join('')}
      </div>
    </div>
  `;
}
