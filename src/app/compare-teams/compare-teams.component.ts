import {Component, Input, OnInit} from '@angular/core';
import {Match} from '../model/Match';
import {MatchManagementService} from '../match-management/match-management.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-compare-teams',
  templateUrl: './compare-teams.component.html',
  styleUrls: ['./compare-teams.component.css']
})
export class CompareTeamsComponent implements OnInit {

  match: Match;
  homeTeam: String;
  awayTeam: String;

  rForm: FormGroup;

  constructor(private fb: FormBuilder, private matchService: MatchManagementService) {
    /*
    this.rForm = fb.group({
      'homeTeam': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
      'awayTeam': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
      'validate': ' '
    });
    */
  }

  ngOnInit() {
  }

  getMatch(homeTeam: String, awayTeam: String): void {
    this.matchService.getMatch(homeTeam, awayTeam)
      .subscribe(match => this.match = match);
  }

}
