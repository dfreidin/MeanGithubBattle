import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {
  player1: any;
  player2: any;
  score1: number;
  score2: number;

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.player1 = null;
    this.player2 = null;
  }
  dataFromPlayer1(data) {
    this.player1 = data;
  }
  dataFromPlayer2(data) {
    this.player2 = data;
  }
  calcScores() {
    this.score1 = (this.player1["public_repos"] + this.player1["followers"]) * 12;
    this.score2 = (this.player2["public_repos"] + this.player2["followers"]) * 12;
    this.storeUsers();
    this._router.navigate(["/results"]);
  }
  storeUsers() {
    this._httpService.storeUsers(
      {username: this.player1["login"], img_url: this.player1["avatar_url"], score: this.score1},
      {username: this.player2["login"], img_url: this.player2["avatar_url"], score: this.score2}
    )
  }

}
