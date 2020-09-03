import { Match } from './model/Match';

export const MATCHES: Match[] = [
  {
    homeTeam: 'Barcelona',
    homeTeamCountry: 'Spain',
    homeTeamLastNineGoals: [1, 2, 4 ,3, 5, 6, 3, 5, 6],
    homeTeamHomeLastNineGoals: [3, 2, 1 ,3, 0, 2, 3, 4, 2],
    awayTeam: 'Real Madrid',
    awayTeamCountry: 'Spain',
    awayTeamLastNineGoals: [1, 2, 4 ,3, 5, 6, 3, 5, 6],
    awayTeamAwayLastNineGoals: [3, 2, 1 ,3, 0, 2, 3, 4, 2],
    againstEachOther: [1, 2, 4 ,3, 5, 6, 3, 5, 6],
    againstEachOtherHomeAway: [1, 2, 4 ,3, 5, 6, 3, 5, 6],
    time: "12:00",
    averageTotalGoals: "2.5",
    averageTotalGoalsChanged: "2.5"
  },
  /*
  {
    homeTeam: 'Chelsea',
    homeTeamCountry: 'England',
    awayTeam: 'Mancester United',
    awayTeamCountry: 'England'
  },
  {
    homeTeam: 'Levante',
    homeTeamCountry: 'Spain',
    awayTeam: 'Girona',
    awayTeamCountry: 'Spain'
  },
*/
];
