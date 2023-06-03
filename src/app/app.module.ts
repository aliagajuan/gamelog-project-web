import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormJogoComponent } from './components/form-jogo/form-jogo.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AddJogoComponent } from './add-jogo/add-jogo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormJogoComponent,
    FooterComponent,
    AddJogoComponent
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
