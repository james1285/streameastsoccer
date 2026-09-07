/**
 * StreamEast Soccer - Frequently Asked Questions
 * Informative, legally compliant FAQ data with JSON-LD structured data generator.
 */

export const faqs = [
  {
    id: 'faq-1',
    question: 'What is StreamEast Soccer?',
    answer: 'StreamEast Soccer is an independent soccer information, match schedule, live score, and legal streaming guide. Our mission is to help football enthusiasts worldwide easily track match fixtures, kickoff times, team news, league standings, and discover licensed, official broadcasters to watch their favorite matches legally.'
  },
  {
    id: 'faq-2',
    question: 'How can I find today\'s soccer matches?',
    answer: 'You can discover all soccer fixtures scheduled for today directly on our Homepage under the "Today\'s Matches" dashboard, or by visiting the dedicated Live Scores page (/live-scores) and Soccer Schedule page (/schedule) where you can filter by competition, kickoff time, and team.'
  },
  {
    id: 'faq-3',
    question: 'Where can I find upcoming soccer fixtures?',
    answer: 'Upcoming fixtures can be viewed on our Soccer Schedule page (/schedule) or individual league hub pages. Use the interactive time filters (Today, Tomorrow, This Week, Weekend) to explore future matches across all top competitions.'
  },
  {
    id: 'faq-4',
    question: 'Which soccer leagues are covered?',
    answer: 'StreamEast Soccer covers the world\'s premier soccer leagues, including the English Premier League, UEFA Champions League, Spanish La Liga, Italian Serie A, German Bundesliga, French Ligue 1, and Major League Soccer (MLS), alongside major domestic cups and international tournaments.'
  },
  {
    id: 'faq-5',
    question: 'Can I watch soccer online?',
    answer: 'Yes! Soccer matches can be watched online legally through subscription-based streaming platforms and verified network apps such as Peacock, Paramount+, ESPN+, Apple TV (MLS Season Pass), Sky Go, discovery+, FuboTV, and DAZN, depending on your geographic region.'
  },
  {
    id: 'faq-6',
    question: 'Where can I legally watch soccer?',
    answer: 'Official broadcast rights vary by territory. For example: In the United States, watch the Premier League on Peacock/NBC, Champions League and Serie A on Paramount+, and La Liga/Bundesliga on ESPN+. In the United Kingdom, matches are broadcast by Sky Sports, TNT Sports, and Amazon Prime Video. Visit our "How to Watch" guide (/how-to-watch) for a complete breakdown of licensed platforms by country.'
  },
  {
    id: 'faq-7',
    question: 'Does StreamEast Soccer provide live broadcasts?',
    answer: 'No. StreamEast Soccer does NOT host, stream, embed, or distribute any sports video broadcasts or copyrighted streams. We are strictly a sports schedule, news, statistical directory, and legal broadcasting guide pointing fans to authorized services.'
  },
  {
    id: 'faq-8',
    question: 'How often is the schedule updated?',
    answer: 'Our soccer fixture schedules, kickoff times, and broadcaster directories are continuously updated to reflect real-time fixture changes, television broadcast rescheduling, cup rearrangements, and weather postponements.'
  }
];

export function getAllFaqs() {
  return faqs;
}

export function generateFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}
