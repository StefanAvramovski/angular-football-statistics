import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { MatchesComponent } from './matches/matches.component';
import { CompareTeamsComponent } from './compare-teams/compare-teams.component';
import {MyMatchesComponent} from './my-matches/my-matches.component';

const routes: Routes = [
  {
    path: '',
    component: MatchesComponent
  },
  {
    path: 'compare-teams',
    component: CompareTeamsComponent
  },
  {
    path: 'match-details/:homeTeam/vs/:awayTeam',
    component: MatchDetailsComponent
  },
  {
    path: 'my-matches',
    component: MyMatchesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
