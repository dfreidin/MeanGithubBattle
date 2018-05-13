import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  player1: any;
  player2: any;

  constructor(private _http: HttpClient) { }
  storeUsers(user1, user2) {
    this.player1 = user1;
    this.player2 = user2;
    this.saveRanking(user1).subscribe(data => data);
    this.saveRanking(user2).subscribe(data => data);
  }
  retrieveUsers() {
    return [this.player1, this.player2].sort((a,b) => b["score"] - a["score"]);
  }
  getRankings() {
    return this._http.get("/users");
  }
  saveRanking(user) {
    return this._http.post(`/users/${user.username}`, user);
  }
  getGithubUser(username: string) {
    return this._http.get(`https://api.github.com/users/${username}?access_token=6b90c6de3887323bb8f565422e212b9cfe3b8738`);
  }
}
