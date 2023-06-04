import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJogoComponent } from './add-jogo/add-jogo.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EditJogoPageComponent } from './edit-jogo-page/edit-jogo-page.component';

const routes: Routes = 
[{path:'adicionar-jogo',component:AddJogoComponent},
{path:'',component:HomePageComponent},
{path:'editar/jogo/:id', component:EditJogoPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
