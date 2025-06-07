import {GerarGerações} from '../PokeAPI/PokeList.js';
import {Criação} from "../Utils/Criar.js";
import {PegarData} from "../Utils/Pegar.js";


let PokeDiv = {
  HTMLGeracional: document.querySelector('.Lista-Gerecional')
}

let InserirHTML;
let PokemonDiv;

export function RunGeraçõesHTML(){
  GerarGerações()
  let Gen = PegarData('Gens')

  InserirHTML = `
    <hr class="NÃO-TOQUE">
    <div class="Gerecional" id="1-Gen">
      <h1 class="Nomes-Regionais">1º Geração</h1>
      <div class="Grid-Pokemons Gerecionais-1">
        ${Criação(Gen.Gen_1)}
      </div>
    </div>
    <hr class="NÃO-TOQUE">
    <div class="Gerecional" id="2-Gen">
      <h1 class="Nomes-Regionais">2º Geração</h1>
      <div class="Grid-Pokemons Gerecionais-2">
       ${Criação(Gen.Gen_2)}</div>
    </div>
    <hr class="NÃO-TOQUE">
    <div class="Gerecional" id="3-Gen">
      <h1 class="Nomes-Regionais">3º Geração</h1>
      <div class="Grid-Pokemons Gerecionais-3">
       ${Criação(Gen.Gen_3)}</div>
    </div>
    <hr class="NÃO-TOQUE">
    <div class="Gerecional" id="4-Gen">
      <h1 class="Nomes-Regionais">4º Geração</h1>
      <div class="Grid-Pokemons Gerecionais-4">
       ${Criação(Gen.Gen_4)}</div>
    </div>
    <hr class="NÃO-TOQUE">
    <div class="Gerecional" id="5-Gen">
      <h1 class="Nomes-Regionais">5º Geração</h1>
      <div class="Grid-Pokemons Gerecionais-5">
      ${Criação(Gen.Gen_5)}</div>
    </div>
    <hr class="NÃO-TOQUE">
    <div class="Gerecional" id="6-Gen">
      <h1 class="Nomes-Regionais">6º Geração</h1>
      <div class="Grid-Pokemons Gerecionais-6">
      ${Criação(Gen.Gen_6)}</div>
    </div>
    <hr class="NÃO-TOQUE">
    <div class="Gerecional" id="7-Gen">
      <h1 class="Nomes-Regionais">7º Geração</h1>
      <div class="Grid-Pokemons Gerecionais-7">
      ${Criação(Gen.Gen_7)}</div>
    </div>
    <hr class="NÃO-TOQUE">
    <div class="Gerecional" id="8-Gen">
      <h1 class="Nomes-Regionais">8º Geração</h1>
      <div class="Grid-Pokemons Gerecionais-8">
      ${Criação(Gen.Gen_8)}</div>
    </div>
    <hr class="NÃO-TOQUE">
    <div class="Gerecional" id="9-Gen">
      <h1 class="Nomes-Regionais">9º Geração</h1>
      <div class="Grid-Pokemons Gerecionais-9">
      ${Criação(Gen.Gen_9)}
      </div>
    </div>
    <hr class="NÃO-TOQUE">`
  PokeDiv.HTMLGeracional.innerHTML = InserirHTML
  Object.values(Gen).forEach(Geração => {
    Geração.forEach(pokemon => {
      pokemon.Tipos.forEach(tipo => {
      if (tipo.slot === 1) {
        PokemonDiv = document.querySelector([`[data-pokemon-id="${pokemon.IdDiv}"`])
        PokemonDiv.style.background = `var(--${tipo.type.name})`
    }})
    })
  })
}