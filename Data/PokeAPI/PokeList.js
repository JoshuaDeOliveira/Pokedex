import {PokemonsData} from "./PokeData.js"

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

export const Gerações = {
  PrimeiraGeração: PokemonsData.Gen1Data.map(pokemon => new ListaRegional(pokemon)),
  SegundaGeração: PokemonsData.Gen2Data.map(pokemon => new ListaRegional(pokemon)),
}


