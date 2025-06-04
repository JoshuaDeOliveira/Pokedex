import {RunGeraçõesHTML} from "../Infos/Gerações.js";
import {Loading} from "../Utils/Carregou.js";

CarregarDados()

document.querySelectorAll('.Pokemons-Div').forEach(PokemonEscolhido => {
  PokemonEscolhido.addEventListener('click', () => {
    const ID = PokemonEscolhido.dataset.pokemonId
    window.location.href = `Detalhes.html?search=${ID}`
  })
})

async function CarregarDados(){
  document.querySelector('.skeleton-card').style.display = 'block'
  document.querySelector('.Lista-Gerecional').style.display = 'none'
  try {
    RunGeraçõesHTML()
    Loading('.Lista-Gerecional')
  } catch (error) {
    console.log('Esta funcionando?', error)
  }
}