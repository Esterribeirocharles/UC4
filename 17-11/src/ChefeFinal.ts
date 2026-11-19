
import { Inimigo } from "./Inimigo";
import { Personagem } from "./Personagem";

export class ChefeFinal extends Inimigo {

    constructor() {
        super(
            "Balrog do Boleto",
            110,
            22,
            8
        );
    }

    override atacar(alvo: Personagem): void {
        if (!this.estaVivo()) {
            console.log(this.nome + " está derrotado!");
            return;
        }

        console.log("\n☠ BALROG DO BOLETO:");
        console.log("VOCÊ NÃO VAI PARCELAR!");

        super.atacar(alvo);
    }
}
