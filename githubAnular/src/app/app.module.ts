import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from "@angular/forms";

import { HttpService } from './http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RankingsComponent } from './rankings/rankings.component';
import { BattleComponent } from './battle/battle.component';
import { ResultsComponent } from './battle/results/results.component';
import { CombatComponent } from './battle/combat/combat.component';
import { PlayerComponent } from './battle/combat/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    RankingsComponent,
    BattleComponent,
    ResultsComponent,
    CombatComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
