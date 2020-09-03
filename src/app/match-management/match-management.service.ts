import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Match} from '../model/Match';
import {catchError, map, tap} from 'rxjs/operators';
import {MatchInTicket} from '../model/MatchInTicket';

@Injectable({
  providedIn: 'root'
})
export class MatchManagementService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getMatches (): Observable<Match[]> {
    return this.http.get<Match[]>(this.baseUrl)
      .pipe(map(matches => matches));
  }

  getMatch (homeTeam: String, awayTeam: String): Observable<Match>{
    return this.http.get<Match>(this.baseUrl + "/compare-teams/" + homeTeam + "/vs/" + awayTeam)
      .pipe(map(match => match));
  }

  getAllMatchesInTicket(): Observable<MatchInTicket[]>{
    return this.http.get<MatchInTicket[]>(this.baseUrl + "/my-matches")
      .pipe(map( matchesInTicket => matchesInTicket));
  }

  createMatchInTicket(newHomeTeam: string, newAwayTeam: string, newTip: string): Observable<MatchInTicket>{
    return this.http.post<MatchInTicket>(this.baseUrl + "/my-matches", {
      homeTeam: newHomeTeam,
      awayTeam: newAwayTeam,
      tip: newTip
    });
  }

  editMatch(id: string, editTip: string): Observable<MatchInTicket>{
    return this.http.patch<MatchInTicket>(this.baseUrl + "/my-matches/" + id, {
      homeTeam: "",
      awayTeam: "",
      tip: editTip
    });
  }

  deleteMatch(id: string): Observable<any>{
    return this.http.delete<MatchInTicket>(this.baseUrl + "/my-matches/" + id);
  }

}
