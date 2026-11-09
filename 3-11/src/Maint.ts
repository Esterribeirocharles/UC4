import { Bergantim } from "./Bergantim";
import { Chalupa } from "./Chalupa";
import { Galeao } from "./Galeao";



const bergantim:Bergantim = new Bergantim("Santa Maria", 99)
const chalupa:Chalupa = new Chalupa("Krackenzinho",9)
const galeao:Galeao = new Galeao("El Barco", 50)

console.log(bergantim>exibirInformacoes())
console.log(chalupa.exibirInformacoes())
console.log(Galeao.exibirInformacoes())

console.log(chalupa.navegar())
console.log(chalupa.atacar())

console.log(bergantim.navegar())
console.log(bergantim.atacar())

console.log(galeao.navegar())
console.log(galeao.atacar())

chalupa.receberDano(5)
bergantim.receberDano(10)
galeao.receberDano(12)

console.log(chalupa.exibirInformacoes())
console.log(bergantim.exibirInformacoes())
console.log(galeao.exibirInformacoes())

console.log(chalupa.explorarIlha)

galeao.repararNavio()
console.log(galeao.exibirInformacoes())

const armada:Navio[] = new Navio[bergantim,chalupa, galeao new bergantim("San José" ,20)]

armada.forEach((navio) =>  {
    navio.navegar(
    navio.atacar()
    navio.exibirInformacoes()
    navio.receberDano(10)
    console.log(navio.exibirInformacoes())
    )
})