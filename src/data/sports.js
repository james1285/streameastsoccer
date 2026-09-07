/**
 * StreamEast - Sports Directory
 * Comprehensive directory for the 13 sports from the top multi-sport banner:
 * NFL, NBA, FIBA, WNBA, MLB, NHL, CFL, CFB, NCAAB, UFC, BOXING, SOCCER, F1.
 */

export const sports = [
  {
    id: 'nfl',
    code: 'NFL',
    name: 'NFL Football',
    slug: 'nfl',
    scoreFormat: 'quarters', // Q1, Q2, Q3, Q4, OT
    currentSeason: '2026/27 Regular Season',
    governingBody: 'National Football League',
    tagline: 'America\'s premier professional football league',
    primaryBroadcasters: ['NBC (Sunday Night Football)', 'CBS Sports', 'FOX Sports', 'ESPN (Monday Night Football)', 'Amazon Prime Video (Thursday Night)']
  },
  {
    id: 'nba',
    code: 'NBA',
    name: 'NBA Basketball',
    slug: 'nba',
    scoreFormat: 'quarters',
    currentSeason: '2026/27 Regular Season',
    governingBody: 'National Basketball Association',
    tagline: 'The ultimate professional basketball spectacle',
    primaryBroadcasters: ['ESPN / ABC', 'TNT Sports', 'NBA TV', 'NBA League Pass']
  },
  {
    id: 'fiba',
    code: 'FIBA',
    name: 'FIBA Basketball',
    slug: 'fiba',
    scoreFormat: 'quarters',
    currentSeason: '2026 Continental Qualifiers',
    governingBody: 'International Basketball Federation',
    tagline: 'World championship and international basketball',
    primaryBroadcasters: ['Courtside 1891', 'ESPN+']
  },
  {
    id: 'wnba',
    code: 'WNBA',
    name: 'WNBA Basketball',
    slug: 'wnba',
    scoreFormat: 'quarters',
    currentSeason: '2026 Season & Playoffs',
    governingBody: 'Women\'s National Basketball Association',
    tagline: 'Elite women\'s professional basketball',
    primaryBroadcasters: ['ION Television', 'Prime Video', 'ESPN / ABC', 'CBS Sports']
  },
  {
    id: 'mlb',
    code: 'MLB',
    name: 'MLB Baseball',
    slug: 'mlb',
    scoreFormat: 'innings', // Top/Bot 1st-9th
    currentSeason: '2026 Regular Season & Postseason',
    governingBody: 'Major League Baseball',
    tagline: 'America\'s national pastime',
    primaryBroadcasters: ['Apple TV (Friday Night Baseball)', 'FOX / FS1', 'ESPN (Sunday Night Baseball)', 'TBS', 'MLB.TV']
  },
  {
    id: 'nhl',
    code: 'NHL',
    name: 'NHL Hockey',
    slug: 'nhl',
    scoreFormat: 'periods', // P1, P2, P3, OT
    currentSeason: '2026/27 Regular Season',
    governingBody: 'National Hockey League',
    tagline: 'Fastest team sport on ice',
    primaryBroadcasters: ['ESPN / ESPN+', 'TNT Sports', 'Sportsnet (Canada)', 'NHL Center Ice']
  },
  {
    id: 'cfl',
    code: 'CFL',
    name: 'CFL Football',
    slug: 'cfl',
    scoreFormat: 'quarters',
    currentSeason: '2026 CFL Season & Grey Cup',
    governingBody: 'Canadian Football League',
    tagline: 'Fast-paced Canadian gridiron football',
    primaryBroadcasters: ['TSN / RDS (Canada)', 'CBS Sports Network (USA)', 'CFL+ (Global)']
  },
  {
    id: 'cfb',
    code: 'CFB',
    name: 'NCAA College Football',
    slug: 'cfb',
    scoreFormat: 'quarters',
    currentSeason: '2026 College Football Playoff Season',
    governingBody: 'NCAA Division I Football',
    tagline: 'Unrivaled passion, tradition, and Saturday rivalries',
    primaryBroadcasters: ['ABC / ESPN', 'FOX / FS1', 'CBS Sports', 'NBC / Peacock']
  },
  {
    id: 'ncaab',
    code: 'NCAAB',
    name: 'NCAA College Basketball',
    slug: 'ncaab',
    scoreFormat: 'halves', // 1st Half, 2nd Half
    currentSeason: '2026/27 Division I Season & March Madness',
    governingBody: 'NCAA Division I Basketball',
    tagline: 'The road to March Madness and the Final Four',
    primaryBroadcasters: ['CBS Sports', 'TBS', 'TNT', 'truTV', 'ESPN']
  },
  {
    id: 'ufc',
    code: 'UFC',
    name: 'UFC & MMA',
    slug: 'ufc',
    scoreFormat: 'rounds', // R1, R2, R3, R5
    currentSeason: '2026 World Championship Fight Nights',
    governingBody: 'Ultimate Fighting Championship',
    tagline: 'The pinnacle of mixed martial arts combat',
    primaryBroadcasters: ['ESPN+ PPV (Main Card)', 'ESPN / ESPN+ (Prelims)', 'UFC Fight Pass (Early Prelims)']
  },
  {
    id: 'boxing',
    code: 'BOXING',
    name: 'Championship Boxing',
    slug: 'boxing',
    scoreFormat: 'rounds',
    currentSeason: '2026 World Title Fights',
    governingBody: 'WBC, WBA, IBF, WBO',
    tagline: 'Undisputed world championship prize fighting',
    primaryBroadcasters: ['DAZN', 'ESPN+ Top Rank', 'Prime Video PPV']
  },
  {
    id: 'soccer',
    code: 'SOCCER',
    name: 'Soccer / Football',
    slug: 'soccer',
    scoreFormat: 'minutes',
    currentSeason: '2026/27 World Club & League Seasons',
    governingBody: 'FIFA & National Federations',
    tagline: 'The world\'s most popular sport featuring elite global and all USA soccer tiers',
    primaryBroadcasters: ['Apple TV (MLS)', 'Peacock (Premier League)', 'Paramount+ (Champions League / Serie A)', 'ESPN+ (La Liga / Bundesliga)', 'CBS Sports / Prime Video (NWSL / USL)']
  },
  {
    id: 'f1',
    code: 'F1',
    name: 'Formula 1 Racing',
    slug: 'f1',
    scoreFormat: 'laps', // Lap X/Y
    currentSeason: '2026 FIA Formula One World Championship',
    governingBody: 'FIA (Fédération Internationale de l\'Automobile)',
    tagline: 'High-speed motorsport engineering and Grand Prix drama',
    primaryBroadcasters: ['ESPN / ABC (USA)', 'Sky Sports F1 (UK)', 'F1 TV Pro (Global)']
  }
];

export function getAllSports() {
  return sports;
}

export function getSportBySlug(slug) {
  return sports.find(s => s.slug === slug || s.id === slug || s.code.toLowerCase() === slug.toLowerCase());
}
