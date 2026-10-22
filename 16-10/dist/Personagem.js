"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    // atributos
    nome;
    vida = 50;
    forca;
    constructor(nome, forca) {
        this.nome = nome;
        this.forca = forca;
    }
    curar() {
        if (this.vida > 100) {
            this.vida = 100;
        }
        this.vida += 10;
    }
    perderVida(dano) {
        this.vida -= dano;
        if (this.vida < 0) {
            this.vida = 0;
        }
    }
    curarOutroPersonagem(per) {
        per.vida += 10;
        if (per.vida > 100) {
            per.vida = 100;
        }
        console.log(`O personagem ${per.nome} foi curado ${this.nome}.`);
    }
}
exports.Personagem = Personagem;
