import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Jogo } from '../model/jogo';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../environments/environment';
import { take } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JogosService {

  private readonly API = `${environment.API}games`

  constructor(private http:HttpClient) { 
  }

  save(_jogo:Jogo){
    return this.http.post(this.API,_jogo).pipe(take(1));
  }

  getJogos(): Observable<Jogo[]> {
    return this.http.get<Jogo[]>(this.API).pipe(take(1));
  }

  getJogobyId(idJogo:number):Observable<Jogo>{
    return this.http.get<Jogo>(`${this.API}/${idJogo}`).pipe(take(1));
  }

  update(_jogo:Jogo){
    return this.http.put(`${this.API}/${_jogo.id}`,_jogo).pipe(take(1));
  }

  delete(id:number){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
