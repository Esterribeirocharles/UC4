export class Navio {
    nome: string;
    capacidadeTripulacao:number;
    vida:number;
    velocidade:number;
    canhoes: number;

    constructor(nome: string,capacidadeTripulacao:number,vida:number=50,velocidade:number=100,Canhoes:number=20){
        this.nome = nome;
        this.capacidadeTripulacao = capacidadeTripulacao;
        this.vida = vida;
        this.velocidade = velocidade;
        this.canhoes = this.canhoes;
    }
    public navegar (): string {
     return `O navio ${this.nome} está navegando`
    }

    public atacar(): string{
        return `O navio ${this.nome} está atacando co seus ${this.canhoes}`
    }

    public receberDano(dano: number): void{
        this.vida = - dano;
        if(this.vida < o) {
            this.vida = 0
        }
    exibirInformacoes():string{
        return `Nome: ${this.nome}Tripulação : ${this.capacidadeTripulacao}
        Vida: ${this.vida}
        velocidade: ${this.velocidade}
        Canhões: ${this.canhoes}`
    }
        

     }

    }
       
