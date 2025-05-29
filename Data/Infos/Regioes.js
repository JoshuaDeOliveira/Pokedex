import {Kanto} from "../PokeAPI/PokeList.js";

let PokeDiv = {
  HTMLKanto: document.querySelector('.Kanto')
}

let InserirKanto;

export function RunRegioesHTML(){
  Kanto.forEach(pokemon => {
    InserirKanto = `<div class="Pokemons-Div">
            <div class="Img-Poke">
              <img class="Sprite-Pokemon" src="${pokemon.Img}" alt="">
              <img class="Pokeball-Ani" src="./CSS/Imagens/pokeball.png" alt="">
            </div>
            <div class="ID-Poke">
              <p class="ID">${pokemon.id}</p>
            </div>
            <div class="Nome-Poke">
              <h2 class="NomeP">${pokemon.Nome}</h2>
            </div>
            <div class="Types-Poke">
              <div class="TypeP">
                <img src="./CSS/Imagens/Types/electric.svg" alt="">
              </div>
            </div>`
    PokeDiv.HTMLKanto.innerHTML += InserirKanto
  })
}
