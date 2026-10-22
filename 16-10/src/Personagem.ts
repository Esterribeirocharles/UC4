export class Personagem {
    // atributos
    nome:string
    vida:number = 50
    forca:number

    constructor(nome:string, forca:number) {
        this.nome = nome
        this.forca = forca
    }

    curar():void {
        if(this.vida > 100){
            this.vida = 100
        }
        this.vida += 10
    }

    perderVida(dano:number):void{
        this.vida -= dano
        if (this.vida < 0){
            this.vida =0
        }
    }
    curarOutroPersonagem(per:Personagem){
        per.vida += 10
        if (per.vida > 100){
            per.vida = 100
        }
        console.log(`O personagem ${per.nome} foi curado ${this.nome}.
            \nvida de ${per.nome}: ${per.vida}.`)
    }

// crie um método chamado atacar que faça um personagem tirar vida do outro



    atacar(per:Personagem):void{
        //MOdifique o método 'atacar' da classe Personagem para usar o dano da arma
per.vida -= this.forca

 if(per.vida < 0){
    per.vida = 0
 }

 console.log(`O personagem ${per.nome} foi atacado por ${this.nome}.
            \nvida de ${per.nome}: ${per.vida}.`)
    
 }
 
 
 }
 //1)
 // crie uma nova classe  chamada Arma
 // arma deve ter nome e ataque
 // não esqueça do construtor

 //2)
 //Dentro da classe personagem, crie o atributo arma (tipo Arma)
 //chama ele no construtor de personagem também

 //3)
 //Modifique o método 'atacar' da classe Personagem para usar o dano da arma








 
