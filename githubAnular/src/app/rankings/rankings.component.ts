import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {
  users: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getRankings();
  }

  getRankings() {
    this._httpService.getRankings().subscribe(data => {
      if(data["message"] == "Success") {
        this.users = data["data"];
      }
    });
  }

}
