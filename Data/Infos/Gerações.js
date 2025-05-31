import {PrimeiraGeração} from "../PokeAPI/PokeList.js";
import {Formatar} from "../Utils/formatar.js";

let PokeDiv = {
  HTML1: document.querySelector('.Gerecionais-1')
}

let Inserir1;

export function RunGeraçõesHTML(){
  PrimeiraGeração.forEach(pokemon => {
    Inserir1 = `<div class="Pokemons-Div">
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
              <div class="TypeP">
              </div>
            </div>`
    PokeDiv.HTML1.innerHTML += Inserir1
  })
}

function Tipos(Type){
  switch (key) {
    case value:
      
      break;
  
    default:
      break;
  }
}
