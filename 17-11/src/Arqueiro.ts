import { Equipavel } from "./Equipavel";
import { HabilidadeEspecial } from "./HabilidadeEspecial";
import { Personagem } from "./Personagem";



export class Arqueiro extends Personagem
    implements Equipavel, HabilidadeEspecial {

    precisao: number;

    constructor(
        nome: string,
        vida: number,
        vidaMaxima: number,
        ataque: number,
        defesa: number
    ) {
        super(nome, vida, vidaMaxima, ataque, defesa);
        this.precisao = 7;
    }

    override atacar(alvo: Personagem): void {
        if (!this.estaVivo() || !alvo.estaVivo() || alvo === this) {
            console.log("Não é possível realizar esse ataque!");
            return;
        }

        const dano = Math.max(
            1,
            this.ataque + this.precisao - alvo.defesaAtual
        );

        console.log(this.nome + " disparou uma Baguete Élfica!");

        alvo.receberDano(dano);
    }

    equipar(item: string): void {
        console.log(this.nome + " equipou: " + item);
    }

    usarHabilidade(alvo: Personagem): void {
        if (!this.estaVivo() || !alvo.estaVivo() || alvo === this) {
            console.log("Não é possível usar essa habilidade!");
            return;
        }

        const dano = Math.max(
            1,
            this.ataque + this.precisao + 10 - alvo.defesaAtual
        );

        console.log(this.nome + " usou FLECHA DO CUPOM DOURADO!");

        alvo.receberDano(dano);
    }
}
