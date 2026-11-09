import { Navio } from "./Navio";

export class Bergantim extends Navio {
    constructor(nome:string,capacidadeTripulacao:number,vida:number,velocidade:number){
        super(nome,capacidadeTripulacao,vida,velocidade,canhoes)
        this.verificaTripulacao
    }

    navegar():string {
        return `O bermantim ${this.nome}aproveita seus ventos favoráveis para navegar rapidamente.`
    }
    atacar():string {
        return `O bergantim ${this.nome} realiza uma sequencia rápida de disparos com seus ${this.canhoes}canhoes`
    }
    verificacaoTripulacao(): void{
        if(this.capacidadeTripulacao > 20)this.capacidadeTripulacao = 20
    }
}