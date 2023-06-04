import { Component, Input } from '@angular/core';
import { Jogo } from 'src/app/model/jogo';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent {

  @Input()  gamelist1?: Array<Jogo>;

}
