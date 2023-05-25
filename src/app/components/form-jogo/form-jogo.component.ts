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
  status:string="";
  constructor(){
    this.jogo = new Jogo()
  }
  onSubmit(){
    this.jogo.status=this.status
    localStorage.setItem(`jogo`,JSON.stringify(this.jogo))
    window.alert(`${this.jogo.nome} foi adicionado com sucesso!`)
    this.jogo = new Jogo();
  }
  onReset(){
    this.jogo = new Jogo();
  }

}
