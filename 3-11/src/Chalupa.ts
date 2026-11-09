export class Chalupa extends Navio {
    constructor(nome:string, capacidadeTripacao:number =25,velocidade:number = 150, canhoes = 10){
        super(nome, capacidadeTripacao, Vida, velocidade, canhoes)
        this.verificacaoTripulacao()
    }

    navegar():string {
        return `A chalupa ${this.nome}utiliza sua agilidade para realizar masnobras rápidas.`
    }
    atacar():string {
        return `A chalupa ${this.nome} dispara seus ${this.canhoes} canhoes e tenta escapar rapidamente`
    }
    Private verificaTripulaçao(): void {
        if (this.capacidadeTripulacao >10) this.capacidadeTripulacao =10
        if(this.capacidadeTripulacao <0)this.capacidadeTripulacao = 10
    }
    explorarIlha():string{
        return `A tripulacao do ${this.nome}está explorando uma ilha em busca do tesouro.`
    }
}