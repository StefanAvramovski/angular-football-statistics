import { Component, OnInit } from '@angular/core';
import {MATCHES} from '../mock-matches';
import {MatchInTicket} from '../model/MatchInTicket';
import {MatchManagementService} from '../match-management/match-management.service';

@Component({
  selector: 'app-my-matches',
  templateUrl: './my-matches.component.html',
  styleUrls: ['./my-matches.component.css']
})
export class MyMatchesComponent implements OnInit {

  matches: MatchInTicket[];

  constructor(private matchService: MatchManagementService) { }

  ngOnInit() {
    this.getMatches();
  }

  getMatches(): void {
    this.matchService.getAllMatchesInTicket()
      .subscribe(matches => this.matches = matches);
  }

  editMatch(id: string, tip: string){
    this.matchService.editMatch(id, tip)
      .subscribe(result => console.log(result));
  }

  deleteMatch(id: string): void{
    this.matchService.deleteMatch(id)
      .subscribe(() => {this.matches = this.matches.filter(match => match.id !== id)
      });
  }

}
