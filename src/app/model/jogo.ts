export class Jogo{
    id?:number
    nome?:string;
    plataforma?:string;
    status?:string;
    conquistas?:boolean;
    dataInicio:Date;
    dataFim:Date;

    constructor(){
        this.dataInicio = new Date()
        this.dataFim = new Date()
    }
}