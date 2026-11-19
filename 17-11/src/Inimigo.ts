
import { Personagem } from "./Personagem";

export class Inimigo extends Personagem {

    constructor(
        nome: string,
        vida: number,
        ataque: number,
        defesa: number
    ) {
        super(nome, vida, vida, ataque, defesa);
    }

    override atacar(alvo: Personagem): void {
        if (!this.estaVivo()) {
            console.log(this.nome + " está derrotado e não pode atacar!");
            return;
        }

        if (!alvo.estaVivo() || alvo === this) {
            console.log("Alvo inválido!");
            return;
        }

        const dano = Math.max(
            1,
            this.ataqueAtual - alvo.defesaAtual
        );

        console.log(this.nome + " contra-atacou!");

        alvo.receberDano(dano);
    }
}
