import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJogoComponent } from './add-jogo/add-jogo.component';

const routes: Routes = [{path:'adicionar-jogo',component:AddJogoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
