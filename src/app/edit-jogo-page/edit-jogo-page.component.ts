import { Component, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jogo } from '../model/jogo';
import { JogosService } from '../services/jogos.service';

@Component({
  selector: 'app-edit-jogo-page',
  templateUrl: './edit-jogo-page.component.html',
  styleUrls: ['./edit-jogo-page.component.scss']
})
export class EditJogoPageComponent {

  @Output() idJogo!:number

  jogoEditar!:Jogo;

  jogosService:JogosService

  constructor(private route:ActivatedRoute, _jogosService:JogosService){
    this.jogosService=_jogosService
    this.idJogo = this.route.snapshot.params['id'];
  }

}
