import {RunHTMLRegional} from "../Infos/Regioes.js";
import {Loading, BotãoEntrar} from "../Utils/HTMLUtils.js";

CarregarDados('.Pokemons')

async function CarregarDados(Key) {
  document.querySelector('.skeleton-card').style.display = 'block'
  document.querySelector(Key).style.display = 'none'
  try {
    RunHTMLRegional()
    Loading('.Pokemons')
    BotãoEntrar()
  } catch (error) {
    console.log(`Esta funcionando? ${error}`)
  }
}

