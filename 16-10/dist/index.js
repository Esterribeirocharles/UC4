"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Personagem_1 = require("./Personagem");
// const per:Personagem = new Personagem("Joaozinho", 20)
// console.log(per.vida) 
// per.curar()
// console.log(per.vida)  
// per.perderVida(10)
// console.log(per.vida)
const per = new Personagem_1.Personagem("Fulano", 7);
const per1 = new Personagem_1.Personagem("Ciclano", 6);
const per2 = new Personagem_1.Personagem("Beltrano", 8);
//string é um tipo. Logo, podemos criar um array deste tipo
const nomes = ["Leonardo", "Reul", "Mateus"];
// number é um tipo. Logo, também podemos criar um array deste tipo
const numeros = [99, 108., 59];
// Se "Personagem" também é o tipo não podemos também um array de personagens?
const personagens = [per, per1, per2];
per.curarOutroPersonagem(per2);
