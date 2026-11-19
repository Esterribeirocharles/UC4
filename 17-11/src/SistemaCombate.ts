
import readlineSync from "readline-sync";
import { Curavel } from "./Curavel";
import { Personagem } from "./Personagem";
import { Equipavel } from "./Equipavel";
import { HabilidadeEspecial } from "./HabilidadeEspecial";
import { Inimigo } from "./Inimigo";
import { Guerreiro } from "./Guerreiro";
import { Arqueiro } from "./Arqueiro";
import { Guardiao } from "./Guardiao";
import { Curandeiro } from "./Curandeiro";


export type ResultadoCombate = "vitoria" | "derrota" | "fuga";

export class SistemaCombate {

    private aplicarCura(
        curador: Curavel,
        alvo: Personagem,
        quantidade: number
    ): void {
        curador.curarAlvo(alvo, quantidade);
    }

    private equiparItem(
        personagem: Equipavel,
        item: string
    ): void {
        personagem.equipar(item);
    }

    private usarHabilidade(
        personagem: HabilidadeEspecial,
        alvo: Personagem
    ): void {
        personagem.usarHabilidade(alvo);
    }

    lutar(
        heroi: Personagem,
        inimigo: Inimigo
    ): ResultadoCombate {

        console.log("\n================================");
        console.log("        INÍCIO DO COMBATE");
        console.log("================================");

        console.log(inimigo.nome + " apareceu!");

        while (heroi.estaVivo() && inimigo.estaVivo()) {

            console.log("\n===== TURNO DO JOGADOR =====");

            console.log(
                heroi.nome + ": " +
                heroi.vida + "/" + heroi.vidaMaxima + " de vida"
            );

            console.log(
                inimigo.nome + ": " +
                inimigo.vida + "/" + inimigo.vidaMaxima + " de vida"
            );

            console.log("\n1 - Atacar");
            console.log("2 - Habilidade especial");
            console.log("3 - Curar");
            console.log("4 - Equipar item");
            console.log("5 - Ver status");
            console.log("0 - Fugir");

            const opcao = readlineSync.question("Escolha sua ação: ");

            let realizouAcao = false;

            switch (opcao) {

                case "1":
                    heroi.atacar(inimigo);
                    realizouAcao = true;
                    break;

                case "2":
                    if (
                        heroi instanceof Guerreiro ||
                        heroi instanceof Arqueiro ||
                        heroi instanceof Guardiao ||
                        heroi instanceof Curandeiro
                    ) {
                        this.usarHabilidade(heroi, inimigo);
                        realizouAcao = true;
                    } else {
                        console.log("Este personagem não possui habilidade especial!");
                    }
                    break;

                case "3":
                    if (
                        heroi instanceof Curandeiro ||
                        heroi instanceof Guardiao
                    ) {
                        this.aplicarCura(heroi, heroi, 18);
                        realizouAcao = true;
                    } else {
                        console.log("Este personagem não possui habilidade de cura!");
                    }
                    break;

                case "4":
                    if (
                        heroi instanceof Guerreiro ||
                        heroi instanceof Arqueiro ||
                        heroi instanceof Curandeiro
                    ) {
                        const item = readlineSync.question(
                            "Digite o nome do equipamento: "
                        );

                        this.equiparItem(heroi, item);
                        realizouAcao = true;
                    } else {
                        console.log("Este personagem não pode equipar itens!");
                    }
                    break;

                case "5":
                    heroi.exibirStatus();
                    inimigo.exibirStatus();
                    break;

                case "0":
                    console.log("Você fugiu do combate!");
                    return "fuga";

                default:
                    console.log("Opção inválida!");
            }

            // O inimigo só contra-ataca depois de uma ação válida.
            if (
                realizouAcao &&
                heroi.estaVivo() &&
                inimigo.estaVivo()
            ) {
                console.log("\n===== TURNO DO INIMIGO =====");
                inimigo.atacar(heroi);
            }
        }

        if (heroi.estaVivo() && !inimigo.estaVivo()) {
            console.log("\n*** VITÓRIA! ***");
            console.log("Você derrotou " + inimigo.nome + "!");
            return "vitoria";
        }

        console.log("\n*** DERROTA! ***");
        console.log(heroi.nome + " não conseguiu vencer!");
        return "derrota";
    }
}
