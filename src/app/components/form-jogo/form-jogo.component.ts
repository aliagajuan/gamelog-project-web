import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Jogo } from 'src/app/model/jogo';

@Component({
  selector: 'app-form-jogo',
  templateUrl: './form-jogo.component.html',
  styleUrls: ['./form-jogo.component.scss']
})
export class FormJogoComponent {
  jogo:Jogo;

  constructor(){
    this.jogo = new Jogo()
  }
  onSubmit(){
    let gamelist:Array<Jogo>
    gamelist = JSON.parse(localStorage.getItem('gamelist')!);
    this.jogo.id = gamelist.length + 1;
    gamelist.push(this.jogo)

    localStorage.setItem(`gamelist`,JSON.stringify(gamelist))
    window.alert(`${this.jogo.nome} foi adicionado com sucesso!`)
    /*this.jogo.status=this.status
    localStorage.setItem(`jogo`,JSON.stringify(this.jogo))
    
    this.jogo = new Jogo();*/
  }
  onReset(){
    this.jogo = new Jogo();
    this.jogo.status=""
  }

}
