import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatchesComponent } from './matches/matches.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { CompareTeamsComponent } from './compare-teams/compare-teams.component';
import { MyMatchesComponent } from './my-matches/my-matches.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatchManagementService} from './match-management/match-management.service';

@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    MatchDetailsComponent,
    CompareTeamsComponent,
    MyMatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],


  providers: [MatchManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
