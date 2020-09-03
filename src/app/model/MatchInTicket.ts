export class MatchInTicket {
  id: string;
  homeTeam: string;
  awayTeam: string;
  tip: string;

  constructor(id: string, homeTeam: string, awayTeam: string, tip: string){
    this.id = id;
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.tip = tip;
  }
}
