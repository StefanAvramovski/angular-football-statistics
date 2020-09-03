import {Component, Input, OnInit} from '@angular/core';
import { Chart } from 'chart.js';
import {MATCHES} from '../mock-matches';
import {Match} from '../model/Match';
import {MatchManagementService} from '../match-management/match-management.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {

  match: Match;
  homeTeamChart: any;
  awayTeamChart: any;

  homeTeamPieChart: any;
  awayTeamPieChart: any;

  againstEachOtherChart: any;
  againstEachOtherHomeAwayChart: any;

  constructor(private matchService: MatchManagementService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.getMatch(params["homeTeam"], params["awayTeam"]));
  }

  addMatchToMyMatches(homeName: string, awayName: string, tip: string){
    this.matchService.createMatchInTicket(homeName, awayName, tip)
      .subscribe(result => console.log(result));
  }


  getMatch(homeTeam: String, awayTeam: String) {
    this.matchService.getMatch(homeTeam, awayTeam)
      .subscribe(match =>{
        this.match = match;
        this.activateCharts();
      });

  }


  goalsInMatch(matchGoals: any[]): any[] {
    let goals = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i in matchGoals) {
      goals[matchGoals[i]] += 1;
    }

    return goals;
  }

  matchesOver(goals: any[]): any[]{
    let numberOfMatches = 0;

    for( let i in goals) {
      if( goals[i] >= 3) {
        numberOfMatches++;
      }
    }
    return [numberOfMatches, goals.length - numberOfMatches];
  }

  private activateCharts() {

    this.homeTeamChart = new Chart('homeTeamCanvasId', {
      type: 'line',
      data:{
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        datasets: [
          {
            label: 'Last matches goals',
            data: this.match.homeTeamLastNineGoals,
            borderColor: '#ffcc00',
            fill: true
          },
          {
            label: 'Last home matches',
            data: this.match.homeTeamHomeLastNineGoals,
            borderColor: 'Lightblue',
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true,
          }],
          yAxes: [{
            display: true,
            ticks: {
              steps: 9,
              max: 9
            }
          }]
        }
      }
    });

    this.awayTeamChart = new Chart('awayTeamCanvasId', {
      type: 'line',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        datasets: [
          {
            label: 'Last matches goals',
            data: this.match.awayTeamLastNineGoals,
            borderColor: '#ffcc00',
            fill: true
          },
          {
            label: 'Last away matches',
            data: this.match.awayTeamAwayLastNineGoals,
            borderColor: 'Lightblue',
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display:true
          }],
          yAxes: [{
            display:true,
            ticks: {
              steps: 9,
              max: 9
            }
          }]
        }
      }
    });

    this.homeTeamPieChart = new Chart('homeTeamPieChartId', {
      type: 'bar',
      data: {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        datasets: [
          {
            label: "Last matches",
            data: this.goalsInMatch(this.match.homeTeamLastNineGoals),
            backgroundColor: '#ffcc00'
          },
          {
            label: "Last matches at home",
            data: this.goalsInMatch(this.match.homeTeamHomeLastNineGoals),
            backgroundColor: 'Lightblue'
          }
        ]
      },

      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Goals in match'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Number of matches',
            },
            ticks: {
              steps: 9,
              max: 9
            }
          }]
        }
      }
    });

    this.awayTeamPieChart = new Chart('awayTeamPieChartId', {
      type: 'bar',
      data: {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        datasets: [
          {
            label: "Last matches",
            data: this.goalsInMatch(this.match.awayTeamLastNineGoals),
            backgroundColor: '#ffcc00'
          },
          {
            label: "Last matches away",
            data: this.goalsInMatch(this.match.awayTeamAwayLastNineGoals),
            backgroundColor: 'Lightblue'
          }
        ]
      },

      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Goals in match'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Number of matches',
            },
            ticks: {
              steps: 9,
              max: 9
            }
          }]
        }
      }
    });


    this.againstEachOtherChart = new Chart('againstEachOtherId', {
      type: 'pie',
      data: {
        datasets: [
          {
            data: this.matchesOver(this.match.againstEachOther),
            backgroundColor: ['Orange' , 'Lightblue']
          },
        ],
        labels:[
          'Over 2.5',
          'Under 2.5'
        ]
      },
      options: {
        responsive: true
      }
    });

    this.againstEachOtherHomeAwayChart = new Chart('againstEachOtherHomeAwayId', {
      type: 'pie',
      data: {
        datasets: [
          {
            data: this.matchesOver(this.match.againstEachOtherHomeAway),
            backgroundColor: ['Orange' , 'Lightblue']
          },
        ],
        labels:[
          'Over 2.5',
          'Under 2.5'
        ]
      },
      options: {
        responsive: true
      }
    });
  }
}
