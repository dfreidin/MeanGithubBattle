import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  username: string;
  user: any;
  @Output() userEmitter = new EventEmitter();
  @Input() player_num;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.user = null;
  }
  getGithubUser() {
    this._httpService.getGithubUser(this.username).subscribe(data => {
      this.user = data;
      this.userEmitter.emit(this.user);
    });
  }

}
