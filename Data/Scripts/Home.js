import {RunHTMLRegional} from "../Infos/Regioes.js";
import {Loading} from "../Utils/Carregou.js";

CarregarDados('.Pokemons')

document.querySelectorAll('.Pokemons-Div').forEach(PokemonEscolhido => {
  PokemonEscolhido.addEventListener('click', () => {
    const ID = PokemonEscolhido.dataset.pokemonId
    window.location.href = `Detalhes.html?search=${ID}`
  })
})

async function CarregarDados(Key) {
  document.querySelector('.skeleton-card').style.display = 'block'
  document.querySelector(Key).style.display = 'none'
  try {
    RunHTMLRegional()
    Loading('.Pokemons')
  } catch (error) {
    console.log(`Esta funcionando? ${error}`)
  }
}

