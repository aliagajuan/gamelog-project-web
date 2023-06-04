import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormJogoComponent } from './components/form-jogo/form-jogo.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AddJogoComponent } from './add-jogo/add-jogo.component';
import { CardGameComponent } from './components/card-game/card-game.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GameListComponent } from './home-page/game-list/game-list.component';
import { EditJogoPageComponent } from './edit-jogo-page/edit-jogo-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormJogoComponent,
    FooterComponent,
    AddJogoComponent,
    CardGameComponent,
    HomePageComponent,
    GameListComponent,
    EditJogoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
