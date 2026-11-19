import { Equipavel } from "./Equipavel";
import { HabilidadeEspecial } from "./HabilidadeEspecial";
import { Personagem } from "./Personagem";



export class Guerreiro extends Personagem
    implements Equipavel, HabilidadeEspecial {

    forcaExtra: number;

    constructor(
        nome: string,
        vida: number,
        vidaMaxima: number,
        ataque: number,
        defesa: number
    ) {
        super(nome, vida, vidaMaxima, ataque, defesa);
        this.forcaExtra = 5;
    }

    override atacar(alvo: Personagem): void {
        if (!this.estaVivo() || !alvo.estaVivo() || alvo === this) {
            console.log("Não é possível realizar esse ataque!");
            return;
        }

        const dano = Math.max(
            1,
            this.ataque + this.forcaExtra - alvo.defesaAtual
        );

        console.log(this.nome + " atacou com o Facão de Cortar Salame!");

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
            this.ataque + this.forcaExtra + 8 - alvo.defesaAtual
        );

        console.log(this.nome + " usou GOLPE DO AÇOUGUEIRO!");

        alvo.receberDano(dano);
    }
}
