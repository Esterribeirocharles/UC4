
import readlineSync from "readline-sync";



import { SistemaJornada } from "./SistemaJornada";
import { Personagem } from "./Personagem";
import { Guerreiro } from "./Guerreiro";
import { Curandeiro } from "./Curandeiro";
import { Guardiao } from "./Guardiao";
import { Arqueiro } from "./Arqueiro";

export function criarSociedade(): Personagem[] {

    return [

        new Guerreiro(
            "Seu Zé",
            100,
            100,
            20,
            8
        ),

        new Curandeiro(
            "Fredo",
            85,
            85,
            14,
            6
        ),

        new Guardiao(
            "Samuel",
            120,
            120,
            16,
            12
        ),

        new Arqueiro(
            "Diegolas",
            90,
            90,
            19,
            5
        )
    ];
}

export class Menu {

    private sociedade: Personagem[];

    private heroiEscolhido: Personagem | null = null;

    private jornada: SistemaJornada;

    constructor(jornada: SistemaJornada) {

        this.sociedade = criarSociedade();

        this.jornada = jornada;
    }

    listarSociedade(): void {

        console.log("\n================================");
        console.log("         SOCIEDADE");
        console.log("================================");

        this.sociedade.forEach((personagem, indice) => {

            console.log("\n" + (indice + 1) + " - " + personagem.nome);

            if (personagem instanceof Guerreiro) {
                console.log("Classe: Guerreiro");
                console.log("Força extra: " + personagem.forcaExtra);
            } else if (personagem instanceof Arqueiro) {
                console.log("Classe: Arqueiro");
                console.log("Precisão: " + personagem.precisao);
            } else if (personagem instanceof Guardiao) {
                console.log("Classe: Guardião");
                console.log("Proteção extra: " + personagem.protecaoExtra);
            } else if (personagem instanceof Curandeiro) {
                console.log("Classe: Curandeiro");
            }

            personagem.exibirStatus();
        });
    }

    escolherHeroi(): void {

        this.listarSociedade();

        const escolha = Number(
            readlineSync.question("\nEscolha seu herói: ")
        );

        if (
            !Number.isInteger(escolha) ||
            escolha < 1 ||
            escolha > this.sociedade.length
        ) {
            console.log("Escolha inválida!");
            return;
        }

        const personagem = this.sociedade[escolha - 1];

        if (!personagem.estaVivo()) {
            console.log("Este herói está derrotado!");
            return;
        }

        this.heroiEscolhido = personagem;

        console.log(
            "\n" + personagem.nome + " foi escolhido para a aventura!"
        );
    }

    enfrentarInimigo(): void {

        if (this.heroiEscolhido === null) {
            console.log("Primeiro escolha um herói!");
            return;
        }

        if (!this.heroiEscolhido.estaVivo()) {
            console.log("Este herói está derrotado!");
            this.heroiEscolhido = null;
            return;
        }

        if (this.jornada.terminou()) {
            console.log("Você já concluiu todos os confrontos!");
            return;
        }

        const resultado = this.jornada.iniciarProximoConfronto(
            this.heroiEscolhido
        );

        if (resultado === "derrota") {
            this.heroiEscolhido = null;

            console.log(
                "Escolha outro herói para continuar a jornada."
            );
        }

        if (resultado === "vitoria" && this.jornada.terminou()) {
            this.encerrarAventura();
        }
    }

    consultarStatus(): void {

        if (this.heroiEscolhido === null) {
            console.log("Nenhum herói foi escolhido!");
            return;
        }

        this.heroiEscolhido.exibirStatus();
    }

    encerrarAventura(): void {

        console.log("\n================================");
        console.log("       FIM DA AVENTURA");
        console.log("================================");

        console.log("O Balrog do Boleto foi derrotado!");
        console.log("A Sociedade salvou a Terra dos Mercados!");
        console.log("O Cupom Único está protegido!");

        console.log("\nRESULTADO FINAL");
        console.log("Confrontos vencidos: 3/3");
        console.log("Herói vencedor: " + this.heroiEscolhido?.nome);

        console.log("\nPARABÉNS, AVENTUREIRO!");
    }

    reiniciarAventura(): void {

        const resposta = readlineSync.question(
            "Deseja realmente reiniciar? (s/n): "
        );

        if (resposta.toLowerCase() !== "s") {
            console.log("Reinício cancelado.");
            return;
        }

        this.sociedade = criarSociedade();

        this.heroiEscolhido = null;

        this.jornada.reiniciar();

        console.log("\nA aventura foi reiniciada!");
    }

    iniciar(): void {

        let opcao: string;

        do {

            console.log("\n================================");
            console.log("   O SENHOR DOS MERCADOS II");
            console.log("================================");

            console.log("1 - Ver Sociedade");
            console.log("2 - Escolher herói");
            console.log("3 - Enfrentar inimigo");
            console.log("4 - Ver jornada");
            console.log("5 - Consultar status do herói");
            console.log("6 - Reiniciar aventura");
            console.log("0 - Sair");

            opcao = readlineSync.question("\nEscolha: ");

            switch (opcao) {

                case "1":
                    this.listarSociedade();
                    break;

                case "2":
                    this.escolherHeroi();
                    break;

                case "3":
                    this.enfrentarInimigo();
                    break;

                case "4":
                    this.jornada.mostrarProgresso();
                    break;

                case "5":
                    this.consultarStatus();
                    break;

                case "6":
                    this.reiniciarAventura();
                    break;

                case "0":
                    console.log("\nObrigado por jogar!");
                    console.log("Até a próxima aventura!");
                    break;

                default:
                    console.log("Opção inválida! Tente novamente.");
            }

        } while (opcao !== "0");
    }
}
