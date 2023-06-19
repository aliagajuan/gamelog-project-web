import { Component, Input } from '@angular/core';
import { Observable, Subject, catchError, count, empty } from 'rxjs';
import { Jogo } from 'src/app/model/jogo';
import { JogosService } from 'src/app/services/jogos.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent {

  gamelist$!:Observable<Jogo[]>
  error$ = new Subject<boolean> 
  listGreaterThanZero=false

  jogosService:JogosService
  constructor(_jogosService:JogosService){
  this.jogosService=_jogosService;
  }


  ngOnInit(){
    this.carregarLista();
  }

  carregarLista(){
    this.gamelist$ = this.jogosService.getJogos()
    .pipe(
      catchError(error=>{
        this.error$.next(true);
        return empty()
      })
    );
  }
}
