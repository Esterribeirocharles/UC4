"use strict";
//Criem uma classe personagem que tenha:
//nome
//vida
//dinheiro
Object.defineProperty(exports, "__esModule", { value: true });
const Personagem_1 = require("./Personagem");
const personagem = new Personagem_1.Personagem("zezinho", 20, 100);
const personagem1 = new Personagem_1.Personagem("carlinhos", 10, 50);
personagem.setNome("Betinho");
console.log(personagem.getNome());
personagem.setDinheiro(100);
console.log(personagem.getDinheiro());
//crie uma classe chamada Cachorro
//coloque atributos no cachorro
//coloque oa atributos 'private'
//crie o constructor
//crie os métodos 'getters' e os 'setters
//crie 3 cachorros no index e chame seus métodos
