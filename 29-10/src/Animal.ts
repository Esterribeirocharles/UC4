export class Animal {
    protected nome: string

    constructor(nome:string){
        this.nome = nome
    }
    fazerSom(): void {
        console.log("o animal esta fazendo um som")
    }
}