/**
 * StreamEast - Complete Leagues & Competitions Directory
 * Covers the entire USA Soccer Pyramid (MLS, NWSL, USLC, USL1, NEXT Pro, NISA, US Open Cup, Leagues Cup),
 * European soccer powerhouses, and all major sports leagues (NFL, NBA, MLB, NHL, etc.).
 */

export const leagues = [
  // ==========================================
  // USA SOCCER PYRAMID (ALL TIERS & CUPS)
  // ==========================================
  {
    id: 'mls',
    name: 'Major League Soccer (MLS)',
    slug: 'mls',
    sportId: 'soccer',
    country: 'United States & Canada',
    flag: '🇺🇸',
    tier: 'Tier 1 Men (Division I)',
    season: '2026',
    tagline: 'North America\'s top flight professional men\'s soccer league',
    description: 'Major League Soccer features 30 clubs across the US and Canada competing for the Supporters\' Shield and MLS Cup, with global superstars and state-of-the-art soccer-specific stadiums.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#0b1b3d" stroke="#ef4444" stroke-width="2"/>
      <path d="M14 14H34V26C34 32 24 36 24 36C24 36 14 32 14 26V14Z" fill="#1e40af" stroke="#00e676" stroke-width="2"/>
      <polygon points="24,18 26,23 31,23 27,26 29,31 24,28 19,31 21,26 17,23 22,23" fill="#ffffff"/>
    </svg>`,
    totalTeams: 30,
    currentMatchweek: 28,
    officialSite: 'https://www.mlssoccer.com',
    legalBroadcasters: [
      { region: 'Global / Worldwide', channels: ['Apple TV MLS Season Pass (No Blackouts)'] },
      { region: 'United States', channels: ['FOX Sports', 'FS1'] },
      { region: 'Canada', channels: ['TSN', 'RDS'] }
    ],
    popularTeams: ['Inter Miami CF', 'LAFC', 'LA Galaxy', 'Columbus Crew', 'Seattle Sounders', 'Atlanta United']
  },
  {
    id: 'nwsl',
    name: 'National Women\'s Soccer League (NWSL)',
    slug: 'nwsl',
    sportId: 'soccer',
    country: 'United States',
    flag: '🇺🇸',
    tier: 'Tier 1 Women (Division I)',
    season: '2026',
    tagline: 'The world\'s most competitive women\'s professional soccer league',
    description: 'The NWSL showcases the absolute highest level of women\'s club soccer featuring Olympic gold medalists and World Cup icons battling across 14 elite American franchises.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#1e1b4b" stroke="#00e676" stroke-width="2"/>
      <polygon points="24,8 30,19 42,19 33,26 36,38 24,30 12,38 15,26 6,19 18,19" fill="#00e676"/>
      <text x="24" y="27" font-family="sans-serif" font-size="7" font-weight="900" fill="#ffffff" text-anchor="middle">NWSL</text>
    </svg>`,
    totalTeams: 14,
    currentMatchweek: 20,
    officialSite: 'https://www.nwslsoccer.com',
    legalBroadcasters: [
      { region: 'United States', channels: ['CBS Sports / Paramount+', 'ESPN / ESPN+', 'Prime Video', 'ION Television'] },
      { region: 'International', channels: ['NWSL+ (Free Global Streaming)'] }
    ],
    popularTeams: ['NJ/NY Gotham FC', 'Portland Thorns FC', 'San Diego Wave FC', 'Angel City FC', 'Washington Spirit', 'Kansas City Current']
  },
  {
    id: 'usl-championship',
    name: 'USL Championship (USLC)',
    slug: 'usl-championship',
    sportId: 'soccer',
    country: 'United States',
    flag: '🇺🇸',
    tier: 'Tier 2 Men (USSF Division II)',
    season: '2026',
    tagline: 'America\'s sanctioned Division II professional men\'s league',
    description: 'The USL Championship is one of the most successful Division II leagues in global football, featuring 24 passionate clubs with intense regional rivalries, dedicated supporters, and packed soccer stadiums.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
      <path d="M16 14H32V24C32 30 24 34 24 34C24 34 16 30 16 24V14Z" fill="#f59e0b"/>
      <text x="24" y="26" font-family="sans-serif" font-size="9" font-weight="900" fill="#0f172a" text-anchor="middle">USL</text>
    </svg>`,
    totalTeams: 24,
    currentMatchweek: 26,
    officialSite: 'https://www.uslchampionship.com',
    legalBroadcasters: [
      { region: 'United States', channels: ['CBS Sports Golazo Network', 'CBS Sports Network', 'ESPN2 / ESPN+'] },
      { region: 'International', channels: ['YouTube / USL International'] }
    ],
    popularTeams: ['Louisville City FC', 'Phoenix Rising FC', 'Tampa Bay Rowdies', 'Sacramento Republic FC', 'Detroit City FC', 'Charleston Battery']
  },
  {
    id: 'usl-league-one',
    name: 'USL League One (USL1)',
    slug: 'usl-league-one',
    sportId: 'soccer',
    country: 'United States',
    flag: '🇺🇸',
    tier: 'Tier 3 Men (USSF Division III)',
    season: '2026',
    tagline: 'High-octane Division III professional soccer across growing US markets',
    description: 'USL League One delivers authentic professional soccer to emerging metropolitan communities across the nation, showcasing top developmental talent and legendary local clubs.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#14532d" stroke="#00e676" stroke-width="2"/>
      <text x="24" y="27" font-family="sans-serif" font-size="14" font-weight="900" fill="#ffffff" text-anchor="middle">1</text>
      <path d="M12 34H36" stroke="#00e676" stroke-width="2"/>
    </svg>`,
    totalTeams: 12,
    currentMatchweek: 22,
    officialSite: 'https://www.uslleagueone.com',
    legalBroadcasters: [
      { region: 'United States', channels: ['CBS Sports Golazo Network', 'ESPN+'] }
    ],
    popularTeams: ['Forward Madison FC', 'Richmond Kickers', 'Union Omaha', 'Greenville Triumph SC', 'Spokane Velocity FC']
  },
  {
    id: 'mls-next-pro',
    name: 'MLS NEXT Pro',
    slug: 'mls-next-pro',
    sportId: 'soccer',
    country: 'United States & Canada',
    flag: '🇺🇸',
    tier: 'Tier 3 Men (USSF Division III Pro Reserve / Dev)',
    season: '2026',
    tagline: 'The premier player pathway bridging youth academy to first team',
    description: 'MLS NEXT Pro is a professional men\'s soccer league completing the player pathway from MLS NEXT academies to Major League Soccer first teams.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#090d16" stroke="#38bdf8" stroke-width="2"/>
      <text x="24" y="25" font-family="sans-serif" font-size="7" font-weight="800" fill="#ffffff" text-anchor="middle">NEXT</text>
      <text x="24" y="33" font-family="sans-serif" font-size="7" font-weight="900" fill="#00e676" text-anchor="middle">PRO</text>
    </svg>`,
    totalTeams: 29,
    currentMatchweek: 24,
    officialSite: 'https://www.mlsnextpro.com',
    legalBroadcasters: [
      { region: 'Global', channels: ['MLS Season Pass on Apple TV'] }
    ],
    popularTeams: ['Crown Legacy FC', 'Columbus Crew 2', 'Austin FC II', 'Tacoma Defiance', 'Philadelphia Union II']
  },
  {
    id: 'nisa',
    name: 'National Independent Soccer Association (NISA)',
    slug: 'nisa',
    sportId: 'soccer',
    country: 'United States',
    flag: '🇺🇸',
    tier: 'Tier 3 Men (USSF Division III Independent)',
    season: '2026',
    tagline: 'Independent professional soccer with grassroots heritage',
    description: 'NISA is an independent professional soccer association providing authentic club competition without franchise territorial restrictions.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#1c1917" stroke="#ea580c" stroke-width="2"/>
      <text x="24" y="28" font-family="sans-serif" font-size="9" font-weight="900" fill="#ffffff" text-anchor="middle">NISA</text>
    </svg>`,
    totalTeams: 9,
    currentMatchweek: 16,
    officialSite: 'https://www.nisaofficial.com',
    legalBroadcasters: [
      { region: 'Global', channels: ['FIFA+ (Free Streaming)', 'NISA+'] }
    ],
    popularTeams: ['Los Angeles Force', 'Maryland Bobcats FC', 'Michigan Stars FC', 'Savannah Clovers FC']
  },
  {
    id: 'us-open-cup',
    name: 'Lamar Hunt U.S. Open Cup',
    slug: 'us-open-cup',
    sportId: 'soccer',
    country: 'United States',
    flag: '🇺🇸',
    tier: 'National Knockout Cup (All USA Tiers)',
    season: '2026 Tournament',
    tagline: 'America\'s oldest national soccer knockout cup (Est. 1914)',
    description: 'The Lamar Hunt U.S. Open Cup is the oldest ongoing national soccer competition in the US. Over 100 teams from amateur Sunday league clubs up through USL and MLS compete in a single-elimination tournament.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#831843" stroke="#f43f5e" stroke-width="2"/>
      <path d="M16 14H32V22C32 26 28 29 24 29C20 29 16 26 16 22V14Z" fill="#fbbf24"/>
      <path d="M22 29H26V34H22V29Z" fill="#fbbf24"/>
      <path d="M18 34H30V36H18V34Z" fill="#fbbf24"/>
    </svg>`,
    totalTeams: 96,
    currentMatchweek: 5,
    officialSite: 'https://www.ussoccer.com/us-open-cup',
    legalBroadcasters: [
      { region: 'United States', channels: ['U.S. Soccer Streaming / YouTube', 'Apple TV', 'CBS Sports Golazo'] }
    ],
    popularTeams: ['MLS Champions', 'USL Championship Giants', 'Underdog Cinderella Clubs']
  },
  {
    id: 'leagues-cup',
    name: 'Leagues Cup',
    slug: 'leagues-cup',
    sportId: 'soccer',
    country: 'North America (USA & Mexico)',
    flag: '🌎',
    tier: 'Official Concacaf Inter-League Championship',
    season: '2026',
    tagline: 'Every club from MLS and Liga MX in a month-long knockout spectacle',
    description: 'An official World Cup-style tournament featuring all 47 first-division clubs from Major League Soccer and Mexico\'s Liga MX competing for three Concacaf Champions Cup spots.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#022c22" stroke="#00e676" stroke-width="2"/>
      <polygon points="24,10 27,18 36,18 29,23 31,32 24,27 17,32 19,23 12,18 21,18" fill="#fbbf24"/>
    </svg>`,
    totalTeams: 47,
    currentMatchweek: 4,
    officialSite: 'https://www.leaguescup.com',
    legalBroadcasters: [
      { region: 'Global', channels: ['MLS Season Pass on Apple TV'] },
      { region: 'United States', channels: ['FS1', 'Univision / TUDN'] }
    ],
    popularTeams: ['Inter Miami CF', 'Club América', 'LAFC', 'CF Monterrey', 'Tigres UANL']
  },

  // ==========================================
  // TOP EUROPEAN & GLOBAL SOCCER LEAGUES
  // ==========================================
  {
    id: 'premier-league',
    name: 'Premier League',
    slug: 'premier-league',
    sportId: 'soccer',
    country: 'England',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    tier: 'Tier 1 Men',
    season: '2026/27',
    tagline: 'The most watched football league in the world',
    description: 'The Premier League is England\'s top flight soccer league, featuring 20 world-class clubs competing for the domestic crown.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#3D195B" stroke="#00e676" stroke-width="2"/>
      <path d="M24 10C20 10 16 13 16 18C16 23 20 25 20 28C18 29 15 31 15 35H33C33 31 30 29 28 28C28 25 32 23 32 18C32 13 28 10 24 10Z" fill="#00e676"/>
    </svg>`,
    totalTeams: 20,
    currentMatchweek: 4,
    officialSite: 'https://www.premierleague.com',
    legalBroadcasters: [
      { region: 'United States', channels: ['Peacock Premium', 'NBC', 'USA Network'] },
      { region: 'United Kingdom', channels: ['Sky Sports', 'TNT Sports'] }
    ],
    popularTeams: ['Arsenal', 'Chelsea', 'Manchester City', 'Liverpool', 'Manchester United']
  },
  {
    id: 'champions-league',
    name: 'UEFA Champions League',
    slug: 'champions-league',
    sportId: 'soccer',
    country: 'Europe',
    flag: '🇪🇺',
    tier: 'European Club Championship',
    season: '2026/27',
    tagline: 'The pinnacle of European club football',
    description: 'The UEFA Champions League features the absolute best clubs across Europe competing in the 36-team Swiss model.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#091428" stroke="#38bdf8" stroke-width="2"/>
      <polygon points="24,8 27,17 37,17 29,23 32,32 24,26 16,32 19,23 11,17 21,17" fill="#ffffff"/>
    </svg>`,
    totalTeams: 36,
    currentMatchweek: 1,
    officialSite: 'https://www.uefa.com',
    legalBroadcasters: [
      { region: 'United States', channels: ['Paramount+', 'CBS Sports Network'] },
      { region: 'United Kingdom', channels: ['TNT Sports', 'discovery+'] }
    ],
    popularTeams: ['Real Madrid', 'Manchester City', 'Bayern Munich', 'Paris Saint-Germain']
  },
  {
    id: 'la-liga',
    name: 'La Liga',
    slug: 'la-liga',
    sportId: 'soccer',
    country: 'Spain',
    flag: '🇪🇸',
    tier: 'Tier 1 Men',
    season: '2026/27',
    tagline: 'The artistry and passion of Spanish football',
    description: 'La Liga EA Sports features legendary powerhouse rivalries like El Clásico.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#111827" stroke="#ff385c" stroke-width="2"/>
      <path d="M18 16L30 32M30 16L18 32" stroke="#00e676" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
    totalTeams: 20,
    currentMatchweek: 4,
    officialSite: 'https://www.laliga.com',
    legalBroadcasters: [
      { region: 'United States', channels: ['ESPN+', 'ESPN Deportes'] }
    ],
    popularTeams: ['Real Madrid', 'Barcelona', 'Atlético Madrid']
  },
  {
    id: 'serie-a',
    name: 'Serie A',
    slug: 'serie-a',
    sportId: 'soccer',
    country: 'Italy',
    flag: '🇮🇹',
    tier: 'Tier 1 Men',
    season: '2026/27',
    tagline: 'Tactical brilliance and historic Italian drama',
    description: 'Serie A is Italy\'s premier football division, acclaimed for tactical mastery.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#041e42" stroke="#0080ff" stroke-width="2"/>
      <path d="M18 12H30L26 24H32L20 36L22 26H16L18 12Z" fill="#00e676"/>
    </svg>`,
    totalTeams: 20,
    currentMatchweek: 3,
    officialSite: 'https://www.legaseriea.it',
    legalBroadcasters: [
      { region: 'United States', channels: ['Paramount+', 'CBS Sports Golazo'] }
    ],
    popularTeams: ['Inter Milan', 'Juventus', 'AC Milan', 'Napoli']
  },
  {
    id: 'bundesliga',
    name: 'Bundesliga',
    slug: 'bundesliga',
    sportId: 'soccer',
    country: 'Germany',
    flag: '🇩🇪',
    tier: 'Tier 1 Men',
    season: '2026/27',
    tagline: 'High-intensity goals and fan-first football atmosphere',
    description: 'The Bundesliga showcases German football at its best with high scoring and electrifying fan culture.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#d20515" stroke="#ffffff" stroke-width="2"/>
      <path d="M18 30L22 18L30 26" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
    totalTeams: 18,
    currentMatchweek: 3,
    officialSite: 'https://www.bundesliga.com',
    legalBroadcasters: [
      { region: 'United States', channels: ['ESPN+'] }
    ],
    popularTeams: ['Bayern Munich', 'Borussia Dortmund', 'Bayer Leverkusen']
  },
  {
    id: 'ligue-1',
    name: 'Ligue 1',
    slug: 'ligue-1',
    sportId: 'soccer',
    country: 'France',
    flag: '🇫🇷',
    tier: 'Tier 1 Men',
    season: '2026/27',
    tagline: 'The French talent factory and spectacle',
    description: 'Ligue 1 features France\'s finest football clubs blending explosive youth prospects with elite stars.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#091c3e" stroke="#2563eb" stroke-width="2"/>
      <path d="M24 10L32 20H26V36H22V20H16L24 10Z" fill="#00e676"/>
    </svg>`,
    totalTeams: 18,
    currentMatchweek: 4,
    officialSite: 'https://www.ligue1.com',
    legalBroadcasters: [
      { region: 'United States', channels: ['beIN SPORTS', 'FuboTV'] }
    ],
    popularTeams: ['Paris Saint-Germain', 'Marseille', 'Monaco']
  },

  // ==========================================
  // MULTI-SPORT COMPETITIONS (FROM USER BANNER)
  // ==========================================
  {
    id: 'nfl',
    name: 'National Football League (NFL)',
    slug: 'nfl',
    sportId: 'nfl',
    country: 'United States',
    flag: '🇺🇸',
    tier: 'Professional American Football',
    season: '2026/27 Regular Season',
    tagline: '32 teams competing for Super Bowl glory',
    description: 'The National Football League is the highest professional level of American football in the world.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#0b1b3d" stroke="#ef4444" stroke-width="2"/>
      <ellipse cx="24" cy="24" rx="14" ry="9" fill="#92400e" stroke="#ffffff" stroke-width="1.5"/>
      <line x1="16" y1="24" x2="32" y2="24" stroke="#ffffff" stroke-width="1.5"/>
    </svg>`,
    totalTeams: 32,
    currentMatchweek: 1,
    officialSite: 'https://www.nfl.com',
    legalBroadcasters: [
      { region: 'United States', channels: ['NBC / Peacock', 'CBS / Paramount+', 'FOX Sports', 'ESPN', 'Prime Video'] }
    ],
    popularTeams: ['Kansas City Chiefs', 'San Francisco 49ers', 'Dallas Cowboys', 'Philadelphia Eagles', 'Baltimore Ravens']
  },
  {
    id: 'nba',
    name: 'National Basketball Association (NBA)',
    slug: 'nba',
    sportId: 'nba',
    country: 'United States & Canada',
    flag: '🇺🇸',
    tier: 'Professional Basketball',
    season: '2026/27 Regular Season',
    tagline: 'The premier basketball league in the world',
    description: 'The NBA features 30 world-renowned franchises competing for the Larry O\'Brien Trophy.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#1d4ed8" stroke="#ef4444" stroke-width="2"/>
      <circle cx="24" cy="24" r="14" fill="#ea580c" stroke="#ffffff" stroke-width="1.5"/>
      <path d="M14 24H34M24 14V34" stroke="#000000" stroke-width="1.5"/>
    </svg>`,
    totalTeams: 30,
    currentMatchweek: 12,
    officialSite: 'https://www.nba.com',
    legalBroadcasters: [
      { region: 'United States', channels: ['ESPN / ABC', 'TNT Sports', 'NBA TV', 'NBA League Pass'] }
    ],
    popularTeams: ['Boston Celtics', 'Los Angeles Lakers', 'Golden State Warriors', 'Denver Nuggets', 'Milwaukee Bucks']
  },
  {
    id: 'fiba',
    name: 'FIBA International Basketball',
    slug: 'fiba',
    sportId: 'fiba',
    country: 'International',
    flag: '🌐',
    tier: 'World Basketball Federation',
    season: '2026 International Windows',
    tagline: 'National teams clashing on the global stage',
    description: 'FIBA organizes worldwide basketball tournaments, continental qualifiers, and the World Cup.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
      <circle cx="24" cy="24" r="12" stroke="#ffffff" stroke-width="1.5"/>
      <text x="24" y="27" font-family="sans-serif" font-size="7" font-weight="900" fill="#f59e0b" text-anchor="middle">FIBA</text>
    </svg>`,
    totalTeams: 32,
    currentMatchweek: 3,
    officialSite: 'https://www.fiba.basketball',
    legalBroadcasters: [
      { region: 'Global', channels: ['Courtside 1891', 'ESPN+'] }
    ],
    popularTeams: ['USA Basketball', 'Spain', 'Germany', 'France', 'Serbia', 'Canada']
  },
  {
    id: 'wnba',
    name: 'Women\'s National Basketball Association (WNBA)',
    slug: 'wnba',
    sportId: 'wnba',
    country: 'United States',
    flag: '🇺🇸',
    tier: 'Tier 1 Women\'s Basketball',
    season: '2026 Season & Playoffs',
    tagline: 'Record-setting women\'s professional basketball',
    description: 'The WNBA is the highest tier of professional women\'s basketball, experiencing explosive global growth.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#ea580c" stroke="#ffffff" stroke-width="2"/>
      <circle cx="24" cy="24" r="12" fill="#090d16"/>
      <text x="24" y="27" font-family="sans-serif" font-size="6" font-weight="900" fill="#ffffff" text-anchor="middle">WNBA</text>
    </svg>`,
    totalTeams: 12,
    currentMatchweek: 34,
    officialSite: 'https://www.wnba.com',
    legalBroadcasters: [
      { region: 'United States', channels: ['ION Television', 'Prime Video', 'ESPN / ABC', 'CBS Sports'] }
    ],
    popularTeams: ['New York Liberty', 'Las Vegas Aces', 'Indiana Fever', 'Minnesota Lynx', 'Seattle Storm']
  },
  {
    id: 'mlb',
    name: 'Major League Baseball (MLB)',
    slug: 'mlb',
    sportId: 'mlb',
    country: 'United States & Canada',
    flag: '🇺🇸',
    tier: 'Major League Baseball',
    season: '2026 Regular Season & World Series',
    tagline: 'America\'s national baseball pastime',
    description: 'Major League Baseball features 30 franchises across the American and National Leagues.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#1e3a8a" stroke="#dc2626" stroke-width="2"/>
      <circle cx="24" cy="24" r="14" fill="#ffffff"/>
      <path d="M16 16C18 20 18 28 16 32M32 16C30 20 30 28 32 32" stroke="#dc2626" stroke-width="1.5"/>
    </svg>`,
    totalTeams: 30,
    currentMatchweek: 140,
    officialSite: 'https://www.mlb.com',
    legalBroadcasters: [
      { region: 'United States', channels: ['Apple TV (Friday Night Baseball)', 'FOX / FS1', 'ESPN', 'TBS', 'MLB.TV'] }
    ],
    popularTeams: ['New York Yankees', 'Los Angeles Dodgers', 'Atlanta Braves', 'Philadelphia Phillies', 'Houston Astros']
  },
  {
    id: 'nhl',
    name: 'National Hockey League (NHL)',
    slug: 'nhl',
    sportId: 'nhl',
    country: 'United States & Canada',
    flag: '🇺🇸',
    tier: 'Professional Ice Hockey',
    season: '2026/27 Regular Season',
    tagline: 'The quest for the Stanley Cup on ice',
    description: 'The NHL is the world\'s top professional ice hockey league, featuring 32 North American clubs.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#090d16" stroke="#94a3b8" stroke-width="2"/>
      <ellipse cx="24" cy="24" rx="10" ry="5" fill="#000000" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="24" y="38" font-family="sans-serif" font-size="6" font-weight="900" fill="#ffffff" text-anchor="middle">NHL</text>
    </svg>`,
    totalTeams: 32,
    currentMatchweek: 18,
    officialSite: 'https://www.nhl.com',
    legalBroadcasters: [
      { region: 'United States', channels: ['ESPN / ESPN+', 'TNT Sports', 'NHL Network'] }
    ],
    popularTeams: ['Florida Panthers', 'Edmonton Oilers', 'Vegas Golden Knights', 'New York Rangers', 'Colorado Avalanche']
  },
  {
    id: 'cfl',
    name: 'Canadian Football League (CFL)',
    slug: 'cfl',
    sportId: 'cfl',
    country: 'Canada',
    flag: '🇨🇦',
    tier: 'Canadian Football',
    season: '2026 Season & Grey Cup',
    tagline: 'High-speed 3-down football across Canada',
    description: 'The Canadian Football League features 9 historic clubs playing for the iconic Grey Cup.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#991b1b" stroke="#ffffff" stroke-width="2"/>
      <text x="24" y="28" font-family="sans-serif" font-size="9" font-weight="900" fill="#ffffff" text-anchor="middle">CFL</text>
    </svg>`,
    totalTeams: 9,
    currentMatchweek: 14,
    officialSite: 'https://www.cfl.ca',
    legalBroadcasters: [
      { region: 'Canada', channels: ['TSN', 'RDS'] },
      { region: 'United States', channels: ['CBS Sports Network', 'CFL+'] }
    ],
    popularTeams: ['Winnipeg Blue Bombers', 'BC Lions', 'Toronto Argonauts', 'Montreal Alouettes']
  },
  {
    id: 'cfb',
    name: 'NCAA College Football (CFB)',
    slug: 'cfb',
    sportId: 'cfb',
    country: 'United States',
    flag: '🇺🇸',
    tier: 'College Division I FBS',
    season: '2026 Season',
    tagline: 'The 12-team College Football Playoff era',
    description: 'NCAA Division I Football Bowl Subdivision brings electrifying campus atmospheres and rivalries.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#155e75" stroke="#ffffff" stroke-width="2"/>
      <ellipse cx="24" cy="24" rx="12" ry="7" fill="#78350f" stroke="#ffffff" stroke-width="1.5"/>
      <text x="24" y="40" font-family="sans-serif" font-size="6" font-weight="900" fill="#ffffff" text-anchor="middle">CFB</text>
    </svg>`,
    totalTeams: 134,
    currentMatchweek: 2,
    officialSite: 'https://www.ncaa.com',
    legalBroadcasters: [
      { region: 'United States', channels: ['ABC / ESPN', 'FOX / FS1', 'CBS Sports', 'NBC / Peacock'] }
    ],
    popularTeams: ['Georgia Bulldogs', 'Alabama Crimson Tide', 'Michigan Wolverines', 'Ohio State Buckeyes', 'Texas Longhorns']
  },
  {
    id: 'ncaab',
    name: 'NCAA College Basketball (NCAAB)',
    slug: 'ncaab',
    sportId: 'ncaab',
    country: 'United States',
    flag: '🇺🇸',
    tier: 'College Division I Men\'s Basketball',
    season: '2026/27 Regular Season & March Madness',
    tagline: 'The road to March Madness and the Final Four',
    description: 'NCAA Division I Men\'s Basketball features over 350 programs fighting for conference titles.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#c2410c" stroke="#ffffff" stroke-width="2"/>
      <text x="24" y="28" font-family="sans-serif" font-size="7" font-weight="900" fill="#ffffff" text-anchor="middle">NCAAB</text>
    </svg>`,
    totalTeams: 350,
    currentMatchweek: 1,
    officialSite: 'https://www.ncaa.com/march-madness',
    legalBroadcasters: [
      { region: 'United States', channels: ['CBS Sports', 'TBS', 'TNT', 'truTV', 'ESPN'] }
    ],
    popularTeams: ['UConn Huskies', 'Duke Blue Devils', 'North Carolina Tar Heels', 'Kansas Jayhawks', 'Houston Cougars']
  },
  {
    id: 'ufc',
    name: 'Ultimate Fighting Championship (UFC)',
    slug: 'ufc',
    sportId: 'ufc',
    country: 'Global',
    flag: '🥊',
    tier: 'Elite Mixed Martial Arts (MMA)',
    season: '2026 World Championship Fight Schedule',
    tagline: 'The undisputed premier mixed martial arts organization',
    description: 'The UFC features world-class fighters across 12 weight divisions competing in the Octagon.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#b91c1c" stroke="#ffffff" stroke-width="2"/>
      <text x="24" y="29" font-family="sans-serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle">UFC</text>
    </svg>`,
    totalTeams: 24,
    currentMatchweek: 10,
    officialSite: 'https://www.ufc.com',
    legalBroadcasters: [
      { region: 'United States', channels: ['ESPN+ PPV (Main Card)', 'ESPN / ESPN+ (Prelims)', 'UFC Fight Pass'] }
    ],
    popularTeams: ['Heavyweight Division', 'Light Heavyweight', 'Middleweight', 'Welterweight', 'Lightweight', 'Featherweight']
  },
  {
    id: 'boxing',
    name: 'World Championship Boxing',
    slug: 'boxing',
    sportId: 'boxing',
    country: 'Global',
    flag: '🥊',
    tier: 'Professional Boxing',
    season: '2026 Title Fight Calendar',
    tagline: 'Undisputed championship prize fighting',
    description: 'Sanctioned world championship boxing bouts featuring the world\'s top pound-for-pound pugilists.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#713f12" stroke="#eab308" stroke-width="2"/>
      <rect x="14" y="14" width="20" height="20" stroke="#eab308" stroke-width="1.5" fill="none"/>
      <text x="24" y="27" font-family="sans-serif" font-size="6" font-weight="900" fill="#ffffff" text-anchor="middle">BOXING</text>
    </svg>`,
    totalTeams: 16,
    currentMatchweek: 8,
    officialSite: 'https://boxrec.com',
    legalBroadcasters: [
      { region: 'Global', channels: ['DAZN', 'ESPN+ Top Rank', 'Prime Video PPV'] }
    ],
    popularTeams: ['Heavyweight Undisputed', 'Super Middleweight', 'Welterweight']
  },
  {
    id: 'f1',
    name: 'Formula 1 World Championship (F1)',
    slug: 'f1',
    sportId: 'f1',
    country: 'Global',
    flag: '🏎️',
    tier: 'FIA World Championship',
    season: '2026 FIA Formula One World Championship',
    tagline: 'The pinnacle of global motorsport technology',
    description: 'Formula 1 brings 10 constructor teams and 20 world-class drivers racing across 24 iconic international circuits.',
    badgeSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#dc2626" stroke="#ffffff" stroke-width="2"/>
      <text x="24" y="30" font-family="sans-serif" font-size="16" font-style="italic" font-weight="900" fill="#ffffff" text-anchor="middle">F1</text>
    </svg>`,
    totalTeams: 10,
    currentMatchweek: 16,
    officialSite: 'https://www.formula1.com',
    legalBroadcasters: [
      { region: 'United States', channels: ['ESPN / ABC', 'ESPN+'] },
      { region: 'United Kingdom', channels: ['Sky Sports F1', 'Channel 4 (Highlights)'] },
      { region: 'Global', channels: ['F1 TV Pro'] }
    ],
    popularTeams: ['Red Bull Racing', 'Ferrari', 'Mercedes-AMG', 'McLaren', 'Aston Martin']
  }
];

export function getLeagueBySlug(slug) {
  return leagues.find(l => l.slug === slug || l.id === slug);
}

export function getAllLeagues() {
  return leagues;
}

export function getUSALeagues() {
  return leagues.filter(l => ['mls', 'nwsl', 'usl-championship', 'usl-league-one', 'mls-next-pro', 'nisa', 'us-open-cup', 'leagues-cup'].includes(l.id));
}

export function getSoccerLeagues() {
  return leagues.filter(l => l.sportId === 'soccer');
}

export function getLeaguesBySport(sportId) {
  return leagues.filter(l => l.sportId === sportId || l.id === sportId);
}
