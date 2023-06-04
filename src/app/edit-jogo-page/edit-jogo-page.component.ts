import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jogo } from '../model/jogo';

@Component({
  selector: 'app-edit-jogo-page',
  templateUrl: './edit-jogo-page.component.html',
  styleUrls: ['./edit-jogo-page.component.scss']
})
export class EditJogoPageComponent {

  idJogo!:number

  jogoEditar!:Jogo;

  constructor(private route:ActivatedRoute){
    console.log(this.route)

    this.idJogo = this.route.snapshot.params['id'];
    console.log(this.idJogo)
  }

  ngOnInit(){
    let gamelist:Array<Jogo>
    gamelist = JSON.parse(localStorage.getItem('gamelist')!);

    gamelist.forEach(item => {
      if(item.id==this.idJogo){
        this.jogoEditar=item;
      }
   });
  }
}
