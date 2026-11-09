export class Mago {
  constructor(public nome: string) {}

  lancarMagia(): void {
    console.log(`${this.nome} lança uma bola de fogo!`);
  }
   atacar():void {
    console.log(`${this.nome} ataca co seu cajado!`)
   }
   curar(ValorCura:number): void {
    console.log(`${this.nome} cura ${valorCura} pontos de vida`)
   }
}
