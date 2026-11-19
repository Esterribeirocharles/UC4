


import { ChefeFinal } from "./ChefeFinal";
import { FiscalPrecos } from "./FiscalPrecos";
import { Inimigo } from "./Inimigo";
import { OperadorOfertas } from "./OperadorOfertas";
import { Personagem } from "./Personagem";
import {
    SistemaCombate,
    ResultadoCombate
} from "./SistemaCombate";

export class SistemaJornada {

    private etapaAtual: number = 0;

    private combate: SistemaCombate = new SistemaCombate();

    private criarInimigo(): Inimigo | null {

        switch (this.etapaAtual) {

            case 0:
                return new FiscalPrecos();

            case 1:
                return new OperadorOfertas();

            case 2:
                return new ChefeFinal();

            default:
                return null;
        }
    }

    iniciarProximoConfronto(
        heroi: Personagem
    ): ResultadoCombate | "concluida" {

        if (this.terminou()) {
            console.log("A jornada já foi concluída!");
            return "concluida";
        }

        const inimigo = this.criarInimigo();

        if (inimigo === null) {
            return "concluida";
        }

        console.log("\n================================");
        console.log("        NOVO CONFRONTO");
        console.log("================================");

        console.log("Etapa: " + (this.etapaAtual + 1) + "/3");
        console.log("Inimigo: " + inimigo.nome);

        const resultado = this.combate.lutar(heroi, inimigo);

        if (resultado === "vitoria") {
            this.etapaAtual++;

            console.log("\nConfronto concluído!");

            if (this.terminou()) {
                console.log("Você venceu todos os inimigos!");
            } else {
                console.log("O próximo confronto foi desbloqueado!");
            }
        }

        return resultado;
    }

    mostrarProgresso(): void {

        console.log("\n===== PROGRESSO DA JORNADA =====");

        console.log(
            "Confrontos concluídos: " +
            this.etapaAtual + "/3"
        );

        if (this.etapaAtual === 0) {
            console.log("Próximo inimigo: Fiscal de Preços");
        } else if (this.etapaAtual === 1) {
            console.log("Próximo inimigo: Operador de Ofertas");
        } else if (this.etapaAtual === 2) {
            console.log("Próximo inimigo: Balrog do Boleto");
        } else {
            console.log("Aventura concluída!");
        }
    }

    terminou(): boolean {
        return this.etapaAtual >= 3;
    }

    reiniciar(): void {
        this.etapaAtual = 0;
    }
}
