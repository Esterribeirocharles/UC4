"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
const Mamifero_1 = require("./Mamifero");
// usando a palavra 'extends',
//informamos que a classe cachorro herda da classe mamifero.
class Cachorro extends Mamifero_1.Mamifero {
    raca;
    constructor(raca, nome, patas, pelo) {
        //super vem de 'superclasses', que é a classe pai
        //super() nada mais é do que o construtor da classe pai
        super(raca, patas, pelo);
        this.raca = raca;
    }
}
exports.Cachorro = Cachorro;
