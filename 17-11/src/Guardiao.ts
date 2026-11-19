import { Curavel } from "./Curavel";
import { HabilidadeEspecial } from "./HabilidadeEspecial";
import { Personagem } from "./Personagem";



export class Guardiao extends Personagem
    implements Curavel, HabilidadeEspecial {

    protecaoExtra: number;

    constructor(
        nome: string,
        vida: number,
        vidaMaxima: number,
        ataque: number,
        defesa: number
    ) {
        super(nome, vida, vidaMaxima, ataque, defesa);
        this.protecaoExtra = 5;
    }

    override atacar(alvo: Personagem): void {
        if (!this.estaVivo() || !alvo.estaVivo() || alvo === this) {
            console.log("Não é possível realizar esse ataque!");
            return;
        }

        const dano = Math.max(
            1,
            this.ataque + this.protecaoExtra - alvo.defesaAtual
        );

        console.log(this.nome + " atacou com o Escudo do Rancho!");

        alvo.receberDano(dano);
    }

    override receberDano(valor: number): void {
        if (!Number.isFinite(valor) || valor <= 0) {
            console.log("Valor de dano inválido!");
            return;
        }

        if (!this.estaVivo()) {
            console.log(this.nome + " já está derrotado!");
            return;
        }

        const danoReduzido = Math.max(
            0,
            valor - this.protecaoExtra
        );

        if (danoReduzido === 0) {
            console.log(this.nome + " bloqueou o dano com seu escudo!");
            return;
        }

        console.log(this.nome + " reduziu o dano com sua proteção!");

        super.receberDano(danoReduzido);
    }

    curarAlvo(alvo: Personagem, quantidade: number): void {
        if (!this.estaVivo()) {
            console.log(this.nome + " não pode curar porque está derrotado!");
            return;
        }

        alvo.curar(quantidade);
    }

    usarHabilidade(alvo: Personagem): void {
        if (!this.estaVivo()) {
            console.log(this.nome + " não pode usar habilidade!");
            return;
        }

        console.log(this.nome + " usou ESCUDO DA RESISTÊNCIA!");

        this.curar(15);
    }
}
