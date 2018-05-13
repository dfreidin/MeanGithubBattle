import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RankingsComponent } from './rankings/rankings.component';
import { BattleComponent } from './battle/battle.component';
import { ResultsComponent } from './battle/results/results.component';
import { CombatComponent } from './battle/combat/combat.component';

const routes: Routes = [
  {path: "rankings", component: RankingsComponent},
  {path: "", component: BattleComponent, children: [
    {path: "results", component: ResultsComponent},
    {path: "", pathMatch: "full", component: CombatComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
