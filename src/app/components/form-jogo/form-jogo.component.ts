import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject, catchError, empty } from 'rxjs';
import { Jogo } from 'src/app/model/jogo';
import { JogosService } from 'src/app/services/jogos.service';

@Component({
  selector: 'app-form-jogo',
  templateUrl: './form-jogo.component.html',
  styleUrls: ['./form-jogo.component.scss']
})
export class FormJogoComponent {
  @Input() idJogo?: number;

  jogo!: Jogo;
  jogosService: JogosService
 

  constructor(_jogosService: JogosService) {
    this.jogosService = _jogosService;
  }
  onSubmit() {
    if (this.idJogo != null) {
      //Editar
      this.jogosService.update(this.jogo)
        .subscribe(
          sucess => {
            window.alert(`${this.jogo.nome} foi alterado com sucesso!`),
              window.location.href = "/";
          }
          , error => window.alert("Erro ao enviar a alteração, tente novamente"));

    } else {
      //Adicionar
      this.jogosService.save(this.jogo).subscribe(
        sucess => {
          window.alert(`${this.jogo.nome} foi adicionado com sucesso!`);
          window.location.href = "/";
        }
        , error => window.alert("Erro ao adicionar jogo, tente novamente"));
    }
  }
  onReset() {
    this.jogo = new Jogo();
    this.jogo.status = ""
  }
  ngOnInit() {
    if (this.idJogo != null) {
      this.jogosService.getJogobyId(this.idJogo)
        .pipe(
          catchError(error => {
            window.alert("Erro ao buscar jogo selecionado, tente novamente")
            window.location.href = "/";
            return empty();
          })
        )
        .subscribe(data => this.jogo = data)
      console.log(this.idJogo)
      console.log(this.jogo.nome)

    }
    else {
      this.jogo = new Jogo();
      this.jogo.status="";
    }
  }

  onDelete() {
    if (this.idJogo != null) {
      this.jogosService.delete(this.idJogo).subscribe(sucess => {
        console.log('sucesso')
        window.alert(`Jogo deletado com sucesso!`);
        window.location.href = "/";
      }
        , error => {
          console.log('Erro ao deletar'),
            window.alert("Erro ao deletar, tente novamente")
        })
    }
  }
}
