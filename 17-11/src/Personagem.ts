
export class Personagem {
    nome: string;

    private _vida: number;
    private _vidaMaxima: number;

    protected ataque: number;
    protected defesa: number;

    constructor(
        nome: string,
        vida: number,
        vidaMaxima: number,
        ataque: number,
        defesa: number
    ) {
        this.nome = nome;

        this._vidaMaxima = Math.max(1, vidaMaxima);
        this._vida = Math.min(
            Math.max(0, vida),
            this._vidaMaxima
        );

        this.ataque = Math.max(0, ataque);
        this.defesa = Math.max(0, defesa);
    }

    get vida(): number {
        return this._vida;
    }

    get vidaMaxima(): number {
        return this._vidaMaxima;
    }

    get ataqueAtual(): number {
        return this.ataque;
    }

    get defesaAtual(): number {
        return this.defesa;
    }

    receberDano(valor: number): void {
        if (!Number.isFinite(valor) || valor <= 0) {
            console.log("Valor de dano inválido!");
            return;
        }

        if (!this.estaVivo()) {
            console.log(this.nome + " já está derrotado!");
            return;
        }

        this._vida = Math.max(0, this._vida - valor);

        console.log(
            this.nome + " recebeu " + valor + " de dano!"
        );

        if (!this.estaVivo()) {
            console.log(this.nome + " foi derrotado!");
        }
    }

    curar(valor: number): void {
        if (!Number.isFinite(valor) || valor <= 0) {
            console.log("Valor de cura inválido!");
            return;
        }

        if (!this.estaVivo()) {
            console.log(
                this.nome + " está derrotado e não pode ser curado!"
            );
            return;
        }

        const vidaAnterior = this._vida;

        this._vida = Math.min(
            this._vidaMaxima,
            this._vida + valor
        );

        console.log(
            this.nome + " recuperou " +
            (this._vida - vidaAnterior) + " pontos de vida!"
        );
    }

    estaVivo(): boolean {
        return this._vida > 0;
    }

    atacar(alvo: Personagem): void {
        if (!this.estaVivo()) {
            console.log(
                this.nome + " está derrotado e não pode atacar!"
            );
            return;
        }

        if (!alvo.estaVivo() || alvo === this) {
            console.log("Alvo inválido para ataque!");
            return;
        }

        const dano = Math.max(
            1,
            this.ataque - alvo.defesaAtual
        );

        console.log(this.nome + " realizou um ataque comum!");

        alvo.receberDano(dano);
    }

    exibirStatus(): void {
        console.log("\n-----------------------------");
        console.log("Nome: " + this.nome);
        console.log("Vida: " + this.vida + "/" + this.vidaMaxima);
        console.log("Ataque: " + this.ataqueAtual);
        console.log("Defesa: " + this.defesaAtual);
        console.log(
            "Estado: " + (this.estaVivo() ? "Vivo" : "Derrotado")
        );
        console.log("-----------------------------");
    }
}
