const categories = [
  {
    name: 'Tênis de mesa',
    championship: [
      {
        name: 'Moscow Pro League',
      },
      {
        name: 'Ukraine Win Cup',
      },
      {
        name: 'Ukraine TT Cup',
      },
      {
        name: 'Armenia TT Cup',
      },
      {
        name: 'Setka Cup',
      },
      {
        name: 'China Pro League',
      },
    ],
    markets: [
      {
        name: 'Match winner',
      },
      {
        name: 'Race to x points',
      },
      {
        name: 'Match handicap points',
      },
      {
        name: 'Match total points',
      },
      {
        name: 'Match Odd/Even',
      },
      {
        name: 'Game winner',
      },
      {
        name: 'Game total points',
      },
      {
        name: 'Correct game result',
      },
      {
        name: 'Exact number of games',
      },
      {
        name: 'Games decided by extra points'
      },
    ],
  },
  {
    name: 'League of Legends',
    championship: [
      {
        name: 'LCK',
      },
      {
        name: 'LPL',
      },
      {
        name: 'LCS',
      },
      {
        name: 'LCS Academy'
      },
      {
        name: 'LEC'
      },
      {
        name: 'LAS',
      },
      {
        name: 'LLA',
      },
      {
        name: 'TCL',
      },
      {
        name: 'OPL',
      },
      {
        name: 'LJL',
      },
      {
        name: 'CBLOL',
      },
      {
        name: 'CD-BR',
      },
      {
        name: 'Worlds',
      },
      {
        name: 'MSI'
      },
      {
        name: 'All Stars',
      },
      {
        name: 'EU Masters',
      },
      {
        name: 'TAL',
      },
      {
        name: 'PCS',
      },
    ],
    markets: [
      {
        name: 'Game winner',
      },
      {
        name: 'Map winner',
      },
      {
        name: 'First tower',
      },
      {
        name: 'First blood',
      },
      {
        name: 'First inibitor',
      },
      {
        name: 'First baron',
      },
      {
        name: 'First dragon',
      },
      {
        name: 'Map handicap kills',
      },
      {
        name: 'Map handicap',
      },
      {
        name: 'Map total towers',
      },
      {
        name: 'Map total dragons',
      },
      {
        name: 'Map total barons',
      },
      {
        name: 'Map total kills'
      },
    ],
  },
];

const toJSON = JSON.stringify(categories);

console.log(toJSON)