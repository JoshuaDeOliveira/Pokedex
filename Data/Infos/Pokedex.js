import {GerarInfo} from "../PokeAPI/PokeList.js";
import {ContadorDeId} from "../Utils/Calculo.js";

const Inserir = document.querySelector('.Informações')
let Gerar = ContadorDeId()

export function RunPokedex(){
  PokemonEscolhido()

  document.querySelector('.Next').addEventListener('click', async () => {
    await PokemonEscolhido()
  })

  document.querySelector('.Previous').addEventListener('click', async () => {
    await PokemonEscolhido()
  })
}

async function PokemonEscolhido(){
  let ID = Gerar()
  const Data = await GerarInfo(ID)
  let HTML;
  HTML = 
    `
    <img src="${Data.img}" alt="" class="Pokemon-Sprite">
    <h1 class="Nome-Pokemon">${Data.Nome}</h1>
    <span class="Numero-Pokemon">${Data.id} -</span>
    `
  Inserir.innerHTML = HTML 
}