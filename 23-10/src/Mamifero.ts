export class Mamifero{
      private nome:string
      protected patas:number
      private pelo:string


  constructor(nome:string, patas:number, pelo:string){
         this.nome = nome
         this.patas = patas
         this.pelo = pelo    
 }     
fazerSom():void {
    console.log(`${this.nome} está fazendo barulho`)
}
getNome():string{
    return this.nome
}

setNome(novoNome:string):void{
    this.nome
}
}
     
// private -> só a própria classe pode acessar diretamente usando 'this.atributos'.O restante precisa usar ' getAtributo' ou setAtributo'
// public -> qualquer um acessa e modifica diretamente.Não precisa de getters ou setters
// protected -> tanto a classe pai quanto as classes filhas podem acessar diretamente.O restante precisa usar 'getAtributo' ou setAtributo'.