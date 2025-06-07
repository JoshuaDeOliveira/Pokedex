import {PegarData} from "../Utils/Pegar.js";
import {Criação} from "../Utils/Criar.js";
import {GerarRegioes} from "../PokeAPI/PokeList.js";

let PokeDiv = document.querySelector(".Pokemons")
let PokemonDiv;

export function RunHTMLRegional(){
  GerarRegioes()
  const Região = PegarData('Regioes')
  
  const HTML = `
      <hr class="NÃO-TOQUE">
      <div class="Regional" id="Kanto">
        <h1 class="Nomes-Regionais">Kanto</h1>
        <div class="Grid-Pokemons">
        ${Criação(Região.RegiãoKanto)}
        </div>
      </div>
      <hr class="NÃO-TOQUE">
      <div class="Regional" id="Johto">
        <h1 class="Nomes-Regionais">Johto</h1>
        <div class="Grid-Pokemons">
        ${Criação(Região.RegiãoJohto)}
        </div>
      </div>
      <hr class="NÃO-TOQUE">
      <div class="Regional" id="Hoenn">
        <h1 class="Nomes-Regionais">Hoenn</h1>
        <div class="Grid-Pokemons">
        ${Criação(Região.RegiãoHoenn)}
        </div>
      </div>
      <hr class="NÃO-TOQUE">
      <div class="Regional" id="Sinnoh">
        <h1 class="Nomes-Regionais">Sinnoh</h1>
        <div class="Grid-Pokemons ">
        ${Criação(Região.RegiãoSinnoh)}
        </div>
      </div>
      <hr class="NÃO-TOQUE">
      <div class="Regional" id="Unova">
        <h1 class="Nomes-Regionais">Unova</h1>
        <div class="Grid-Pokemons Unova">
        ${Criação(Região.RegiãoUnova)}
        </div>
      </div>
      <hr class="NÃO-TOQUE">
      <div class="Regional" id="Kalos">
        <h1 class="Nomes-Regionais">Kalos</h1>
        <h2 class="Nomes-Regionais-Adicional">Central-Kalos</h2>
        <div class="Grid-Pokemons Kalos">
        ${Criação(Região["RegiãoKalos-central"])}
        </div>
        <h2 class="Nomes-Regionais-Adicional">Coastal-Kalos</h2>
        <div class="Grid-Pokemons Kalos">
        ${Criação(Região['RegiãoKalos-coastal'])}
        </div>
        <h2 class="Nomes-Regionais-Adicional">Montanha-Kalos</h2>
        <div class="Grid-Pokemons Kalos">
        ${Criação(Região['RegiãoKalos-mountain'])}
        </div>
      </div>
      <hr class="NÃO-TOQUE" id="Alola">
      <div class="Regional">
        <h1 class="Nomes-Regionais">Alola</h1>
        <div class="Grid-Pokemons Alola">
        ${Criação(Região.RegiãoAlola)}
        </div>
      </div>
      <hr class="NÃO-TOQUE">
      <div class="Regional" id="Galar">
        <h1 class="Nomes-Regionais">Galar</h1>
        <div class="Grid-Pokemons Galar">
        ${Criação(Região.RegiãoGalar)}
        </div>
      </div>
      <hr class="NÃO-TOQUE">
      <div class="Regional" id="Paldea">
        <h1 class="Nomes-Regionais">Paldea</h1>
        <div class="Grid-Pokemons Paldea">
        ${Criação(Região.RegiãoPaldea)}
        </div>
      </div>
      <hr class="NÃO-TOQUE">
      <div class="Regional" id="Hisui">
        <h1 class="Nomes-Regionais">Hisui</h1>
        <div class="Grid-Pokemons Hisui">
        ${Criação(Região.RegiãoHisui)}</div>
      </div>
      <hr class="NÃO-TOQUE">
      `
    PokeDiv.innerHTML = HTML

    Object.values(Região).forEach(Região => {
      Região.forEach(pokemon => {
        pokemon.Tipos.forEach(tipo => {
        if (tipo.slot === 1) {
          PokemonDiv = document.querySelector([`[data-pokemon-id="${pokemon.id}"`])
          PokemonDiv.style.background = `var(--${tipo.type.name})`
      }})
    })
  })
}

