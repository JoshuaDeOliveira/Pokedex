import {PokemonsData} from "../PokeAPI/PokeData/PokeGeração.js"
import {SalvarData} from "../Utils/Pegar.js";

class ListaRegional{
  Nome;
  Img;
  Tipos;
  id;

  constructor(Data){
    this.Nome = Data.name
    this.Img = Data.sprites.front_default
    this.Tipos = Data.types
    this.id = Data.id 
  }
}

let Gerações = {}

export function GerarGerações(){
  for (let i = 1; i < 10; i++) {
    Gerações[`Gen_${i}`] = PokemonsData[`Gen${i}Data`].map(pokemon => new ListaRegional(pokemon))
  }
  SalvarData('Gens', Gerações)
}