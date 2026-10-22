import { Poder } from "./Poder"

  export class Pokemon{
// atributos
    nome:string
    ataque:number
    vida:number = 50
    poder:Poder
    constructor (nome:string, vida:number, ataque:number, poder:Poder){
        this.nome = nome
        this.ataque = ataque
        this.vida = vida
        this.poder= poder
    }
   
    falar(){
        console.log(`${this.nome}`.repeat(3))
    }

    atacar(poke.Pokemon):void{
        poke.vida -= this.ataque
        if(poke.vida < o){
            poke.vida = 0
        }
       console.log(`${this.nome} atacou ${poke.nome} e perdeu ${this.ataque} de vida!`)    
    }
  atacarComPoder(poke2:Pokemon): void{
  poke2.vida -= this.ataque
if(poke.vida < o){
  poke.vida=0  

  this.verificarvida(poke2)

  }
  console.log(`${this.nome}atacou ${poke2.nome} e perdeu ${this.ataque} de vida!`)
 }

 //quando temos um código que se repete podemos criar uma função
 verificar(poke:Pokemon):void{
    if (poke.vida < 0){
        poke.vida = 0
    }
   if(poke.vida > 100){
      poke.vida = 100
   }
 }
  }

// Encapsulamento
// Encapsulamento é o ato de proteger os nossos dados (tanto os atributos quanto os métodos) e controlar como podem ser acessados ou modificados.

// Exemplo: usando encapsulamento, podemos impedir que alguém deixe a vida do pokémon negativa.
// Para utilizar encapsulamento nas nossas classes, precisamos colocar certas palavras antes dos atributos e antes dos métodos. São elas:
  // -public (que significa 'público')
  // - public( que significa 'privado')
  // - protected (que significa ' protegido')
  // chamamos estes três de modificadores de acesso. O 'public' permite que o atributo ou método seja acessado e modificado em qualquer arquivo
// do meu programa DIRETAMENTE.
// Exemplo:
// Na classe -> public vida : number
// No index: -> pokemon.vida = -999
// O 'privare' Não permite que o atributo ou método seja acessado e modificado de qualquer jeito.Para poder fazer isso, precisamos chamar os métodos da classe.


// */


  
