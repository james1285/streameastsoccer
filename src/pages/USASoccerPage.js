/**
 * StreamEast - USA Soccer Central Hub (/usa-soccer)
 * Covers every tier of the United States Soccer Pyramid from grassroots and independent
 * clubs to Major League Soccer and the NWSL.
 */

import { updateSEO, generateBreadcrumbSchema, getCanonicalUrl } from '../utils/seo.js';
import { getUSALeagues } from '../data/leagues.js';
import { getUSASoccerMatches } from '../data/matches.js';
import { createBreadcrumbs } from '../components/Breadcrumbs.js';
import { createMatchCard } from '../components/MatchCard.js';
import { createLeagueCard } from '../components/LeagueCard.js';

export function renderUSASoccerPage(container) {
  // Update SEO
  updateSEO({
    title: 'USA Soccer Central – All Leagues, Tiers, Live Scores & Schedules | StreamEast',
    description: 'Explore the complete United States Soccer Pyramid. Live scores, fixtures, and legal broadcasting guides for MLS, NWSL, USL Championship, USL League One, MLS NEXT Pro, NISA, and U.S. Open Cup.',
    canonical: getCanonicalUrl('/usa-soccer'),
    structuredData: generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'USA Soccer Central', url: '/usa-soccer' }
    ])
  });

  const usaLeagues = getUSALeagues();
  const usaMatches = getUSASoccerMatches();
  const liveMatches = usaMatches.filter(m => m.status === 'LIVE');
  const upcomingMatches = usaMatches.filter(m => m.status === 'UPCOMING');

  const breadcrumbsHtml = createBreadcrumbs([
    { label: 'USA Soccer Central', path: '/usa-soccer' }
  ]);

  container.innerHTML = `
    <div class="container" style="padding-top:2rem;">
      ${breadcrumbsHtml}

      <!-- USA Soccer Hero Banner -->
      <header class="card" style="margin-bottom:2.5rem; background:linear-gradient(135deg, #0b1829 0%, #151d2a 100%); border-color:rgba(239, 68, 68, 0.5); padding:2.5rem 2rem;">
        <div style="display:flex; align-items:center; gap:1.25rem; flex-wrap:wrap;">
          <div style="font-size:3rem;">🇺🇸</div>
          <div style="flex:1;">
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">
              <span class="badge-usa-pyramid">COMPLETE SOCCER PYRAMID</span>
              <span class="badge badge-league">Tiers 1, 2, 3 & Cups</span>
            </div>
            <h1 style="font-size:clamp(1.8rem, 3.5vw, 2.75rem); margin-bottom:0.5rem;">
              USA Soccer Central
            </h1>
            <p class="text-lead" style="margin:0; font-size:1.05rem;">
              Explore every professional soccer league across the United States. From Major League Soccer (MLS) and NWSL down to USL Championship, USL League One, MLS NEXT Pro, NISA, and the historic Lamar Hunt U.S. Open Cup.
            </p>
          </div>
        </div>
      </header>

      <!-- Live & Today's American Matches -->
      <section style="margin-bottom:3rem;">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.25rem; flex-wrap:wrap; gap:0.5rem;">
          <div>
            <span class="text-green" style="font-size:0.85rem; font-weight:700; text-transform:uppercase;">American Action</span>
            <h2 style="margin:0.2rem 0 0; font-size:1.6rem;">Live & Upcoming USA Fixtures</h2>
          </div>
          <span class="badge badge-league">${usaMatches.length} Matches In System</span>
        </div>

        <div class="grid-matches">
          ${usaMatches.map(m => createMatchCard(m)).join('')}
        </div>
      </section>

      <!-- Visual USA Soccer Pyramid Structure -->
      <section class="card" style="margin-bottom:3.5rem; padding:2rem; background:var(--bg-surface);" aria-labelledby="pyramid-structure-heading">
        <h2 id="pyramid-structure-heading" style="font-size:1.5rem; margin-bottom:0.5rem;">
          The United States Soccer Pyramid Explained
        </h2>
        <p style="color:var(--text-secondary); margin-bottom:2rem; font-size:0.95rem;">
          Sanctioned by the United States Soccer Federation (USSF), the American soccer hierarchy features first-division men's and women's circuits, independent leagues, development systems, and national open cup tournaments.
        </p>

        <div class="pyramid-grid">
          <!-- Tier 1 Card -->
          <div class="pyramid-tier-card" style="border-top:3px solid #ef4444;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="badge" style="background:rgba(239, 68, 68, 0.2); color:#f87171;">TIER 1 (DIVISION I)</span>
              <span style="font-size:0.8rem; color:var(--text-dim);">Top Flight</span>
            </div>
            <h3 style="margin:0; font-size:1.25rem;">MLS & NWSL</h3>
            <p style="font-size:0.9rem; color:var(--text-secondary); margin:0;">
              <strong>Major League Soccer (MLS)</strong> features 30 men's clubs. <strong>NWSL</strong> is the premier 14-team professional women's league.
            </p>
            <div style="display:flex; gap:0.5rem; margin-top:auto; padding-top:0.75rem;">
              <a href="/mls" class="btn btn-outline btn-sm" data-link>MLS &rarr;</a>
              <a href="/nwsl" class="btn btn-outline btn-sm" data-link>NWSL &rarr;</a>
            </div>
          </div>

          <!-- Tier 2 Card -->
          <div class="pyramid-tier-card" style="border-top:3px solid #f59e0b;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="badge" style="background:rgba(245, 158, 11, 0.2); color:#fbbf24;">TIER 2 (DIVISION II)</span>
              <span style="font-size:0.8rem; color:var(--text-dim);">Second Division</span>
            </div>
            <h3 style="margin:0; font-size:1.25rem;">USL Championship</h3>
            <p style="font-size:0.9rem; color:var(--text-secondary); margin:0;">
              24 professional clubs playing across Eastern and Western Conferences with passionate supporter clubs and soccer-specific venues.
            </p>
            <div style="margin-top:auto; padding-top:0.75rem;">
              <a href="/usl-championship" class="btn btn-outline btn-sm" data-link>USL Championship &rarr;</a>
            </div>
          </div>

          <!-- Tier 3 Card -->
          <div class="pyramid-tier-card" style="border-top:3px solid #00e676;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="badge" style="background:rgba(0, 230, 118, 0.2); color:#00e676;">TIER 3 (DIVISION III)</span>
              <span style="font-size:0.8rem; color:var(--text-dim);">Third Division</span>
            </div>
            <h3 style="margin:0; font-size:1.25rem;">USL1, NEXT Pro & NISA</h3>
            <p style="font-size:0.9rem; color:var(--text-secondary); margin:0;">
              <strong>USL League One</strong>, <strong>MLS NEXT Pro</strong> (reserve / academy development), and <strong>NISA</strong> (independent club soccer).
            </p>
            <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-top:auto; padding-top:0.75rem;">
              <a href="/usl-league-one" class="btn btn-outline btn-sm" data-link>USL1</a>
              <a href="/mls-next-pro" class="btn btn-outline btn-sm" data-link>NEXT Pro</a>
              <a href="/nisa" class="btn btn-outline btn-sm" data-link>NISA</a>
            </div>
          </div>

          <!-- Cup Competitions Card -->
          <div class="pyramid-tier-card" style="border-top:3px solid #38bdf8;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="badge" style="background:rgba(56, 189, 248, 0.2); color:#38bdf8;">NATIONAL CUPS</span>
              <span style="font-size:0.8rem; color:var(--text-dim);">Knockout Tournaments</span>
            </div>
            <h3 style="margin:0; font-size:1.25rem;">U.S. Open Cup & Leagues Cup</h3>
            <p style="font-size:0.9rem; color:var(--text-secondary); margin:0;">
              The 110+ year old <strong>Lamar Hunt U.S. Open Cup</strong> linking all tiers, plus the international <strong>Leagues Cup</strong> against Liga MX.
            </p>
            <div style="display:flex; gap:0.5rem; margin-top:auto; padding-top:0.75rem;">
              <a href="/us-open-cup" class="btn btn-outline btn-sm" data-link>U.S. Open Cup</a>
              <a href="/leagues-cup" class="btn btn-outline btn-sm" data-link>Leagues Cup</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Directory of All USA Leagues -->
      <section style="margin-bottom:3.5rem;">
        <h2 style="font-size:1.6rem; margin-bottom:1.5rem;">Browse All USA Soccer Competitions</h2>
        <div class="grid-leagues">
          ${usaLeagues.map(l => createLeagueCard(l)).join('')}
        </div>
      </section>

      <!-- USA Broadcaster Guide Banner -->
      <section class="card" style="padding:2.5rem; background:linear-gradient(135deg, #131b26 0%, #0d1219 100%); border-color:var(--border-green);">
        <h3 style="font-size:1.5rem; margin-bottom:1rem;">Where to Watch USA Soccer Legally</h3>
        <p style="color:var(--text-secondary); font-size:1rem; line-height:1.6; max-width:800px; margin-bottom:1.5rem;">
          USA soccer broadcasts are accessible through licensed services: Apple TV MLS Season Pass (all MLS & NEXT Pro games without blackouts), CBS Sports / Paramount+ & ION Television (NWSL), CBS Sports Golazo & ESPN+ (USL Championship & League One), and U.S. Soccer YouTube streams (U.S. Open Cup).
        </p>
        <a href="/how-to-watch" class="btn btn-primary" data-link>
          Complete Broadcaster Guide &rarr;
        </a>
      </section>
    </div>
  `;
}
