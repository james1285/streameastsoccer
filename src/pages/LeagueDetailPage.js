/**
 * StreamEast Soccer - League Detail Page
 * Dedicated SEO-optimized competition page for Premier League, Champions League,
 * La Liga, Serie A, Bundesliga, Ligue 1, and MLS.
 */

import { updateSEO, generateBreadcrumbSchema, getCanonicalUrl } from '../utils/seo.js';
import { getLeagueBySlug } from '../data/leagues.js';
import { getMatchesByLeague } from '../data/matches.js';
import { getTeamsByLeague } from '../data/teams.js';
import { getBroadcastersByLeague } from '../data/broadcasters.js';
import { createBreadcrumbs } from '../components/Breadcrumbs.js';
import { createMatchCard } from '../components/MatchCard.js';
import { createTeamCard } from '../components/TeamCard.js';
import { createFAQAccordion, attachAccordionListeners } from '../components/FAQAccordion.js';

export function renderLeagueDetailPage(container, leagueSlug) {
  const league = getLeagueBySlug(leagueSlug);
  if (!league) {
    container.innerHTML = `<div class="container" style="padding:4rem 0; text-align:center;"><h2>League Not Found</h2><p>The requested soccer league does not exist.</p><a href="/leagues" class="btn btn-primary" data-link>Back to Leagues</a></div>`;
    return;
  }

  // Update SEO for this league
  updateSEO({
    title: `${league.name} Soccer Schedule & Matches | StreamEast Soccer`,
    description: `Follow the ${league.name} schedule, today's matches, upcoming fixtures, latest results, team standings, and legal streaming broadcasters.`,
    canonical: getCanonicalUrl(`/${league.slug}`),
    structuredData: generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Leagues', url: '/leagues' },
      { name: league.name, url: `/${league.slug}` }
    ])
  });

  const allLeagueMatches = getMatchesByLeague(league.id);
  const todayMatches = allLeagueMatches.filter(m => m.datePeriod === 'today');
  const upcomingFixtures = allLeagueMatches.filter(m => m.status === 'UPCOMING');
  const latestResults = allLeagueMatches.filter(m => m.status === 'FT');
  const leagueTeams = getTeamsByLeague(league.id);
  const broadcasters = getBroadcastersByLeague(league.id);

  // Custom League FAQs
  const leagueFaqs = [
    {
      id: `${league.id}-faq-1`,
      question: `Where can I legally stream ${league.name} matches?`,
      answer: `Official broadcasters depend on your region. In the US, ${league.name} matches are primarily available via ${league.legalBroadcasters.find(b => b.region.includes('United States'))?.channels.join(', ') || 'licensed networks'}. In the UK, look for coverage on ${league.legalBroadcasters.find(b => b.region.includes('United Kingdom'))?.channels.join(', ') || 'licensed channels'}.`
    },
    {
      id: `${league.id}-faq-2`,
      question: `How many teams compete in the ${league.name}?`,
      answer: `The ${league.name} consists of ${league.totalTeams} top football clubs competing throughout the ${league.season} season.`
    },
    {
      id: `${league.id}-faq-3`,
      question: `How frequently are kickoff times and schedules updated?`,
      answer: `Kickoff times and fixture dates on StreamEast Soccer are synchronized promptly whenever official television selections or cup rearrangements are confirmed.`
    }
  ];

  const breadcrumbsHtml = createBreadcrumbs([
    { label: 'Leagues', path: '/leagues' },
    { label: league.name, path: `/${league.slug}` }
  ]);

  container.innerHTML = `
    <div class="container" style="padding-top:2rem;">
      ${breadcrumbsHtml}

      <!-- League Hero Banner -->
      <header class="card" style="margin-bottom:2.5rem; background:linear-gradient(135deg, #101722 0%, #0d1219 100%); border-color:var(--border-green); padding:2rem 2.5rem;">
        <div style="display:flex; align-items:center; gap:1.5rem; flex-wrap:wrap;">
          <div style="width:72px; height:72px; flex-shrink:0;">
            ${league.badgeSvg}
          </div>
          <div style="flex:1;">
            <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.25rem;">
              <span class="badge badge-league">${league.country}</span>
              <span class="badge badge-league">Season ${league.season}</span>
            </div>
            <h1 style="margin-bottom:0.5rem; font-size:clamp(1.8rem, 3vw, 2.6rem);">${league.name} Soccer Schedule & Matches</h1>
            <p style="margin:0; font-size:1.05rem; color:var(--text-secondary); max-width:760px;">${league.tagline}</p>
          </div>
        </div>
      </header>

      <!-- Section: Today's Matches for this League -->
      <section style="margin-bottom:3rem;" aria-labelledby="league-today-heading">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.25rem;">
          <h2 id="league-today-heading" style="font-size:1.5rem;">Today's Matches</h2>
          <span class="badge badge-league">${todayMatches.length} Today</span>
        </div>
        ${todayMatches.length ? `
          <div class="grid-matches">
            ${todayMatches.map(m => createMatchCard(m)).join('')}
          </div>
        ` : `
          <div class="empty-state" style="padding:2rem;">
            <p style="margin:0; color:var(--text-muted);">No ${league.name} matches are scheduled for today. Check upcoming fixtures below.</p>
          </div>
        `}
      </section>

      <!-- Section: Upcoming Fixtures -->
      <section style="margin-bottom:3rem;" aria-labelledby="league-upcoming-heading">
        <h2 id="league-upcoming-heading" style="font-size:1.5rem; margin-bottom:1.25rem;">Upcoming Fixtures</h2>
        ${upcomingFixtures.length ? `
          <div class="grid-matches">
            ${upcomingFixtures.map(m => createMatchCard(m)).join('')}
          </div>
        ` : `
          <div class="empty-state" style="padding:2rem;">
            <p style="margin:0; color:var(--text-muted);">No upcoming fixtures currently confirmed for this league.</p>
          </div>
        `}
      </section>

      <!-- Section: Latest Results -->
      <section style="margin-bottom:3rem;" aria-labelledby="league-results-heading">
        <h2 id="league-results-heading" style="font-size:1.5rem; margin-bottom:1.25rem;">Latest Results</h2>
        ${latestResults.length ? `
          <div class="grid-matches">
            ${latestResults.map(m => createMatchCard(m)).join('')}
          </div>
        ` : `
          <div class="empty-state" style="padding:2rem;">
            <p style="margin:0; color:var(--text-muted);">No recent completed matches recorded in the current window.</p>
          </div>
        `}
      </section>

      <!-- Section: League Overview & Information -->
      <section class="card" style="margin-bottom:3rem; padding:2rem;" aria-labelledby="league-overview-heading">
        <h2 id="league-overview-heading" style="font-size:1.5rem; margin-bottom:1rem;">League Overview</h2>
        <p style="font-size:1.05rem; line-height:1.7; color:var(--text-secondary); margin-bottom:1rem;">
          ${league.description}
        </p>
        <p style="font-size:0.95rem; color:var(--text-muted); margin:0;">
          The competition operates with ${league.totalTeams} clubs participating in the ${league.season} campaign. For official standings, judicial regulations, and ticketing inquiries, visit the official league portal at <a href="${league.officialSite}" target="_blank" rel="noopener noreferrer" style="color:var(--accent-green);">${league.officialSite}</a>.
        </p>
      </section>

      <!-- Section: Popular Teams in this League -->
      ${leagueTeams.length ? `
        <section style="margin-bottom:3rem;" aria-labelledby="league-teams-heading">
          <h2 id="league-teams-heading" style="font-size:1.5rem; margin-bottom:1.25rem;">Popular Clubs in ${league.name}</h2>
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:1rem;">
            ${leagueTeams.map(t => createTeamCard(t)).join('')}
          </div>
        </section>
      ` : ''}

      <!-- Section: How to Watch Legally -->
      <section class="card" style="margin-bottom:3rem; padding:2rem;" aria-labelledby="how-to-watch-league-heading">
        <span class="badge badge-league" style="color:var(--accent-green); border-color:var(--border-green); margin-bottom:0.75rem;">
          Authorized Broadcasters
        </span>
        <h2 id="how-to-watch-league-heading" style="font-size:1.5rem; margin-bottom:1rem;">
          How to Watch ${league.name} Legally
        </h2>
        <p style="color:var(--text-secondary); margin-bottom:1.5rem;">
          Always subscribe to verified, licensed sports broadcasting services. Streaming rights vary by country:
        </p>
        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:1.25rem;">
          ${broadcasters.map(b => `
            <div style="background:var(--bg-surface); padding:1.25rem; border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
              <h4 style="margin:0 0 0.5rem; font-size:1.05rem; color:var(--text-primary);">${b.region}</h4>
              <p style="margin:0 0 0.5rem; font-size:0.9rem; color:var(--text-green);"><strong>Primary:</strong> ${b.primaryBroadcaster}</p>
              <span style="display:block; font-size:0.8rem; color:var(--text-muted); margin-bottom:0.25rem;"><strong>Channels:</strong> ${b.linearChannels.join(', ')}</span>
              <span style="display:block; font-size:0.8rem; color:var(--text-dim);">${b.costInfo}</span>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Section: League FAQ -->
      <section style="margin-bottom:3rem;" aria-labelledby="league-faq-heading">
        <h2 id="league-faq-heading" style="font-size:1.5rem; margin-bottom:1.25rem;">${league.name} FAQ</h2>
        ${createFAQAccordion(leagueFaqs)}
      </section>
    </div>
  `;

  attachAccordionListeners(container);
}
