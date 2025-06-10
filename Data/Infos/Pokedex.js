import {GerarInfo} from "../PokeAPI/PokeList.js";
import {ContadorDeId} from "../Utils/CalculoUtils.js";

const Inserir = document.querySelector('.Informações')
let Gerar = ContadorDeId()

export function RunPokedex(){
  PokemonEscolhido()

  document.querySelector('.Next').addEventListener('click', async () => {
    await PokemonEscolhido('Next')
  })

  document.querySelector('.Previous').addEventListener('click', async () => {
    await PokemonEscolhido('Previous')
  })

  document.querySelector('.btn-pesquisar').addEventListener('click', async () => {
    PesquisarPokemon()
  })

  addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      PesquisarPokemon()
    }
  })
}

async function PesquisarPokemon(){
  const Pesquisa = document.querySelector('.Pesquisar-Pokemon').value.toLowerCase()
  if (Pesquisa == '' || undefined) {
    PokemonEscolhido(undefined, 1)
  } else {
    PokemonEscolhido(undefined, Pesquisa)
  }
}

async function GeraçãoData(IDPoke) {
  const Data = await GerarInfo(IDPoke)
  return Data
}

async function PokemonEscolhido(Key, PesquisarID){
  const PData = await VerificaçãoDados(Key, PesquisarID)
  let HTML;
  HTML = 
    `
    <img src="${PData.img}" alt="" class="Pokemon-Sprite">
    <div class="Infos-Pokedex">
      <span class="Numero-Pokemon">${PData.id} - </span>
      <h1 class="Nome-Pokemon">${PData.Nome}</h1>
    </div>
    `
  Inserir.innerHTML = HTML 
}

async function VerificaçãoDados(Key, PesquisarID){
  let PokeData;
  if (PesquisarID !== undefined) {
    PokeData = await GeraçãoData(PesquisarID)
    return PokeData 
  } else {
    let ID = Gerar(Key)
    return PokeData = await GeraçãoData(ID)
  }
}