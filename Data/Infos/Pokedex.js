import {GerarInfo} from "../PokeAPI/PokeList.js";

const Inserir = document.querySelector('.Informações')

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
  const Data = await GerarInfo(1)
  console.log(Data)
  let HTML;
  HTML = 
    `
    <img src="${Data.img}" alt="" class="Pokemon-Sprite">
    <h1 class="Nome-Pokemon">${Data.Nome}</h1>
    <span class="Numero-Pokemon">${Data.id} -</span>
    `
  Inserir.innerHTML = HTML
}