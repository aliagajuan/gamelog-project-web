import { Component, Output } from '@angular/core';
import { Jogo } from '../model/jogo';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  @Output()  gamelist!: Array<Jogo>;

  constructor(){
    this.gamelist = new Array<Jogo>()
  }

  ngOnInit(){
    this.gamelist = JSON.parse(localStorage.getItem('gamelist')!);

    if(this.gamelist==null){
    this.gamelist = new Array<Jogo>()
    let jogo = new Jogo()
    jogo.nome="Final Fantasy";
    jogo.conquistas=true;
    jogo.dataInicio=new Date();
    jogo.dataFim=new Date();
    jogo.plataforma='Xbox';
    jogo.status='Concluido';
    jogo.id=1;

    let jogo1 = new Jogo()
    jogo1.nome="Cyberpunk";
    jogo1.conquistas=true;
    jogo1._dataInicio=new Date();
    jogo1._dataFim=new Date();
    jogo1.plataforma='PC';
    jogo1.status='Concluido';
    jogo1.id=2;

    let jogo2 = new Jogo()
    jogo2.nome="Red Dead Redepmtion 2 - Complete Edition";
    jogo2.conquistas=true;
    jogo2._dataInicio=new Date();
    jogo2._dataFim=new Date();
    jogo2.plataforma='PC';
    jogo2.status='Concluido';
    jogo2.id=3;

    let jogo3 = new Jogo()
    jogo3.nome="Red Dead Redepmtion 2 - Complete Edition";
    jogo3.conquistas=true;
    jogo3._dataInicio=new Date();
    jogo3._dataFim=new Date();
    jogo3.plataforma='PC';
    jogo3.status='Concluido';
    jogo3.id=4

    this.gamelist.push(jogo);
    this.gamelist.push(jogo1);
    this.gamelist.push(jogo2);
    this.gamelist.push(jogo3);
    
    console.log(this.gamelist + " Lista iniciada para teste")
    localStorage.setItem(`gamelist`,JSON.stringify(this.gamelist))
    }
  }
}
