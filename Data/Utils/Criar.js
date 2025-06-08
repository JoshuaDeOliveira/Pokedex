import {PokeUtils} from "../Utils/PokeUtils.js";
import {Formatar} from "../Utils/formatar.js";

export function Criação(Geração){
  let HTMLPoke = ''
  Geração.forEach(pokemon => {
    HTMLPoke += `
    <div class="Pokemons-Div" data-div-id="${pokemon.IdDiv}" data-pokemon-Id="${pokemon.id}">
      <div class="Img-Poke">
        <img class="Sprite-Pokemon" src="${pokemon.Img}" alt="">
        <img class="Pokeball-Ani" src="./CSS/Imagens/pokeball.png" alt="">
      </div>
      <div class="ID-Poke">
        <p class="ID">#${Formatar(pokemon.id)}</p>
      </div>
      <div class="Nome-Poke">
        <h2 class="NomeP">${pokemon.Nome}</h2>
      </div>
      <div class="Types-Poke">
        ${PokeUtils.Tipos(pokemon.Tipos)}
      </div>
    </div>`
    })
  return HTMLPoke
}