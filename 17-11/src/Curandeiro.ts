import { Curavel } from "./Curavel";
import { Equipavel } from "./Equipavel";
import { HabilidadeEspecial } from "./HabilidadeEspecial";
import { Personagem } from "./Personagem";


export class Curandeiro extends Personagem
    implements Curavel, Equipavel, HabilidadeEspecial {

    constructor(
        nome: string,
        vida: number,
        vidaMaxima: number,
        ataque: number,
        defesa: number
    ) {
        super(nome, vida, vidaMaxima, ataque, defesa);
    }

    curarAlvo(alvo: Personagem, quantidade: number): void {
        if (!this.estaVivo()) {
            console.log(this.nome + " não pode curar porque está derrotado!");
            return;
        }

        console.log(this.nome + " lançou uma cura!");

        alvo.curar(quantidade);
    }

    equipar(item: string): void {
        console.log(this.nome + " equipou: " + item);
    }

    usarHabilidade(alvo: Personagem): void {
        if (!this.estaVivo()) {
            console.log(this.nome + " não pode usar habilidade!");
            return;
        }

        console.log(this.nome + " usou CURA MILAGROSA!");

        this.curar(20);
    }
}
