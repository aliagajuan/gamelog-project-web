import { Component, Output } from '@angular/core';
import { Jogo } from '../model/jogo';
import { JogosService } from '../services/jogos.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  @Output()  gamelist!: Array<Jogo>;
  jogosService:JogosService
  constructor(_jogosService:JogosService){
  this.jogosService=_jogosService;
  }

  ngOnInit(){
    this.jogosService.getJogos().subscribe(data =>this.gamelist=data);
  }
}
