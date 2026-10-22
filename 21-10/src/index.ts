//Criem uma classe personagem que tenha:
//nome
//vida
//dinheiro

import { Personagem } from "./Personagem";

const personagem:Personagem = new Personagem("zezinho", 20, 100)
const personagem1:Personagem = new Personagem("carlinhos", 10, 50)

personagem.setNome("Betinho")
console.log(personagem.getNome())

personagem.setDinheiro(100)
console.log(personagem.getDinheiro())














//crie uma classe chamada Cachorro
//coloque atributos no cachorro
//coloque oa atributos 'private'
//crie o constructor
//crie os métodos 'getters' e os 'setters
//crie 3 cachorros no index e chame seus métodos