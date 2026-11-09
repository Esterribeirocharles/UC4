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

personagem1.setVida(30)
console.log(personagem1.getvida())





//crie uma classe chamada Cachorro
//coloque atributos no cachorro
//coloque oa atributos 'private'
//crie o constructor
//crie os métodos 'getters' e os 'setters
//crie 3 cachorros no index e chame seus métodos

const cachorro1:Cachorro = new Cachorro("Rex")
const cachorro2:Cachorro = new Cachorro("Alex")
const cachorro3:Cachorro = New Cachorro("Bob")