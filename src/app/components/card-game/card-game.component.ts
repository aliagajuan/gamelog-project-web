import { Component, Input } from '@angular/core';
import { Jogo } from 'src/app/model/jogo';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.scss']
})
export class CardGameComponent {
  @Input()
  jogo!: Jogo;
  dataInicio?:String;
  dataFim?:String;
  constructor(){

  }

}
