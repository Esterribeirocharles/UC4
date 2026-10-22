// /*
// Crie a classe Carro
// Siga as instruções para criá-la usando de exemplo a classe Cachorro.

// O carro deve ter:
// marca,tipo,ano

// O que o carro faz:
// -ele anda
// -ele buzina

// Depois de criar a classe, crie 3 carros diferentes no 'index.ts, chame seus
// atributos em console.log e chame seus métodos.
// /*


export class Carro{
    // Atributos
    marca:string
    tipo:string
    ano:number


 constructor(minhaMarca:string, meuTipo:string,meuAno:number){
    this.marca = minhaMarca
    this.tipo = meuTipo
    this.ano = meuAno

    // Métodos
 }
anda():void{
   console.log(`${this.marca}: está andando!`) // console.log(`O carro da marca ${´)
}
buzina():void{
    console.log(`${this.tipo}:está buzinando!`)
}
}







