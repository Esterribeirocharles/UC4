import { Personagem } from "./Personagem";



export interface Curavel {
    curarAlvo(alvo: Personagem, quantidade: number): void;
}
