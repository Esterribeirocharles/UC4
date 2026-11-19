import { Personagem } from "./Personagem";



export interface HabilidadeEspecial {
    usarHabilidade(alvo: Personagem): void;
}
