import {PokemonsData} from "../PokeAPI/PokeData/PokeGeração.js"
import {Regioes, RegionalLista} from "../PokeAPI/PokeData/PokeRegional.js";
import {SalvarData} from "../Utils/Pegar.js";
import {Nome} from "../Utils/Nome.js";
import {GeraçãoId} from "../Utils/Geração.js";

class ListaRegional{
  Nome;
  Img;
  Tipos;
  id;
  IdDiv;

  constructor(Data){
    this.Nome = Data.name
    this.Img = Data.sprites.front_default
    this.Tipos = Data.types
    this.id = Data.id 
    this.IdDiv = GeraçãoId()
  }
}

let Gerações = {}

export function GerarGerações(){
  for (let i = 1; i < 10; i++) {
    Gerações[`Gen_${i}`] = PokemonsData[`Gen${i}Data`].map(pokemon => new ListaRegional(pokemon))
  }
  SalvarData('Gens', Gerações)
}

let Regional = {}

export function GerarRegioes(){
  for (const NomeRegião of RegionalLista) {
    Regional[`Região${Nome(NomeRegião)}`] = Regioes[`${NomeRegião}Data`].map(pokemon => new ListaRegional(pokemon))
  }
  SalvarData('Regioes', Regional)
}