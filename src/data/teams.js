/**
 * StreamEast - Teams & Competitors Directory
 * Comprehensive teams database covering all USA soccer tiers, European powerhouses,
 * NFL, NBA, WNBA, MLB, NHL, CFL, CFB, NCAAB, UFC, Boxing, and F1.
 */

export const teams = [
  // ==========================================
  // USA SOCCER - MLS TEAMS
  // ==========================================
  {
    id: 'inter-miami',
    name: 'Inter Miami CF',
    shortName: 'MIA',
    leagueId: 'mls',
    sportId: 'soccer',
    venue: 'Chase Stadium, Fort Lauderdale, FL',
    city: 'Miami, FL',
    primaryColor: '#f7b5cd',
    secondaryColor: '#231f20',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#231f20" stroke="#f7b5cd" stroke-width="2"/>
      <path d="M15 15C17 13 20 13 20 17C20 21 16 23 16 26" stroke="#f7b5cd" stroke-width="2" stroke-linecap="round"/>
      <path d="M25 15C23 13 20 13 20 17C20 21 24 23 24 26" stroke="#f7b5cd" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'lafc',
    name: 'Los Angeles FC',
    shortName: 'LAFC',
    leagueId: 'mls',
    sportId: 'soccer',
    venue: 'BMO Stadium, Los Angeles, CA',
    city: 'Los Angeles, CA',
    primaryColor: '#000000',
    secondaryColor: '#c39e5c',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 8H32V24C32 30 20 35 20 35C20 35 8 30 8 24V8Z" fill="#000000" stroke="#c39e5c" stroke-width="2"/>
      <path d="M14 14L20 26L26 14" stroke="#c39e5c" stroke-width="3" stroke-linecap="round"/>
      <polygon points="20,13 21,16 24,16 21.5,18 22.5,21 20,19 17.5,21 18.5,18 16,16 19,16" fill="#c39e5c"/>
    </svg>`
  },
  {
    id: 'la-galaxy',
    name: 'LA Galaxy',
    shortName: 'LAG',
    leagueId: 'mls',
    sportId: 'soccer',
    venue: 'Dignity Health Sports Park, Carson, CA',
    city: 'Los Angeles, CA',
    primaryColor: '#00245d',
    secondaryColor: '#ffd200',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 8H32V24C32 30 20 35 20 35C20 35 8 30 8 24V8Z" fill="#00245d" stroke="#ffd200" stroke-width="2"/>
      <polygon points="20,12 22,17 28,18 23.5,22 25,27 20,24 15,27 16.5,22 12,18 18,17" fill="#ffd200"/>
    </svg>`
  },
  {
    id: 'columbus-crew',
    name: 'Columbus Crew',
    shortName: 'CLB',
    leagueId: 'mls',
    sportId: 'soccer',
    venue: 'Lower.com Field, Columbus, OH',
    city: 'Columbus, OH',
    primaryColor: '#fedd00',
    secondaryColor: '#000000',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#fedd00" stroke="#000000" stroke-width="2"/>
      <path d="M12 12H28V28H12V12Z" stroke="#000000" stroke-width="2"/>
      <text x="20" y="24" font-family="sans-serif" font-size="9" font-weight="900" fill="#000000" text-anchor="middle">CREW</text>
    </svg>`
  },
  {
    id: 'seattle-sounders',
    name: 'Seattle Sounders FC',
    shortName: 'SEA',
    leagueId: 'mls',
    sportId: 'soccer',
    venue: 'Lumen Field, Seattle, WA',
    city: 'Seattle, WA',
    primaryColor: '#5d9732',
    secondaryColor: '#005595',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 8H32V24C32 30 20 35 20 35C20 35 8 30 8 24V8Z" fill="#5d9732" stroke="#005595" stroke-width="2"/>
      <polygon points="20,12 22,17 27,17 23,20 25,25 20,22 15,25 17,20 13,17 18,17" fill="#ffffff"/>
    </svg>`
  },

  // ==========================================
  // USA SOCCER - NWSL (TIER 1 WOMEN)
  // ==========================================
  {
    id: 'gotham-fc',
    name: 'NJ/NY Gotham FC',
    shortName: 'NJNY',
    leagueId: 'nwsl',
    sportId: 'soccer',
    venue: 'Red Bull Arena, Harrison, NJ',
    city: 'New York / New Jersey',
    primaryColor: '#000000',
    secondaryColor: '#80e0a7',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 8H32V24C32 30 20 36 20 36C20 36 8 30 8 24V8Z" fill="#000000" stroke="#80e0a7" stroke-width="2"/>
      <text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="900" fill="#80e0a7" text-anchor="middle">G</text>
    </svg>`
  },
  {
    id: 'portland-thorns',
    name: 'Portland Thorns FC',
    shortName: 'POR',
    leagueId: 'nwsl',
    sportId: 'soccer',
    venue: 'Providence Park, Portland, OR',
    city: 'Portland, OR',
    primaryColor: '#a6192e',
    secondaryColor: '#000000',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#a6192e" stroke="#000000" stroke-width="2"/>
      <path d="M12 20L20 12L28 20L20 28L12 20Z" fill="#ffffff"/>
      <circle cx="20" cy="20" r="3" fill="#a6192e"/>
    </svg>`
  },
  {
    id: 'san-diego-wave',
    name: 'San Diego Wave FC',
    shortName: 'SD',
    leagueId: 'nwsl',
    sportId: 'soccer',
    venue: 'Snapdragon Stadium, San Diego, CA',
    city: 'San Diego, CA',
    primaryColor: '#002f6c',
    secondaryColor: '#e05a47',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#002f6c" stroke="#e05a47" stroke-width="2"/>
      <path d="M10 22C14 18 18 26 22 22C26 18 30 26 34 22" stroke="#e05a47" stroke-width="3" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'angel-city-fc',
    name: 'Angel City FC',
    shortName: 'ACFC',
    leagueId: 'nwsl',
    sportId: 'soccer',
    venue: 'BMO Stadium, Los Angeles, CA',
    city: 'Los Angeles, CA',
    primaryColor: '#000000',
    secondaryColor: '#fda4af',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 8H32V24C32 30 20 35 20 35C20 35 8 30 8 24V8Z" fill="#000000" stroke="#fda4af" stroke-width="2"/>
      <polygon points="20,12 23,19 30,19 24,23 27,30 20,26 13,30 16,23 10,19 17,19" fill="#fda4af"/>
    </svg>`
  },

  // ==========================================
  // USA SOCCER - USL CHAMPIONSHIP (TIER 2 MEN)
  // ==========================================
  {
    id: 'louisville-city',
    name: 'Louisville City FC',
    shortName: 'LOU',
    leagueId: 'usl-championship',
    sportId: 'soccer',
    venue: 'Lynn Family Stadium, Louisville, KY',
    city: 'Louisville, KY',
    primaryColor: '#582c83',
    secondaryColor: '#d4af37',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 8H32V24C32 30 20 35 20 35C20 35 8 30 8 24V8Z" fill="#582c83" stroke="#d4af37" stroke-width="2"/>
      <circle cx="20" cy="18" r="5" fill="#d4af37"/>
      <path d="M14 26H26" stroke="#ffffff" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'phoenix-rising',
    name: 'Phoenix Rising FC',
    shortName: 'PHX',
    leagueId: 'usl-championship',
    sportId: 'soccer',
    venue: 'Phoenix Rising Stadium, Phoenix, AZ',
    city: 'Phoenix, AZ',
    primaryColor: '#dc2626',
    secondaryColor: '#000000',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#000000" stroke="#dc2626" stroke-width="2"/>
      <path d="M20 10L24 22L16 22L20 10Z" fill="#dc2626"/>
      <circle cx="20" cy="27" r="3" fill="#ffffff"/>
    </svg>`
  },
  {
    id: 'tampa-bay-rowdies',
    name: 'Tampa Bay Rowdies',
    shortName: 'TBR',
    leagueId: 'usl-championship',
    sportId: 'soccer',
    venue: 'Al Lang Stadium, St. Petersburg, FL',
    city: 'Tampa Bay, FL',
    primaryColor: '#15803d',
    secondaryColor: '#facc15',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#15803d" stroke="#facc15" stroke-width="2"/>
      <text x="20" y="24" font-family="sans-serif" font-size="7" font-weight="900" fill="#ffffff" text-anchor="middle">ROWDIES</text>
    </svg>`
  },
  {
    id: 'detroit-city-fc',
    name: 'Detroit City FC',
    shortName: 'DET',
    leagueId: 'usl-championship',
    sportId: 'soccer',
    venue: 'Keyworth Stadium, Hamtramck, MI',
    city: 'Detroit, MI',
    primaryColor: '#831843',
    secondaryColor: '#ca8a04',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#831843" stroke="#ca8a04" stroke-width="2"/>
      <text x="20" y="25" font-family="sans-serif" font-size="9" font-weight="900" fill="#ffffff" text-anchor="middle">DCFC</text>
    </svg>`
  },

  // ==========================================
  // USA SOCCER - USL LEAGUE ONE (TIER 3 MEN)
  // ==========================================
  {
    id: 'forward-madison',
    name: 'Forward Madison FC',
    shortName: 'MAD',
    leagueId: 'usl-league-one',
    sportId: 'soccer',
    venue: 'Breese Stevens Field, Madison, WI',
    city: 'Madison, WI',
    primaryColor: '#f43f5e',
    secondaryColor: '#0ea5e9',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#0ea5e9" stroke="#f43f5e" stroke-width="2"/>
      <ellipse cx="20" cy="18" rx="8" ry="5" fill="#f43f5e"/>
      <path d="M20 23V30" stroke="#f43f5e" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'richmond-kickers',
    name: 'Richmond Kickers',
    shortName: 'RIC',
    leagueId: 'usl-league-one',
    sportId: 'soccer',
    venue: 'City Stadium, Richmond, VA',
    city: 'Richmond, VA',
    primaryColor: '#dc2626',
    secondaryColor: '#ffffff',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#dc2626" stroke="#ffffff" stroke-width="2"/>
      <text x="20" y="25" font-family="sans-serif" font-size="8" font-weight="900" fill="#ffffff" text-anchor="middle">RIC</text>
    </svg>`
  },
  {
    id: 'union-omaha',
    name: 'Union Omaha',
    shortName: 'OMA',
    leagueId: 'usl-league-one',
    sportId: 'soccer',
    venue: 'Werner Park, Papillion, NE',
    city: 'Omaha, NE',
    primaryColor: '#1e3a8a',
    secondaryColor: '#22c55e',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#1e3a8a" stroke="#22c55e" stroke-width="2"/>
      <path d="M14 20L20 14L26 20L20 26L14 20Z" fill="#22c55e"/>
    </svg>`
  },

  // ==========================================
  // USA SOCCER - MLS NEXT PRO (TIER 3 DEV)
  // ==========================================
  {
    id: 'crown-legacy',
    name: 'Crown Legacy FC',
    shortName: 'CLFC',
    leagueId: 'mls-next-pro',
    sportId: 'soccer',
    venue: 'Sportsplex at Matthews, Charlotte, NC',
    city: 'Charlotte, NC',
    primaryColor: '#1e40af',
    secondaryColor: '#d4af37',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#1e40af" stroke="#d4af37" stroke-width="2"/>
      <path d="M12 24L14 16L18 20L20 14L22 20L26 16L28 24H12Z" fill="#d4af37"/>
    </svg>`
  },
  {
    id: 'columbus-crew-2',
    name: 'Columbus Crew 2',
    shortName: 'CREW2',
    leagueId: 'mls-next-pro',
    sportId: 'soccer',
    venue: 'Historic Crew Stadium, Columbus, OH',
    city: 'Columbus, OH',
    primaryColor: '#fedd00',
    secondaryColor: '#000000',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#fedd00" stroke="#000000" stroke-width="2"/>
      <text x="20" y="26" font-family="sans-serif" font-size="12" font-weight="900" fill="#000000" text-anchor="middle">C2</text>
    </svg>`
  },

  // ==========================================
  // USA SOCCER - NISA (TIER 3 INDEPENDENT)
  // ==========================================
  {
    id: 'la-force',
    name: 'Los Angeles Force',
    shortName: 'LAF',
    leagueId: 'nisa',
    sportId: 'soccer',
    venue: 'Veterans Memorial Stadium, Long Beach, CA',
    city: 'Los Angeles, CA',
    primaryColor: '#0284c7',
    secondaryColor: '#f59e0b',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#0284c7" stroke="#f59e0b" stroke-width="2"/>
      <text x="20" y="25" font-family="sans-serif" font-size="8" font-weight="900" fill="#ffffff" text-anchor="middle">FORCE</text>
    </svg>`
  },
  {
    id: 'maryland-bobcats',
    name: 'Maryland Bobcats FC',
    shortName: 'MBFC',
    leagueId: 'nisa',
    sportId: 'soccer',
    venue: 'Maryland SoccerPlex, Boyds, MD',
    city: 'Montgomery County, MD',
    primaryColor: '#ca8a04',
    secondaryColor: '#000000',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#000000" stroke="#ca8a04" stroke-width="2"/>
      <text x="20" y="26" font-family="sans-serif" font-size="8" font-weight="900" fill="#ca8a04" text-anchor="middle">BOBCATS</text>
    </svg>`
  },

  // ==========================================
  // TOP EUROPEAN SOCCER TEAMS
  // ==========================================
  {
    id: 'arsenal',
    name: 'Arsenal',
    shortName: 'ARS',
    leagueId: 'premier-league',
    sportId: 'soccer',
    venue: 'Emirates Stadium, London',
    city: 'London',
    primaryColor: '#ef0107',
    secondaryColor: '#063672',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 8L20 4L34 8V24C34 32 20 37 20 37C20 37 6 32 6 24V8Z" fill="#ef0107" stroke="#ffffff" stroke-width="1.5"/>
      <rect x="12" y="18" width="16" height="5" rx="2" fill="#d4af37"/>
    </svg>`
  },
  {
    id: 'chelsea',
    name: 'Chelsea',
    shortName: 'CHE',
    leagueId: 'premier-league',
    sportId: 'soccer',
    venue: 'Stamford Bridge, London',
    city: 'London',
    primaryColor: '#034694',
    secondaryColor: '#ffffff',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#034694" stroke="#ffffff" stroke-width="2"/>
      <circle cx="20" cy="20" r="13" stroke="#d4af37" stroke-width="1.5"/>
    </svg>`
  },
  {
    id: 'real-madrid',
    name: 'Real Madrid',
    shortName: 'RMA',
    leagueId: 'la-liga',
    sportId: 'soccer',
    venue: 'Santiago Bernabéu, Madrid',
    city: 'Madrid',
    primaryColor: '#ffffff',
    secondaryColor: '#febe10',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="23" r="14" fill="#ffffff" stroke="#00529f" stroke-width="2"/>
      <path d="M12 12L15 15L20 10L25 15L28 12L27 18H13L12 12Z" fill="#febe10"/>
    </svg>`
  },
  {
    id: 'barcelona',
    name: 'FC Barcelona',
    shortName: 'BAR',
    leagueId: 'la-liga',
    sportId: 'soccer',
    venue: 'Spotify Camp Nou, Barcelona',
    city: 'Barcelona',
    primaryColor: '#004d98',
    secondaryColor: '#a50044',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 8H33V24C33 30 20 36 20 36C20 36 7 30 7 24V8Z" fill="#004d98" stroke="#edbb00" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'bayern-munich',
    name: 'FC Bayern München',
    shortName: 'BAY',
    leagueId: 'bundesliga',
    sportId: 'soccer',
    venue: 'Allianz Arena, Munich',
    city: 'Munich',
    primaryColor: '#dc052d',
    secondaryColor: '#0066b2',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#dc052d" stroke="#ffffff" stroke-width="2"/>
      <circle cx="20" cy="20" r="12" fill="#0066b2"/>
    </svg>`
  },
  {
    id: 'inter-milan',
    name: 'Inter Milan',
    shortName: 'INT',
    leagueId: 'serie-a',
    sportId: 'soccer',
    venue: 'San Siro, Milan',
    city: 'Milan',
    primaryColor: '#010e80',
    secondaryColor: '#000000',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#010e80" stroke="#ffffff" stroke-width="2"/>
      <text x="20" y="24" font-family="sans-serif" font-size="9" font-weight="900" fill="#ffffff" text-anchor="middle">IM</text>
    </svg>`
  },
  {
    id: 'juventus',
    name: 'Juventus',
    shortName: 'JUV',
    leagueId: 'serie-a',
    sportId: 'soccer',
    venue: 'Allianz Stadium, Turin',
    city: 'Turin',
    primaryColor: '#000000',
    secondaryColor: '#ffffff',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="32" height="32" rx="8" fill="#000000" stroke="#ffffff" stroke-width="1.5"/>
      <path d="M14 10V22C14 26 17 28 20 28" stroke="#ffffff" stroke-width="3"/>
    </svg>`
  },

  // ==========================================
  // NFL TEAMS (AMERICAN FOOTBALL)
  // ==========================================
  {
    id: 'kansas-city-chiefs',
    name: 'Kansas City Chiefs',
    shortName: 'KC',
    leagueId: 'nfl',
    sportId: 'nfl',
    venue: 'GEHA Field at Arrowhead Stadium, Kansas City, MO',
    city: 'Kansas City, MO',
    primaryColor: '#e31837',
    secondaryColor: '#ffb81c',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="20,6 34,20 20,34 6,20" fill="#e31837" stroke="#ffb81c" stroke-width="2"/>
      <text x="20" y="24" font-family="sans-serif" font-size="10" font-weight="900" fill="#ffffff" text-anchor="middle">KC</text>
    </svg>`
  },
  {
    id: 'san-francisco-49ers',
    name: 'San Francisco 49ers',
    shortName: 'SF',
    leagueId: 'nfl',
    sportId: 'nfl',
    venue: 'Levi\'s Stadium, Santa Clara, CA',
    city: 'San Francisco, CA',
    primaryColor: '#aa0000',
    secondaryColor: '#b3995d',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="20" cy="20" rx="18" ry="12" fill="#aa0000" stroke="#b3995d" stroke-width="2"/>
      <text x="20" y="24" font-family="sans-serif" font-size="9" font-weight="900" fill="#ffffff" text-anchor="middle">49ers</text>
    </svg>`
  },

  // ==========================================
  // NBA & WNBA TEAMS
  // ==========================================
  {
    id: 'boston-celtics',
    name: 'Boston Celtics',
    shortName: 'BOS',
    leagueId: 'nba',
    sportId: 'nba',
    venue: 'TD Garden, Boston, MA',
    city: 'Boston, MA',
    primaryColor: '#007a33',
    secondaryColor: '#ba9653',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#007a33" stroke="#ba9653" stroke-width="2"/>
      <text x="20" y="25" font-family="sans-serif" font-size="8" font-weight="900" fill="#ffffff" text-anchor="middle">CELTICS</text>
    </svg>`
  },
  {
    id: 'los-angeles-lakers',
    name: 'Los Angeles Lakers',
    shortName: 'LAL',
    leagueId: 'nba',
    sportId: 'nba',
    venue: 'Crypto.com Arena, Los Angeles, CA',
    city: 'Los Angeles, CA',
    primaryColor: '#552583',
    secondaryColor: '#fdb927',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#552583" stroke="#fdb927" stroke-width="2"/>
      <text x="20" y="24" font-family="sans-serif" font-size="9" font-weight="900" fill="#fdb927" text-anchor="middle">LAL</text>
    </svg>`
  },
  {
    id: 'indiana-fever',
    name: 'Indiana Fever',
    shortName: 'IND',
    leagueId: 'wnba',
    sportId: 'wnba',
    venue: 'Gainbridge Fieldhouse, Indianapolis, IN',
    city: 'Indianapolis, IN',
    primaryColor: '#002d62',
    secondaryColor: '#e03a3e',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#002d62" stroke="#e03a3e" stroke-width="2"/>
      <text x="20" y="25" font-family="sans-serif" font-size="7" font-weight="900" fill="#ffffff" text-anchor="middle">FEVER</text>
    </svg>`
  },

  // ==========================================
  // MLB TEAMS (BASEBALL)
  // ==========================================
  {
    id: 'new-york-yankees',
    name: 'New York Yankees',
    shortName: 'NYY',
    leagueId: 'mlb',
    sportId: 'mlb',
    venue: 'Yankee Stadium, Bronx, NY',
    city: 'New York, NY',
    primaryColor: '#003087',
    secondaryColor: '#ffffff',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#003087" stroke="#ffffff" stroke-width="2"/>
      <text x="20" y="26" font-family="serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle">NY</text>
    </svg>`
  },
  {
    id: 'los-angeles-dodgers',
    name: 'Los Angeles Dodgers',
    shortName: 'LAD',
    leagueId: 'mlb',
    sportId: 'mlb',
    venue: 'Dodger Stadium, Los Angeles, CA',
    city: 'Los Angeles, CA',
    primaryColor: '#005a9c',
    secondaryColor: '#ef3e42',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#005a9c" stroke="#ffffff" stroke-width="2"/>
      <text x="20" y="26" font-family="sans-serif" font-size="12" font-style="italic" font-weight="900" fill="#ffffff" text-anchor="middle">LA</text>
    </svg>`
  },

  // ==========================================
  // NHL TEAMS (HOCKEY)
  // ==========================================
  {
    id: 'florida-panthers',
    name: 'Florida Panthers',
    shortName: 'FLA',
    leagueId: 'nhl',
    sportId: 'nhl',
    venue: 'Amerant Bank Arena, Sunrise, FL',
    city: 'Sunrise, FL',
    primaryColor: '#041e42',
    secondaryColor: '#c8102e',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 8H32V24C32 30 20 35 20 35C20 35 8 30 8 24V8Z" fill="#041e42" stroke="#c8102e" stroke-width="2"/>
      <text x="20" y="24" font-family="sans-serif" font-size="8" font-weight="900" fill="#b9975b" text-anchor="middle">FLA</text>
    </svg>`
  },
  {
    id: 'edmonton-oilers',
    name: 'Edmonton Oilers',
    shortName: 'EDM',
    leagueId: 'nhl',
    sportId: 'nhl',
    venue: 'Rogers Place, Edmonton, AB',
    city: 'Edmonton, Canada',
    primaryColor: '#041e42',
    secondaryColor: '#ff4c00',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#041e42" stroke="#ff4c00" stroke-width="2"/>
      <text x="20" y="25" font-family="sans-serif" font-size="8" font-weight="900" fill="#ffffff" text-anchor="middle">OIL</text>
    </svg>`
  },

  // ==========================================
  // COMBAT & MOTORSPORT COMPETITORS
  // ==========================================
  {
    id: 'ufc-main-event-1',
    name: 'Jon Jones',
    shortName: 'JONES',
    leagueId: 'ufc',
    sportId: 'ufc',
    venue: 'Madison Square Garden, New York',
    city: 'Heavyweight Champion',
    primaryColor: '#b91c1c',
    secondaryColor: '#ffffff',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="20,6 34,14 34,26 20,34 6,26 6,14" fill="#b91c1c" stroke="#ffffff" stroke-width="2"/>
      <text x="20" y="24" font-family="sans-serif" font-size="8" font-weight="900" fill="#ffffff" text-anchor="middle">UFC</text>
    </svg>`
  },
  {
    id: 'ufc-main-event-2',
    name: 'Stipe Miocic',
    shortName: 'MIOCIC',
    leagueId: 'ufc',
    sportId: 'ufc',
    venue: 'Madison Square Garden, New York',
    city: 'Heavyweight Challenger',
    primaryColor: '#1e3a8a',
    secondaryColor: '#ffffff',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="20,6 34,14 34,26 20,34 6,26 6,14" fill="#1e3a8a" stroke="#ffffff" stroke-width="2"/>
      <text x="20" y="24" font-family="sans-serif" font-size="8" font-weight="900" fill="#ffffff" text-anchor="middle">USA</text>
    </svg>`
  },
  {
    id: 'red-bull-racing',
    name: 'Red Bull Racing',
    shortName: 'RBR',
    leagueId: 'f1',
    sportId: 'f1',
    venue: 'Circuit of the Americas, Austin, TX',
    city: 'Milton Keynes, UK',
    primaryColor: '#0600ef',
    secondaryColor: '#e10600',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="10" width="28" height="20" rx="4" fill="#0600ef" stroke="#e10600" stroke-width="2"/>
      <text x="20" y="23" font-family="sans-serif" font-size="8" font-weight="900" fill="#ffffff" text-anchor="middle">RBR</text>
    </svg>`
  },
  {
    id: 'scuderia-ferrari',
    name: 'Scuderia Ferrari',
    shortName: 'FER',
    leagueId: 'f1',
    sportId: 'f1',
    venue: 'Circuit of the Americas, Austin, TX',
    city: 'Maranello, Italy',
    primaryColor: '#ef1a2d',
    secondaryColor: '#fff200',
    crestSvg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 8H32V24C32 30 20 35 20 35C20 35 8 30 8 24V8Z" fill="#fff200" stroke="#ef1a2d" stroke-width="2"/>
      <text x="20" y="24" font-family="sans-serif" font-size="8" font-weight="900" fill="#000000" text-anchor="middle">FER</text>
    </svg>`
  }
];

export function getTeamById(id) {
  return teams.find(t => t.id === id);
}

export function getTeamsByLeague(leagueId) {
  return teams.filter(t => t.leagueId === leagueId);
}

export function getTeamsBySport(sportId) {
  return teams.filter(t => t.sportId === sportId);
}
