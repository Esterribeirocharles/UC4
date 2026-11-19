import { Menu } from "./Menu";
import { SistemaJornada } from "./SistemaJornada";



console.log("========================================");
console.log("     O SENHOR DOS MERCADOS II");
console.log("========================================");

console.log("\nA Sociedade precisa salvar o Cupom Único!");
console.log("Prepare-se para enfrentar as duas redes!");

const jornada = new SistemaJornada();

const menu = new Menu(jornada);

menu.iniciar();
