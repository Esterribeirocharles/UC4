// como exportamos a classe, nós agora podemos importá-la
import { Cachorro } from "./Cahorro";
import { Carro } from "./Carro";



// para criar um objeto,criamos uma variável que deve ser o tipo da classe(cachorro)
//depois,usamos a palavra 'new para criar um novo Cachorro
//dentro dos parêntes, precisamos colocar todas as informações que o construtor pede
const meuCacchorro:Cachorro = new Cachorro("Tobby", 10.50, "vira-lata")

// agora, podemos acessar as informações do cachorro.Por exemplo,para ver o nome:
 console.log(meuCacchorro.nome)
 console.log(meuCacchorro.raca)

 //posso também chamar os métodos para ver o cachorro faz:
  meuCacchorro.latir()

  const meuCarro:Carro = new Carro("Chevrolet","onix" ,1992)
  const outroCarro:Carro