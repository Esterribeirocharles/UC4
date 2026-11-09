import { Mamifero } from "./Mamifero";
// usando a palavra 'extends',
//informamos que a classe cachorro herda da classe mamifero.
export class Cachorro extends Mamifero{

raca:string

constructor(raca:string, nome:string, patas:number, pelo:string){
  //super vem de 'superclasses', que é a classe pai
  //super() nada mais é do que o construtor da classe pai
  super(raca, patas, pelo);
  this.raca =raca
}

correr():void{
    console.log(`${this.getNome()} está correndo com suas ${this.patas}!`)
}

}