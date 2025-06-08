import {GerarData} from "../PokeAPI/PokeData/PokedexInterativa.js";
import {PokemonsData} from "../PokeAPI/PokeData/PokeGeração.js"
import {Regioes, RegionalLista} from "../PokeAPI/PokeData/PokeRegional.js";
import {SalvarData, PegarData} from "../Utils/Pegar.js";
import {Nome} from "../Utils/Nome.js";
import {GeraçãoId} from "../Utils/Geração.js";

class ListaRegional{
  Nome;
  Img;
  Tipos;
  id;
  IdDiv;

  constructor(Data){
    this.Nome = Data.PokeName
    this.Img = Data.PokeList.sprites.front_default
    this.Tipos = Data.PokeList.types
    this.id = Data.PokeList.id 
    this.IdDiv = GeraçãoId()
  }
}

let Gerações = {}

export function GerarGerações(){
   if (!PegarData('Gens')) {
    for (let i = 1; i < 10; i++) {
      Gerações[`Gen_${i}`] = PokemonsData[`Gen${i}Data`].map(pokemon => new ListaRegional(pokemon))
    }
    SalvarData('Gens', Gerações)
  }
}

let Regional = {}

export function GerarRegioes(){
  if (!PegarData('Regioes')) {
    for (const NomeRegião of RegionalLista) {
      Regional[`Região${Nome(NomeRegião)}`] = Regioes[`${NomeRegião}Data`].map(pokemon => new ListaRegional(pokemon))
    }
  SalvarData('Regioes', Regional)
  }
}

class PokeInterativa{
  Nome;
  img;
  id;

  constructor(Data){
    this.Nome = Data.name
    this.id = Data.id
    this.img = Data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
  }
}

export async function GerarInfo(){
  const Data = await GerarData()
  const Info = new PokeInterativa(Data)
}