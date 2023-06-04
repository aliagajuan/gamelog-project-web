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

  convertDate(date:Date){
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();
    let dateFormat = mm + '/' + dd + '/' + yyyy;
    return dateFormat;
  }

  ngOnInit(){
    this.dataInicio = this.convertDate(this.jogo.dataInicio)
    this.dataFim = this.convertDate(this.jogo.dataFim)
  }
}
