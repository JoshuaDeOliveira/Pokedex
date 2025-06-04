import {PokemonsData} from "./PokeData/PokeGeração.js"
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

const Gerações = {
  PrimeiraGeração: PokemonsData.Gen1Data.map(pokemon => new ListaRegional(pokemon)),
  SegundaGeração: PokemonsData.Gen2Data.map(pokemon => new ListaRegional(pokemon)),
  TerceiraGeração: PokemonsData.Gen3Data.map(pokemon => new ListaRegional(pokemon)),
  QuartaGeração: PokemonsData.Gen4Data.map(pokemon => new ListaRegional(pokemon)),
  QuintaGeração: PokemonsData.Gen5Data.map(pokemon => new ListaRegional(pokemon)),
  SextaGeração: PokemonsData.Gen6Data.map(pokemon => new ListaRegional(pokemon)),
  SetimaGeração: PokemonsData.Gen7Data.map(pokemon => new ListaRegional(pokemon)),
  OitavaGeração: PokemonsData.Gen8Data.map(pokemon => new ListaRegional(pokemon)),
  NonaGeração: PokemonsData.Gen9Data.map(pokemon => new ListaRegional(pokemon))
}

SalvarData('Gens', Gerações)


