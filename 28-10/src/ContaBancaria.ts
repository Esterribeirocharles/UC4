export class ContaBancaria{
    private saldo: number

    constructor(saldo: number){
        this.saldo = saldo
    }

    public consultorSaldo(): void{
       console.log(`Saldo: R$ ${this.saldo,toFixed(2)}`)

    }

    public deposuitar( valor:number): void{
        if (valor > 0){
            this.saldo +=
        }
    }
}

// exercício 3

