import { Crocodilo } from "./Crocodilo";
import { Mamifero } from "./Mamifero";
import { Reptil } from "./Reptil";

// Criando objetos
const cachorro = new Mamifero("Rex", 5, true);
const cobra = new Reptil("Naja", 2, "escamas lisas");

cachorro.mover();      // herdado da classe Animal
cachorro.amamentar();  // método da classe Mamifero

cobra.mover();         // herdado da classe Animal
cobra.botarOvo();      // método da classe Reptil

crocodilo.mover();

const meuArray: Animal[] = [cachorro, cobra, crocodilo]

// criando um método

const crocodilo = new Reptil("luan",10, true);
const cobra = new Crocodilo ("Naja", 5, true);

crocodilo.mover()