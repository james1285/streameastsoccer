/**
 * StreamEast - Fixtures & Live Matches Database
 * Covers all USA soccer leagues (MLS, NWSL, USLC, USL1, NEXT Pro, NISA, Open Cup, Leagues Cup),
 * global football derbies, and major sports (NFL, NBA, WNBA, MLB, NHL, UFC, F1).
 */

import { leagues } from './leagues.js';
import { teams } from './teams.js';

function getRelativeDate(daysOffset = 0) {
  const d = new Date();
  d.setDate(d.getDate() + daysOffset);
  return d.toISOString().split('T')[0];
}

export const matches = [
  // ==========================================
  // USA SOCCER - LIVE MATCHES
  // ==========================================
  {
    id: 'm-nwsl-got-por',
    slug: 'gotham-fc-vs-portland-thorns',
    sportId: 'soccer',
    leagueId: 'nwsl',
    homeTeamId: 'gotham-fc',
    awayTeamId: 'portland-thorns',
    date: getRelativeDate(0),
    datePeriod: 'today',
    kickoffTime: '17:00',
    displayTime: '5:00 PM ET / 2:00 PM PT',
    status: 'LIVE',
    minute: "74'",
    homeScore: 1,
    awayScore: 1,
    venue: 'Red Bull Arena, Harrison, NJ',
    referee: 'Alyssa Nichols',
    attendance: '15,240',
    broadcastInfo: {
      us: 'Prime Video / CBS Sports Network',
      uk: 'NWSL+ (Free Global)',
      ca: 'NWSL+',
      au: 'Optus Sport / NWSL+'
    },
    preview: 'A high-intensity NWSL showdown between the reigning playoff champions Gotham FC and perennial powerhouse Portland Thorns.',
    homeForm: ['W', 'W', 'D', 'W', 'W'],
    awayForm: ['W', 'D', 'W', 'L', 'W'],
    headToHead: 'Evenly split across the last 6 encounters.',
    keyMatchup: 'Rose Lavelle pulling strings in midfield against Thorns\' disciplined defensive line.'
  },
  {
    id: 'm-uslc-lou-phx',
    slug: 'louisville-city-vs-phoenix-rising',
    sportId: 'soccer',
    leagueId: 'usl-championship',
    homeTeamId: 'louisville-city',
    awayTeamId: 'phoenix-rising',
    date: getRelativeDate(0),
    datePeriod: 'today',
    kickoffTime: '19:30',
    displayTime: '7:30 PM ET / 4:30 PM PT',
    status: 'LIVE',
    minute: "61'",
    homeScore: 2,
    awayScore: 1,
    venue: 'Lynn Family Stadium, Louisville, KY',
    referee: 'Elijio Arreguin',
    attendance: '13,842 (Capacity)',
    broadcastInfo: {
      us: 'CBS Sports Golazo Network / ESPN+',
      uk: 'YouTube USL International',
      ca: 'USL International',
      au: 'USL International'
    },
    preview: 'Two heavyweight USL Championship titans clash under the lights in Kentucky in a rematch of previous title finals.',
    homeForm: ['W', 'W', 'W', 'W', 'D'],
    awayForm: ['W', 'D', 'W', 'L', 'W'],
    headToHead: 'Louisville have won 3 of their last 4 home fixtures against Western Conference opponents.',
    keyMatchup: 'Louisville\'s pressing wingers versus Phoenix\'s possession-based buildup.'
  },

  // ==========================================
  // USA SOCCER - MLS & CUPS (UPCOMING & TODAY)
  // ==========================================
  {
    id: 'm-mls-mia-lag',
    slug: 'inter-miami-vs-la-galaxy',
    sportId: 'soccer',
    leagueId: 'mls',
    homeTeamId: 'inter-miami',
    awayTeamId: 'la-galaxy',
    date: getRelativeDate(0),
    datePeriod: 'today',
    kickoffTime: '19:30',
    displayTime: '7:30 PM ET / 4:30 PM PT',
    status: 'UPCOMING',
    minute: null,
    homeScore: null,
    awayScore: null,
    venue: 'Chase Stadium, Fort Lauderdale, FL',
    referee: 'Ismail Elfath',
    attendance: '21,550 (Sold out)',
    broadcastInfo: {
      us: 'MLS Season Pass on Apple TV / FOX',
      uk: 'MLS Season Pass on Apple TV',
      ca: 'Apple TV / TSN',
      au: 'Apple TV'
    },
    preview: 'A marquee Major League Soccer showcase matching East Coast star quality with Western Conference attacking flair.',
    homeForm: ['W', 'W', 'W', 'D', 'W'],
    awayForm: ['W', 'L', 'W', 'W', 'D'],
    headToHead: 'Inter Miami 1 win, LA Galaxy 1 win, 1 draw.',
    keyMatchup: 'Lionel Messi creating chances in the half-spaces versus Galaxy\'s defensive shield.'
  },
  {
    id: 'm-mls-lafc-clb',
    slug: 'lafc-vs-columbus-crew',
    sportId: 'soccer',
    leagueId: 'mls',
    homeTeamId: 'lafc',
    awayTeamId: 'columbus-crew',
    date: getRelativeDate(1),
    datePeriod: 'tomorrow',
    kickoffTime: '22:30',
    displayTime: '10:30 PM ET / 7:30 PM PT',
    status: 'UPCOMING',
    minute: null,
    homeScore: null,
    awayScore: null,
    venue: 'BMO Stadium, Los Angeles, CA',
    referee: 'Armando Villarreal',
    attendance: '22,000 (Sold out)',
    broadcastInfo: {
      us: 'Apple TV MLS Season Pass',
      uk: 'Apple TV MLS Season Pass',
      ca: 'Apple TV MLS Season Pass',
      au: 'Apple TV MLS Season Pass'
    },
    preview: 'A titanic rematch of recent MLS Cup and Leagues Cup finals between two of North America\'s tactically superior squads.',
    homeForm: ['W', 'D', 'W', 'W', 'L'],
    awayForm: ['W', 'W', 'W', 'D', 'W'],
    headToHead: 'Recent matches have produced thrilling end-to-end spectacles.',
    keyMatchup: 'Denis Bouanga against Columbus Crew\'s possession-based back three.'
  },
  {
    id: 'm-usl1-mad-ric',
    slug: 'forward-madison-vs-richmond-kickers',
    sportId: 'soccer',
    leagueId: 'usl-league-one',
    homeTeamId: 'forward-madison',
    awayTeamId: 'richmond-kickers',
    date: getRelativeDate(0),
    datePeriod: 'today',
    kickoffTime: '20:00',
    displayTime: '8:00 PM ET / 7:00 PM CT',
    status: 'UPCOMING',
    minute: null,
    homeScore: null,
    awayScore: null,
    venue: 'Breese Stevens Field, Madison, WI',
    referee: 'Calin Radosav',
    attendance: '5,000 (Sold out)',
    broadcastInfo: {
      us: 'CBS Sports Golazo Network / ESPN+',
      uk: 'YouTube USL',
      ca: 'USL Streams',
      au: 'USL Streams'
    },
    preview: 'The Henny Derby brings vibrant fan culture and Division III passion to Madison\'s historic downtown venue.',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['D', 'W', 'L', 'W', 'D'],
    headToHead: 'Forward Madison hold a narrow edge in home meetings.',
    keyMatchup: 'Midfield control in transition on the tight Breese Stevens pitch.'
  },
  {
    id: 'm-next-clfc-c2',
    slug: 'crown-legacy-vs-columbus-crew-2',
    sportId: 'soccer',
    leagueId: 'mls-next-pro',
    homeTeamId: 'crown-legacy',
    awayTeamId: 'columbus-crew-2',
    date: getRelativeDate(1),
    datePeriod: 'tomorrow',
    kickoffTime: '18:00',
    displayTime: '6:00 PM ET',
    status: 'UPCOMING',
    minute: null,
    homeScore: null,
    awayScore: null,
    venue: 'Sportsplex at Matthews, Charlotte, NC',
    referee: 'Matthew Thompson',
    attendance: '3,100',
    broadcastInfo: {
      us: 'MLS Season Pass on Apple TV',
      uk: 'Apple TV MLS Season Pass',
      ca: 'Apple TV',
      au: 'Apple TV'
    },
    preview: 'Two of the premier developmental academies in North American soccer battle for Eastern Conference playoff seeding.',
    homeForm: ['W', 'W', 'L', 'W', 'D'],
    awayForm: ['W', 'D', 'W', 'W', 'L'],
    headToHead: 'Both sides have split home victories in previous seasons.',
    keyMatchup: 'Emerging homegrown prospects competing under senior team tactical philosophies.'
  },
  {
    id: 'm-nisa-laf-mbf',
    slug: 'la-force-vs-maryland-bobcats',
    sportId: 'soccer',
    leagueId: 'nisa',
    homeTeamId: 'la-force',
    awayTeamId: 'maryland-bobcats',
    date: getRelativeDate(2),
    datePeriod: 'weekend',
    kickoffTime: '22:00',
    displayTime: '10:00 PM ET / 7:00 PM PT',
    status: 'UPCOMING',
    minute: null,
    homeScore: null,
    awayScore: null,
    venue: 'Veterans Memorial Stadium, Long Beach, CA',
    referee: 'Samantha Martinez',
    attendance: '2,400',
    broadcastInfo: {
      us: 'FIFA+ (Free) / NISA+',
      uk: 'FIFA+ (Free)',
      ca: 'FIFA+',
      au: 'FIFA+'
    },
    preview: 'Independent professional soccer at its best as West Coast champions LA Force host the physical Maryland Bobcats.',
    homeForm: ['W', 'W', 'W', 'D', 'L'],
    awayForm: ['W', 'D', 'W', 'L', 'W'],
    headToHead: 'Evenly contested across previous NISA campaigns.',
    keyMatchup: 'LA Force attacking speed against the Bobcats\' compact defensive block.'
  },

  // ==========================================
  // MULTI-SPORT LIVE & UPCOMING FIXTURES
  // ==========================================
  {
    id: 'm-nfl-kc-sf',
    slug: 'kansas-city-chiefs-vs-san-francisco-49ers',
    sportId: 'nfl',
    leagueId: 'nfl',
    homeTeamId: 'kansas-city-chiefs',
    awayTeamId: 'san-francisco-49ers',
    date: getRelativeDate(0),
    datePeriod: 'today',
    kickoffTime: '16:25',
    displayTime: '4:25 PM ET / 1:25 PM PT',
    status: 'LIVE',
    minute: 'Q3 6:45',
    homeScore: 21,
    awayScore: 17,
    venue: 'GEHA Field at Arrowhead Stadium, Kansas City, MO',
    referee: 'Bill Vinovich',
    attendance: '76,416 (Capacity)',
    broadcastInfo: {
      us: 'FOX Sports / NFL+ / FOX Deportes',
      uk: 'Sky Sports NFL',
      ca: 'DAZN Canada',
      au: 'ESPN on Kayo'
    },
    preview: 'A marquee Super Bowl rematch between Patrick Mahomes\' Chiefs and Brock Purdy\'s 49ers in Arrowhead Stadium.',
    homeForm: ['W', 'W', 'W', 'W', 'W'],
    awayForm: ['W', 'W', 'L', 'W', 'W'],
    headToHead: 'Chiefs have won the last 4 meetings including Super Bowl LVIII.',
    keyMatchup: 'Chris Jones disrupting the interior pocket versus the 49ers\' zone running scheme.'
  },
  {
    id: 'm-nba-bos-lal',
    slug: 'boston-celtics-vs-los-angeles-lakers',
    sportId: 'nba',
    leagueId: 'nba',
    homeTeamId: 'boston-celtics',
    awayTeamId: 'los-angeles-lakers',
    date: getRelativeDate(0),
    datePeriod: 'today',
    kickoffTime: '20:30',
    displayTime: '8:30 PM ET / 5:30 PM PT',
    status: 'UPCOMING',
    minute: null,
    homeScore: null,
    awayScore: null,
    venue: 'TD Garden, Boston, MA',
    referee: 'Scott Foster',
    attendance: '19,156 (Sold out)',
    broadcastInfo: {
      us: 'ESPN / ABC / NBA League Pass',
      uk: 'TNT Sports 1',
      ca: 'TSN',
      au: 'ESPN on Foxtel'
    },
    preview: 'The most iconic rivalry in basketball history returns as the defending champion Celtics host LeBron James and Anthony Davis at the TD Garden.',
    homeForm: ['W', 'W', 'W', 'L', 'W'],
    awayForm: ['W', 'L', 'W', 'W', 'D'],
    headToHead: 'Historical rivals tied at 17 NBA Championships each.',
    keyMatchup: 'Jayson Tatum vs LeBron James in a duel of all-NBA forwards.'
  },
  {
    id: 'm-wnba-ind-ny',
    slug: 'indiana-fever-vs-new-york-liberty',
    sportId: 'wnba',
    leagueId: 'wnba',
    homeTeamId: 'indiana-fever',
    awayTeamId: 'indiana-fever',
    date: getRelativeDate(0),
    datePeriod: 'today',
    kickoffTime: '19:00',
    displayTime: '7:00 PM ET',
    status: 'LIVE',
    minute: 'Q4 2:15',
    homeScore: 82,
    awayScore: 85,
    venue: 'Gainbridge Fieldhouse, Indianapolis, IN',
    referee: 'Roy Gulbeyan',
    attendance: '17,274 (Sold out)',
    broadcastInfo: {
      us: 'ION Television / Prime Video',
      uk: 'WNBA League Pass',
      ca: 'TSN',
      au: 'WNBA League Pass'
    },
    preview: 'Caitlin Clark and the high-tempo Indiana Fever battle Breanna Stewart and the New York Liberty in a nail-biting fourth quarter.',
    homeForm: ['W', 'W', 'W', 'L', 'W'],
    awayForm: ['W', 'W', 'W', 'W', 'L'],
    headToHead: 'Liberty hold the season series edge in close finishes.',
    keyMatchup: 'Three-point perimeter marksmanship down the final stretch.'
  },
  {
    id: 'm-mlb-nyy-lad',
    slug: 'new-york-yankees-vs-los-angeles-dodgers',
    sportId: 'mlb',
    leagueId: 'mlb',
    homeTeamId: 'new-york-yankees',
    awayTeamId: 'los-angeles-dodgers',
    date: getRelativeDate(0),
    datePeriod: 'today',
    kickoffTime: '19:05',
    displayTime: '7:05 PM ET',
    status: 'LIVE',
    minute: 'Bot 7th',
    homeScore: 4,
    awayScore: 3,
    venue: 'Yankee Stadium, Bronx, NY',
    referee: 'Dan Iassogna (Umpire)',
    attendance: '47,812 (Sold out)',
    broadcastInfo: {
      us: 'Apple TV Friday Night Baseball / MLB.TV',
      uk: 'TNT Sports 2',
      ca: 'Sportsnet',
      au: 'ESPN on Kayo'
    },
    preview: 'A coast-to-coast baseball spectacle featuring Aaron Judge and Shohei Ohtani trading big hits in the Bronx.',
    homeForm: ['W', 'W', 'L', 'W', 'W'],
    awayForm: ['W', 'W', 'W', 'L', 'W'],
    headToHead: 'Two most successful baseball brands clashing in prime time.',
    keyMatchup: 'Bullpen endurance in late-inning high-leverage situations.'
  },
  {
    id: 'm-nhl-fla-edm',
    slug: 'florida-panthers-vs-edmonton-oilers',
    sportId: 'nhl',
    leagueId: 'nhl',
    homeTeamId: 'florida-panthers',
    awayTeamId: 'edmonton-oilers',
    date: getRelativeDate(1),
    datePeriod: 'tomorrow',
    kickoffTime: '20:00',
    displayTime: '8:00 PM ET',
    status: 'UPCOMING',
    minute: null,
    homeScore: null,
    awayScore: null,
    venue: 'Amerant Bank Arena, Sunrise, FL',
    referee: 'Wes McCauley',
    attendance: '19,500',
    broadcastInfo: {
      us: 'ESPN / ESPN+ / TNT Sports',
      uk: 'Viaplay / NHL.tv',
      ca: 'Sportsnet / CBC Hockey Night in Canada',
      au: 'ESPN on Kayo'
    },
    preview: 'A rematch of the 7-game Stanley Cup Final between Connor McDavid\'s Oilers and Matthew Tkachuk\'s Panthers.',
    homeForm: ['W', 'W', 'W', 'D', 'W'],
    awayForm: ['W', 'W', 'L', 'W', 'W'],
    headToHead: 'Panthers took Game 7 in an unforgettable Cup battle.',
    keyMatchup: 'Florida\'s forechecking pressure against Edmonton\'s elite transition power play.'
  },
  {
    id: 'm-ufc-jones-miocic',
    slug: 'jon-jones-vs-stipe-miocic',
    sportId: 'ufc',
    leagueId: 'ufc',
    homeTeamId: 'ufc-main-event-1',
    awayTeamId: 'ufc-main-event-2',
    date: getRelativeDate(3),
    datePeriod: 'weekend',
    kickoffTime: '22:00',
    displayTime: '10:00 PM ET / 7:00 PM PT',
    status: 'UPCOMING',
    minute: null,
    homeScore: null,
    awayScore: null,
    venue: 'Madison Square Garden, New York, NY',
    referee: 'Herb Dean',
    attendance: '20,000 (Sold out)',
    broadcastInfo: {
      us: 'ESPN+ PPV (Main Card) / ESPN (Prelims)',
      uk: 'TNT Sports Box Office',
      ca: 'Main Event PPV',
      au: 'Main Event on Kayo'
    },
    preview: 'The greatest MMA heavyweight fight of the decade: reigning champion Jon Jones defending against the most accomplished heavyweight in UFC history, Stipe Miocic.',
    homeForm: ['W', 'W', 'W', 'W', 'W'],
    awayForm: ['W', 'W', 'L', 'W', 'W'],
    headToHead: 'First professional meeting between two legendary champions.',
    keyMatchup: 'Jones\' unpredictable oblique kicks and wrestling versus Miocic\'s golden-gloves boxing and takedown defense.'
  },
  {
    id: 'm-f1-usgp-austin',
    slug: 'united-states-grand-prix-austin',
    sportId: 'f1',
    leagueId: 'f1',
    homeTeamId: 'red-bull-racing',
    awayTeamId: 'scuderia-ferrari',
    date: getRelativeDate(4),
    datePeriod: 'weekend',
    kickoffTime: '15:00',
    displayTime: '3:00 PM ET / 2:00 PM CT',
    status: 'UPCOMING',
    minute: null,
    homeScore: null,
    awayScore: null,
    venue: 'Circuit of the Americas, Austin, TX',
    referee: 'FIA Race Director',
    attendance: '440,000 (Weekend crowd)',
    broadcastInfo: {
      us: 'ABC / ESPN / ESPN+ / F1 TV Pro',
      uk: 'Sky Sports F1',
      ca: 'TSN / RDS',
      au: 'Fox Sports / Kayo'
    },
    preview: 'Formula 1 hits Texas for the United States Grand Prix at COTA. 56 laps around the challenging, elevation-heavy Austin circuit with World Championship points on the line.',
    homeForm: ['W', 'W', 'W', 'D', 'W'],
    awayForm: ['W', 'W', 'W', 'L', 'W'],
    headToHead: 'Red Bull and Ferrari battle closely through Sector 1esses and Turn 1 steep climb.',
    keyMatchup: 'Tire degradation management under scorching Texas sun.'
  },

  // ==========================================
  // TOP EUROPEAN SOCCER DERBIES
  // ==========================================
  {
    id: 'm-pl-ars-che',
    slug: 'arsenal-vs-chelsea',
    sportId: 'soccer',
    leagueId: 'premier-league',
    homeTeamId: 'arsenal',
    awayTeamId: 'chelsea',
    date: getRelativeDate(0),
    datePeriod: 'today',
    kickoffTime: '19:30',
    displayTime: '7:30 PM BST / 2:30 PM ET',
    status: 'UPCOMING',
    minute: null,
    homeScore: null,
    awayScore: null,
    venue: 'Emirates Stadium, London',
    referee: 'Michael Oliver',
    attendance: '60,260',
    broadcastInfo: {
      us: 'Peacock Premium / NBC',
      uk: 'Sky Sports Main Event',
      ca: 'FuboTV Canada',
      au: 'Optus Sport'
    },
    preview: 'A high-stakes London derby at the Emirates Stadium as Arsenal host Chelsea.',
    homeForm: ['W', 'W', 'D', 'W', 'W'],
    awayForm: ['W', 'D', 'W', 'L', 'W'],
    headToHead: 'Arsenal 3 wins, Chelsea 1 win, 1 draw.',
    keyMatchup: 'Bukayo Saka vs Marc Cucurella on the wing.'
  },
  {
    id: 'm-ll-rma-bar',
    slug: 'real-madrid-vs-barcelona',
    sportId: 'soccer',
    leagueId: 'la-liga',
    homeTeamId: 'real-madrid',
    awayTeamId: 'barcelona',
    date: getRelativeDate(0),
    datePeriod: 'today',
    kickoffTime: '20:00',
    displayTime: '8:00 PM CEST / 3:00 PM ET',
    status: 'UPCOMING',
    minute: null,
    homeScore: null,
    awayScore: null,
    venue: 'Santiago Bernabéu, Madrid',
    referee: 'José María Sánchez Martínez',
    attendance: '81,044',
    broadcastInfo: {
      us: 'ESPN+ / ESPN Deportes',
      uk: 'Premier Sports 1',
      ca: 'TSN+',
      au: 'beIN SPORTS 2'
    },
    preview: 'The pinnacle of club soccer, El Clásico takes center stage at the Bernabéu.',
    homeForm: ['W', 'W', 'W', 'D', 'W'],
    awayForm: ['W', 'W', 'W', 'W', 'L'],
    headToHead: 'Real Madrid 3 wins, Barcelona 2 wins.',
    keyMatchup: 'Vinícius Júnior vs Jules Koundé in a test of speed and anticipation.'
  },
  {
    id: 'm-bl-bay-bvb',
    slug: 'bayern-munich-vs-borussia-dortmund',
    sportId: 'soccer',
    leagueId: 'bundesliga',
    homeTeamId: 'bayern-munich',
    awayTeamId: 'borussia-dortmund',
    date: getRelativeDate(0),
    datePeriod: 'today',
    kickoffTime: '14:30',
    displayTime: '2:30 PM CEST / 9:30 AM ET',
    status: 'FT',
    minute: 'Full Time',
    homeScore: 3,
    awayScore: 2,
    venue: 'Allianz Arena, Munich',
    referee: 'Felix Zwayer',
    attendance: '75,000 (Sold out)',
    broadcastInfo: {
      us: 'ESPN+ / ABC',
      uk: 'Sky Sports Football',
      ca: 'DAZN Canada',
      au: 'beIN SPORTS 1'
    },
    preview: 'A pulsating Der Klassiker thriller that delivered 5 goals.',
    homeForm: ['W', 'W', 'W', 'W', 'L'],
    awayForm: ['D', 'W', 'W', 'L', 'W'],
    headToHead: 'Bayern Munich 3 wins, Dortmund 1 win, 1 draw.',
    keyMatchup: 'Harry Kane spearheading the Bavarian attack.'
  },
  {
    id: 'm-sa-int-juv',
    slug: 'inter-milan-vs-juventus',
    sportId: 'soccer',
    leagueId: 'serie-a',
    homeTeamId: 'inter-milan',
    awayTeamId: 'juventus',
    date: getRelativeDate(0),
    datePeriod: 'today',
    kickoffTime: '17:00',
    displayTime: '5:00 PM CET / 12:00 PM ET',
    status: 'LIVE',
    minute: "68'",
    homeScore: 1,
    awayScore: 1,
    venue: 'San Siro, Milan',
    referee: 'Daniele Doveri',
    attendance: '75,320',
    broadcastInfo: {
      us: 'Paramount+ / CBS Sports Golazo',
      uk: 'TNT Sports 2',
      ca: 'FuboTV Canada',
      au: 'beIN SPORTS'
    },
    preview: 'The Derby d\'Italia has lived up to its legendary tactical intensity at the San Siro.',
    homeForm: ['W', 'W', 'W', 'D', 'W'],
    awayForm: ['W', 'D', 'W', 'W', 'D'],
    headToHead: 'Inter 2 wins, Juventus 1 win, 2 draws.',
    keyMatchup: 'Nicolò Barella orchestrating transitions against Juventus.'
  }
];

export function getAllMatches() {
  return matches;
}

export function getMatchBySlug(slug) {
  return matches.find(m => m.slug === slug);
}

export function getMatchesByLeague(leagueId) {
  return matches.filter(m => m.leagueId === leagueId);
}

export function getMatchesBySport(sportId) {
  return matches.filter(m => m.sportId === sportId || m.leagueId === sportId);
}

export function getUSASoccerMatches() {
  const usaLeagues = ['mls', 'nwsl', 'usl-championship', 'usl-league-one', 'mls-next-pro', 'nisa', 'us-open-cup', 'leagues-cup'];
  return matches.filter(m => usaLeagues.includes(m.leagueId));
}

export function getTodayMatches() {
  return matches.filter(m => m.datePeriod === 'today');
}

export function getLiveMatches() {
  return matches.filter(m => m.status === 'LIVE');
}

export function getFinishedMatches() {
  return matches.filter(m => m.status === 'FT');
}

export function getUpcomingMatches() {
  return matches.filter(m => m.status === 'UPCOMING');
}

export function getFilteredMatches({ 
  period = 'all', 
  leagueId = 'all', 
  sportId = 'all', 
  search = '' 
}) {
  return matches.filter(match => {
    // Sport filter
    if (sportId !== 'all') {
      if (sportId === 'usa-soccer') {
        const usaLeagues = ['mls', 'nwsl', 'usl-championship', 'usl-league-one', 'mls-next-pro', 'nisa', 'us-open-cup', 'leagues-cup'];
        if (!usaLeagues.includes(match.leagueId)) return false;
      } else if (match.sportId !== sportId && match.leagueId !== sportId) {
        return false;
      }
    }

    // League filter
    if (leagueId !== 'all' && match.leagueId !== leagueId) {
      return false;
    }

    // Period filter
    if (period === 'today' && match.datePeriod !== 'today') return false;
    if (period === 'tomorrow' && match.datePeriod !== 'tomorrow') return false;
    if (period === 'weekend' && match.datePeriod !== 'weekend') return false;
    if (period === 'this-week' && !['today', 'tomorrow', 'weekend', 'this-week'].includes(match.datePeriod)) return false;
    if (period === 'live' && match.status !== 'LIVE') return false;
    if (period === 'finished' && match.status !== 'FT') return false;
    if (period === 'upcoming' && match.status !== 'UPCOMING') return false;

    // Search query
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      const home = teams.find(t => t.id === match.homeTeamId)?.name.toLowerCase() || '';
      const away = teams.find(t => t.id === match.awayTeamId)?.name.toLowerCase() || '';
      const league = leagues.find(l => l.id === match.leagueId)?.name.toLowerCase() || '';
      if (!home.includes(q) && !away.includes(q) && !league.includes(q) && !match.slug.includes(q)) {
        return false;
      }
    }

    return true;
  });
}
