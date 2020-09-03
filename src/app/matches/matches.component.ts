import { Component, OnInit } from '@angular/core';
import {Match} from '../model/Match';
import {MatchManagementService} from '../match-management/match-management.service';
import {MatchInTicket} from '../model/MatchInTicket';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches: Match[];
  matchInTicket: MatchInTicket;

  constructor(private matchService: MatchManagementService) { }

  ngOnInit() {
    this.getMatches();
  }

  getMatches(): void {
    this.matchService.getMatches()
      .subscribe(matches => this.matches = matches);
  }

  addMatchToMyMatches(homeName: string, awayName: string, tip: string){
    console.log("Called with" + homeName, awayName);
    this.matchService.createMatchInTicket(homeName, awayName, tip)
      .subscribe(matchInTicket => this.matchInTicket = matchInTicket);
  }

}
