import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Jogo } from 'src/app/model/jogo';
import { JogosService } from 'src/app/services/jogos.service';

@Component({
  selector: 'app-form-jogo',
  templateUrl: './form-jogo.component.html',
  styleUrls: ['./form-jogo.component.scss']
})
export class FormJogoComponent {
  @Input() idJogo?:number;

  jogo!:Jogo;
  jogosService:JogosService

  constructor(_jogosService:JogosService){
    this.jogo = new Jogo()
    this.jogosService=_jogosService;
  }
  onSubmit(){
    if(this.idJogo!=null){
      //Editar
      this.jogosService.update(this.jogo).subscribe(sucess=>console.log('alterado com sucesso')
      ,error=>console.log('erro'));

      window.alert(`${this.jogo.nome} foi alterado com sucesso!`)
    }else{
      //Adicionar
      this.jogosService.save(this.jogo).subscribe(sucess=>console.log('sucesso')
      ,error=>console.log('erro'))
      window.alert(`${this.jogo.nome} foi adicionado com sucesso!`)
    }
  }
  onReset(){
    this.jogo = new Jogo();
    this.jogo.status=""
  }
  ngOnInit(){
    if(this.idJogo != null){
      this.jogosService.getJogobyId(this.idJogo).subscribe(data=>this.jogo=data)
      console.log(this.idJogo)
      console.log(this.jogo.nome)
    }
    else{
      this.jogo = new Jogo()
    }
   }

   onDelete(){
    if(this.idJogo != null){ 
      this.jogosService.delete(this.idJogo).subscribe(sucess=>console.log('sucesso')
      ,error=>console.log('erro'))
      window.alert(`Jogo deletado com sucesso!`);
    }
   }
}
