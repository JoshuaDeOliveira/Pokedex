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
  const data = await GerarInfo()
  console.log(data)
  
  const HTML = 
  `
  <img src="./CSS/Imagens/Pokedex/charizard.png" alt="" class="Pokemon-Sprite">
  <h1 class="Nome-Pokemon">Pikachu</h1>
  <span class="Numero-Pokemon">24 -</span>
  `
  Inserir.innerHTML = HTML
}