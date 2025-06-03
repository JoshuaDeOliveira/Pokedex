import '../PokeAPI/PokeList.js';
import {Formatar} from "../Utils/formatar.js";
import {PegarData} from "../Utils/Pegar.js";
import {Tipos} from "../Utils/PokeUtils.js";

let PokeDiv = {
  HTMLGeracional: document.querySelector('.Lista-Gerecional')
}

let Gen = PegarData('Gens')
let InserirHTML;
let PokemonDiv;

export function RunGeraçõesHTML(){
  InserirHTML = `
    <hr class="NÃO-TOQUE">
    <div class="Gerecional" id="1-Gen">
      <h1 class="Nomes-Regionais">1º Geração</h1>
      <div class="Grid-Pokemons Gerecionais-1">
        ${Criação(Gen.PrimeiraGeração)}
      </div>
    </div>
    <hr class="NÃO-TOQUE">
    <div class="Gerecional" id="2-Gen">
      <h1 class="Nomes-Regionais">2º Geração</h1>
      <div class="Grid-Pokemons Gerecionais-2">
       ${Criação(Gen.SegundaGeração)}</div>
    </div>
    <hr class="NÃO-TOQUE">
    <div class="Gerecional" id="3-Gen">
      <h1 class="Nomes-Regionais">3º Geração</h1>
      <div class="Grid-Pokemons Gerecionais-3">
       ${Criação(Gen.TerceiraGeração)}</div>
    </div>
    <hr class="NÃO-TOQUE">
    <div class="Gerecional" id="4-Gen">
      <h1 class="Nomes-Regionais">4º Geração</h1>
      <div class="Grid-Pokemons Gerecionais-4">
       ${Criação(Gen.QuartaGeração)}</div>
    </div>
    <hr class="NÃO-TOQUE">
    <div class="Gerecional" id="5-Gen">
      <h1 class="Nomes-Regionais">5º Geração</h1>
      <div class="Grid-Pokemons Gerecionais-5">
      ${Criação(Gen.QuintaGeração)}</div>
    </div>
    <hr class="NÃO-TOQUE">
    <div class="Gerecional" id="6-Gen">
      <h1 class="Nomes-Regionais">6º Geração</h1>
      <div class="Grid-Pokemons Gerecionais-6">
      ${Criação(Gen.SextaGeração)}</div>
    </div>
    <hr class="NÃO-TOQUE">
    <div class="Gerecional" id="7-Gen">
      <h1 class="Nomes-Regionais">7º Geração</h1>
      <div class="Grid-Pokemons Gerecionais-7">
      ${Criação(Gen.SetimaGeração)}</div>
    </div>
    <hr class="NÃO-TOQUE">
    <div class="Gerecional" id="8-Gen">
      <h1 class="Nomes-Regionais">8º Geração</h1>
      <div class="Grid-Pokemons Gerecionais-8">
      ${Criação(Gen.OitavaGeração)}</div>
    </div>
    <hr class="NÃO-TOQUE">
    <div class="Gerecional" id="9-Gen">
      <h1 class="Nomes-Regionais">9º Geração</h1>
      <div class="Grid-Pokemons Gerecionais-9">
      ${Criação(Gen.NonaGeração)}
      </div>
    </div>
    <hr class="NÃO-TOQUE">`
  PokeDiv.HTMLGeracional.innerHTML = InserirHTML
  Object.values(Gen).forEach(Geração => {
    Geração.forEach(pokemon => {
      pokemon.Tipos.forEach(tipo => {
      if (tipo.slot === 1) {
        PokemonDiv = document.querySelector([`[data-pokemon-id="${pokemon.id}"`])
        PokemonDiv.style.background = `var(--${tipo.type.name})`
    }})
    })
  })
}

function Criação(Geração){
  let HTMLPoke = ''
  Geração.forEach(pokemon => {
    HTMLPoke += `
    <div class="Pokemons-Div" data-pokemon-id="${pokemon.id}">
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
        ${Tipos(pokemon.Tipos)}
      </div>
    </div>`
    })
  return HTMLPoke
}