/**
 * StreamEast - Broadcaster Directory
 * Legal TV and streaming guide for all USA soccer leagues, European competitions,
 * and North American major sports (NFL, NBA, WNBA, MLB, NHL, UFC, F1).
 */

export const broadcastersByRegion = [
  {
    region: 'United States',
    countryCode: 'US',
    description: 'In the US, sports broadcasts are carried via national television networks and authorized subscription platforms.',
    leagues: [
      // USA Soccer
      {
        leagueId: 'mls',
        leagueName: 'Major League Soccer (MLS)',
        primaryBroadcaster: 'Apple TV (MLS Season Pass)',
        linearChannels: ['FOX', 'FS1'],
        digitalStreaming: ['Apple TV (Every match with no regional blackouts)'],
        costInfo: '$14.99/mo or $99/season (Discount for Apple TV+ subscribers)'
      },
      {
        leagueId: 'nwsl',
        leagueName: 'National Women\'s Soccer League (NWSL)',
        primaryBroadcaster: 'CBS Sports / Paramount+',
        linearChannels: ['CBS', 'CBS Sports Network', 'ION Television', 'ESPN'],
        digitalStreaming: ['Paramount+', 'Prime Video', 'ESPN+', 'NWSL+ (Free Global)'],
        costInfo: 'Multiple weekly free broadcasts on ION Television'
      },
      {
        leagueId: 'usl-championship',
        leagueName: 'USL Championship (USLC)',
        primaryBroadcaster: 'CBS Sports Golazo Network',
        linearChannels: ['CBS Sports Network', 'ESPN2'],
        digitalStreaming: ['Paramount+', 'ESPN+', 'CBS Sports Golazo (Free FAST channel)'],
        costInfo: 'Many matches stream free on CBS Sports Golazo'
      },
      {
        leagueId: 'usl-league-one',
        leagueName: 'USL League One (USL1)',
        primaryBroadcaster: 'CBS Sports Golazo Network / ESPN+',
        linearChannels: ['CBS Sports Golazo'],
        digitalStreaming: ['ESPN+', 'CBS Sports app'],
        costInfo: 'Free on CBS Golazo or included with ESPN+'
      },
      {
        leagueId: 'mls-next-pro',
        leagueName: 'MLS NEXT Pro',
        primaryBroadcaster: 'Apple TV',
        linearChannels: ['None (All digital)'],
        digitalStreaming: ['MLS Season Pass on Apple TV (Select matches free)'],
        costInfo: 'Included with MLS Season Pass'
      },
      {
        leagueId: 'nisa',
        leagueName: 'NISA',
        primaryBroadcaster: 'FIFA+',
        linearChannels: ['None'],
        digitalStreaming: ['FIFA+ (100% Free Worldwide)', 'NISA+'],
        costInfo: 'Free streaming on FIFA+'
      },
      {
        leagueId: 'us-open-cup',
        leagueName: 'Lamar Hunt U.S. Open Cup',
        primaryBroadcaster: 'U.S. Soccer Streams',
        linearChannels: ['CBS Sports Golazo Network'],
        digitalStreaming: ['U.S. Soccer YouTube / Website', 'Apple TV (Select rounds)', 'Paramount+'],
        costInfo: 'Mostly free streaming on official U.S. Soccer channels'
      },
      {
        leagueId: 'leagues-cup',
        leagueName: 'Leagues Cup',
        primaryBroadcaster: 'Apple TV (MLS Season Pass)',
        linearChannels: ['FS1', 'Univision / TUDN'],
        digitalStreaming: ['Apple TV', 'ViX (Spanish)'],
        costInfo: 'Included in MLS Season Pass'
      },

      // Major American Sports
      {
        leagueId: 'nfl',
        leagueName: 'NFL Football',
        primaryBroadcaster: 'NBC / Peacock, CBS, FOX, ESPN, Prime',
        linearChannels: ['NBC', 'CBS', 'FOX', 'ESPN', 'ABC', 'NFL Network'],
        digitalStreaming: ['Peacock', 'Paramount+', 'Prime Video (Thursday Night Football)', 'ESPN+', 'NFL+'],
        costInfo: 'Over-the-air free with digital antenna or standard TV tier'
      },
      {
        leagueId: 'nba',
        leagueName: 'NBA Basketball',
        primaryBroadcaster: 'ESPN / ABC & TNT Sports',
        linearChannels: ['ESPN', 'ABC', 'TNT', 'NBA TV'],
        digitalStreaming: ['Max (B/R Sports add-on)', 'ESPN App', 'NBA League Pass'],
        costInfo: 'League Pass starts at $14.99/mo'
      },
      {
        leagueId: 'wnba',
        leagueName: 'WNBA Basketball',
        primaryBroadcaster: 'ION Television, Prime Video, ESPN',
        linearChannels: ['ION (Friday Night Spotlight)', 'ESPN', 'ESPN2', 'ABC', 'CBS Sports Network'],
        digitalStreaming: ['Prime Video', 'Paramount+', 'WNBA League Pass ($34.99/yr)'],
        costInfo: 'Free weekly doubleheaders on over-the-air ION'
      },
      {
        leagueId: 'mlb',
        leagueName: 'Major League Baseball (MLB)',
        primaryBroadcaster: 'FOX, ESPN, Apple TV, TBS',
        linearChannels: ['FOX', 'FS1', 'ESPN', 'TBS'],
        digitalStreaming: ['Apple TV (Friday Night Baseball)', 'ESPN+', 'MLB.TV'],
        costInfo: 'Free games on Apple TV and over-the-air FOX'
      },
      {
        leagueId: 'nhl',
        leagueName: 'NHL Hockey',
        primaryBroadcaster: 'ESPN / ESPN+ & TNT Sports',
        linearChannels: ['ESPN', 'TNT', 'ABC', 'NHL Network'],
        digitalStreaming: ['ESPN+ (Out-of-market package: 1,000+ games)', 'Max'],
        costInfo: 'Included with ESPN+ at $10.99/mo'
      },
      {
        leagueId: 'ufc',
        leagueName: 'UFC & MMA',
        primaryBroadcaster: 'ESPN+ PPV',
        linearChannels: ['ESPN (Preliminary fights)'],
        digitalStreaming: ['ESPN+ (Main PPV card & Prelims)', 'UFC Fight Pass'],
        costInfo: 'PPV events $79.99 on ESPN+'
      },
      {
        leagueId: 'f1',
        leagueName: 'Formula 1',
        primaryBroadcaster: 'ESPN / ABC',
        linearChannels: ['ESPN', 'ESPN2', 'ABC (Select North American GPs)'],
        digitalStreaming: ['ESPN+', 'F1 TV Pro ($9.99/mo)'],
        costInfo: 'Commercial-free races on ESPN and F1 TV Pro'
      },

      // European Soccer
      {
        leagueId: 'premier-league',
        leagueName: 'Premier League',
        primaryBroadcaster: 'Peacock Premium / NBC',
        linearChannels: ['NBC', 'USA Network', 'Telemundo'],
        digitalStreaming: ['Peacock (Exclusive streaming & replays)'],
        costInfo: 'Starting at $5.99/mo on Peacock'
      },
      {
        leagueId: 'champions-league',
        leagueName: 'UEFA Champions League',
        primaryBroadcaster: 'Paramount+',
        linearChannels: ['CBS Sports Network', 'Univision / TUDN'],
        digitalStreaming: ['Paramount+ (All matches live)', 'ViX'],
        costInfo: 'Starting at $5.99/mo on Paramount+'
      },
      {
        leagueId: 'la-liga',
        leagueName: 'La Liga',
        primaryBroadcaster: 'ESPN+',
        linearChannels: ['ESPN Deportes', 'ABC (Select matches)'],
        digitalStreaming: ['ESPN+ (All 380 matches live)'],
        costInfo: 'Starting at $10.99/mo on ESPN+'
      },
      {
        leagueId: 'serie-a',
        leagueName: 'Serie A',
        primaryBroadcaster: 'Paramount+',
        linearChannels: ['CBS Sports Golazo Network'],
        digitalStreaming: ['Paramount+ (All matches live)'],
        costInfo: 'Starting at $5.99/mo'
      },
      {
        leagueId: 'bundesliga',
        leagueName: 'Bundesliga',
        primaryBroadcaster: 'ESPN+',
        linearChannels: ['ABC / ESPN (Select derbies)'],
        digitalStreaming: ['ESPN+ (All matches live)'],
        costInfo: 'Included with ESPN+ subscription'
      },
      {
        leagueId: 'ligue-1',
        leagueName: 'Ligue 1',
        primaryBroadcaster: 'beIN SPORTS',
        linearChannels: ['beIN SPORTS'],
        digitalStreaming: ['beIN SPORTS CONNECT', 'FuboTV'],
        costInfo: 'Available via FuboTV and live streaming providers'
      }
    ]
  },
  {
    region: 'United Kingdom',
    countryCode: 'GB',
    description: 'In the UK, sports broadcasting is carried by Sky Sports, TNT Sports, and official streaming passes.',
    leagues: [
      {
        leagueId: 'premier-league',
        leagueName: 'Premier League',
        primaryBroadcaster: 'Sky Sports',
        linearChannels: ['Sky Sports Main Event', 'TNT Sports'],
        digitalStreaming: ['NOW TV', 'discovery+'],
        costInfo: 'Packages start from £22/mo'
      },
      {
        leagueId: 'nfl',
        leagueName: 'NFL Football',
        primaryBroadcaster: 'Sky Sports NFL',
        linearChannels: ['Sky Sports NFL', 'ITV (Select highlights)'],
        digitalStreaming: ['NOW TV', 'NFL Game Pass on DAZN'],
        costInfo: 'Available on Sky and DAZN'
      },
      {
        leagueId: 'f1',
        leagueName: 'Formula 1',
        primaryBroadcaster: 'Sky Sports F1',
        linearChannels: ['Sky Sports F1', 'Channel 4 (British GP live & highlights)'],
        digitalStreaming: ['NOW TV Sky Sports Pass'],
        costInfo: 'Available via Sky Sports or NOW TV'
      },
      {
        leagueId: 'mls',
        leagueName: 'Major League Soccer',
        primaryBroadcaster: 'Apple TV',
        linearChannels: ['None'],
        digitalStreaming: ['MLS Season Pass on Apple TV'],
        costInfo: '£14.99/mo or £99/season'
      }
    ]
  }
];

export function getBroadcastersByLeague(leagueId) {
  const results = [];
  broadcastersByRegion.forEach(region => {
    const found = region.leagues.find(l => l.leagueId === leagueId);
    if (found) {
      results.push({
        region: region.region,
        countryCode: region.countryCode,
        ...found
      });
    }
  });
  return results;
}
