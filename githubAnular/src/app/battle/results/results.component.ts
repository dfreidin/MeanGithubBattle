import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  players: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.players = this._httpService.retrieveUsers();
  }

}
