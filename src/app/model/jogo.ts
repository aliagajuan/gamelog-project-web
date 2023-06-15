export class Jogo{
    id?:number
    nome?:string;
    plataforma?:string;
    status?:string;
    conquistas?:boolean;
    _dataInicio:Date;
    _dataFim:Date;

    constructor(){
        this._dataInicio = new Date()
        this._dataFim = new Date()
    }


    set dataInicio(date:Date){
        this._dataInicio = date
    }

    set dataFim(date:Date){
        this._dataFim = date
    }
}