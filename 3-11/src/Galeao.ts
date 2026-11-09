export class galeao extends Navio {
    constructor(nome:string,capacidadeTripulacao:number){
        super(nome, capacidadeTripulacao,200, 50,50)
        this.verificaTripulaçao()
    }

    navegar():string {
        return `O galeão ${this.nome} avança lentamente pelo mar`
    }
    atacar():string {
        return `O galeão ${this,nome} dispara uma poderosa salva com seus ${this.canhoes} canhoes`
    }
    private verificaTripulacao(): void {
        if (this.capacidadeTripulacao > 50) this.capacidadeTripulacao = 50
        if (this.capacidadeTripulacao < 0)this.capacidadeTripulacao = 0
    }
    repararNavio():void {
        this.vida +=10
        if (this.vida > 200) this.vida =200
    }
}