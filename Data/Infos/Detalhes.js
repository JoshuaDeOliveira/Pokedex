import {BuscadorPoke} from "../PokeAPI/Pokemon.js";
import {PokeInfo} from "../PokeAPI/PokemonInfo.js";
import {Formatar} from "../Utils/formatar.js";
import {PokeUtils} from "../Utils/PokeUtils.js";


export function RunPokemonHTML(){
  addEventListener('DOMContentLoaded', () => {
    CriaçãoData()
  })

  const url = new URL(window.location.href)
  const param = new URLSearchParams(url.search)
  const IDPoke = param.get('search')
  
  async function CriaçãoData() {
    const PokemonData = await BuscadorPoke(`pokemon/${IDPoke}`)
    const PokeDataAdicional = await BuscadorPoke(`pokemon-species/${IDPoke}`)
    const Pokemon = PokeInfo(PokemonData, PokeDataAdicional)
    InicialHTML(Pokemon)
  }
}

function InicialHTML(Pokemon){
  const InserirHTML = document.querySelector('.Main')
  InserirHTML.innerHTML = ''
  console.log(Pokemon)
  const HTML = `
  <div class="Header-Poke">
    <div class="btn">
      <a href="Home.html">
        <button class='Back'>
          <img src="./CSS/Imagens/botao-de-seta-para-a-esquerda-do-teclado.png" alt="">
        </button>
      </a>
    </div>
    <div class="Titulo">
      <span class="Nomes-Pokemon">${Pokemon.Nomes.Japones}</span>
      <span class="Nomes-Pokemon">${Pokemon.Nomes.Ingles}</span>
    </div>
    <div class="Top">
      <img class="Sprite_Pokemon" src="${Pokemon.Imagem}" alt="">
      <img class="Pokeball-Ani" src="./CSS/Imagens/pokeball.png" alt="">
    </div>
  </div>
  <div class="Main-Info">
    <div class="Selecionadores">
      <span class="Guias Button-Overview">Overview</span>
      <span class="Guias Button-Stats">Stats</span>
      <span class="Guias Button-Evolution">Evolution</span>
    </div>
  <div class="Main-Pokedex">
  </div>
  `
  InserirHTML.innerHTML = HTML
  Botoes(Pokemon)
  BaseHTML(Pokemon)
  Pokemon.Tipos.forEach(tipo => {
    if (tipo.slot == 1){
      document.querySelector('.Main').style.background = `var(--${tipo.type.name})`
    }
  });
}

function Botoes(Pokemon){
    document.querySelector('.Button-Overview').addEventListener('click', () => {
    BaseHTML(Pokemon)
  });

  document.querySelector('.Button-Stats').addEventListener('click', async () => {
    await StatusHTML(Pokemon)
  });

  document.querySelector('.Button-Evolution').addEventListener('click', async () => {
    await EvolutionHTML(Pokemon)
  });
  }

function BaseHTML(Pokemon){
  const InserirHTML = document.querySelector('.Main-Pokedex')
  InserirHTML.innerHTML = ''
  const HTML = `        
    <div class="Pokedex-Infos">
      <div class="Pokedex-Descrição">
        <h2 class="Especie-Pokemon">${Pokemon.Especie}</h2>
        <p class="Descrição">${PokeUtils.CorrigirTexto(Pokemon.Descrição)}</p>
      </div>
      <div class="Info-Corpo">
        <ul class="Lista-Corporal">
          <li class="Detalhes-Corporais">Height</li>
          <li class="Tamanho Detalhes-Corporais">${PokeUtils.Converter(Pokemon.Fisico.Altura)}m</li>
        </ul>
        <ul class="Lista-Corporal">
          <li class="Detalhes-Corporais">Weight</li>
          <li class="Peso Detalhes-Corporais">${PokeUtils.Converter(Pokemon.Fisico.Peso)}kg</li>
        </ul>
      </div>
      <div class="Type-Pokemon">
        <div class="Div-Type">
          ${PokeUtils.Tipos(Pokemon.Tipos)}
        </div>
      </div>
      <div class="Info-Dex">
        <p class="Infos">Id: <span class="ID">#${Formatar(Pokemon.Base.ID)}</span></p>
        <p class="Infos">Gender:
          <span class="Generos">${PokeUtils.GenderRate(Pokemon.Base.Genero)}</span>
        </p>
        <p class="Infos">Abilities: ${PokeUtils.Habilidades(Pokemon.Habilidades)}</p>
        <p class="Infos">Catch Rate: ${Pokemon.Base.Captura} (${PokeUtils.Catch(Pokemon.Base.Captura)} chance)</p>
        <p class="Infos">Base Friendship: ${Pokemon.Base.Felicidade} (${PokeUtils.MetricaFelicidade(Pokemon.Base.Felicidade)})</p>
        <p class="Infos">Base Exp: ${Pokemon.Base.Xp}</p>
        <p class="Infos">Growth Rate: ${Pokemon.Base.Growth_Rate}</p>
        <p class="Infos">Egg Groups: ${PokeUtils.Eggs(Pokemon.EggGroup)}</p>
      </div>
    </div>`
  InserirHTML.innerHTML = HTML
}

async function StatusHTML(Pokemon){
  const InserirHTML = document.querySelector('.Main-Pokedex')
  InserirHTML.innerHTML = ''
  const HTML = `
  <div class="Status-Infos">
        <div class="Status">
          <div class="Stat">
            <div class="Numb">
              <span>Health:</span>
              <span>${Pokemon.Status.Health}</span>
            </div>
            <meter value="${Pokemon.Status.Health}" min="0" max="255" low="75" high="120" optimum="255">35%</meter>
          </div>
          <div class="Stat">
            <div class="Numb">
              <span>Attack:</span>
              <span>${Pokemon.Status.Attack}</span>
            </div>
            <meter value="${Pokemon.Status.Attack}" min="0" max="255" low="75" high="120" optimum="255">55%</meter>
          </div>
          <div class="Stat">
            <div class="Numb">
              <span>Defense:</span>
              <span>${Pokemon.Status.Defense}</span>
            </div>
            <meter value="${Pokemon.Status.Defense}" min="0" max="255" low="75" high="120" optimum="255">40%</meter>
          </div>
          <div class="Stat">
            <div class="Numb">
              <span>Sp.Atk:</span>
              <span>${Pokemon.Status.Sp_Atk}</span>
            </div>
            <meter value="${Pokemon.Status.Sp_Atk}" min="0" max="255" low="75" high="120" optimum="255">50%</meter>
          </div>
          <div class="Stat">
            <div class="Numb">
              <span>Sp.Def:</span>
              <span>${Pokemon.Status.Sp_Def}</span>
            </div>
            <meter value="${Pokemon.Status.Sp_Def}" min="0" max="255" low="75" high="120" optimum="255">50%</meter>
          </div>
          <div class="Stat">
            <div class="Numb">
              <span>Speed:</span>
              <span>${Pokemon.Status.Speed}</span>
            </div>
            <meter value="${Pokemon.Status.Speed}" min="0" max="255" low="75" high="120" optimum="255">90%</meter>
          </div>
          <div class="Stat">
            <div class="Numb">
              <span>Total:</span>
              <span>${PokeUtils.TotalStatus(Pokemon.Status)}</span>
            </div>
            <meter value="${PokeUtils.TotalStatus(Pokemon.Status)}" min="0" max="1550" low="175" high="500" optimum="1550">70%</meter>
          </div>
        </div>
        <div class="Types">
          ${await Mecanica(Pokemon.Tipos)}
        </div>
      </div>`
  InserirHTML.innerHTML = HTML
}

async function EvolutionHTML(Pokemon){
  const InserirHTML = document.querySelector('.Main-Pokedex')
  InserirHTML.innerHTML = ''
  const HTML = `<div class="Evolution-Info">
        <h1 class="Titulos">Arvore de Evolução Principal</h1>
        <div class="Evolution-Tree">
          <div class="Aba-Evolucion">
            <h1 class="Nomes-Pokemons">Pichu</h1>
            <img class="Sprite-Pokemon" src="./CSS/Imagens/Sprites-Testes/172.png" alt="">
          </div>
          <div class="Aba-Evolucion">
            <h1 class="Nomes-Pokemons">Pikachu</h1>
            <img class="Sprite-Pokemon" src="./CSS/Imagens/Sprites-Testes/25.png" alt="">
          </div>
          <div class="Aba-Evolucion">
            <h1 class="Nomes-Pokemons">Raichu</h1>
            <img class="Sprite-Pokemon" src="./CSS/Imagens/Sprites-Testes/26.png" alt="">
          </div>
        </div>
        <h1 class="Titulos">Formas Alternativas</h1>
        <div class="Evolution-Alternative">
          <div class="Alternative">
            <h1 class="Nomes-Pokemons">pikachu-rock-star</h1>
            <img class="Sprite-Pokemon" src="./CSS/Imagens/Sprites-Testes/10080.png" alt="">
          </div>
        </div>
      </div>`
  InserirHTML.innerHTML = HTML
  await EvolutionTree(Pokemon.Evoluções)
}

async function EvolutionTree(Criaturas){
  try{
    let Primeiro = ''
    let Segundo = ''
    let Terceiro = ''
    const response = await fetch(Criaturas)
    const info = await response.json()
    Primeiro = info.chain.species.name
    info.chain.evolves_to.forEach(De => {
      Segundo = De.species.name
      De.evolves_to.forEach(D => {
        Terceiro = D.species.name
      })
    })

  } catch (error) {
    console.log(`Deu esse erro ${error}`)
  }
}

async function Mecanica(Tipos) {
  try {
    const htmlArray = await Promise.all(
      Tipos.map(async tipo => {
        try {
          let HTMLFraquezas = ''
          let HTMLVantagens = ''
          const response = await fetch(tipo.type.url)
          const info = await response.json()

          const TypesInfos = info.damage_relations
          TypesInfos.double_damage_from.forEach(tipo => {
            HTMLFraquezas += `<div class="TypeP"><img src="../../CSS/Imagens/IconTypes/${tipo.name}.png" alt="Tipos"></div>`
          })
          TypesInfos.double_damage_to.forEach(tipo => {
            HTMLVantagens += `<div class="TypeP"><img src="../../CSS/Imagens/IconTypes/${tipo.name}.png" alt="Tipos"></div>`
          })
          return {
            Fraquezas: HTMLFraquezas,
            Vantagens: HTMLVantagens
          }
        } catch (error) {
          console.log(`Erro ao processar o tipo ${tipo.type.name}: ${error}`)
          return ''
        }
      })
    )
    let HTMLF = ''
    let HTMLV = ''

    htmlArray.forEach(tipo => {
      HTMLF += tipo.Fraquezas
      HTMLV += tipo.Vantagens
    })

    return `<h2 class="Titulos-Type">Fraquezas</h2>
          <div class="Tipos-Detalhes">
            <div class="Type">
              ${HTMLF}
            </div>
          </div>
          <h2 class="Titulos-Type">Vantagens</h2>
          <div class="Tipos-Detalhes">
            <div class="Type">
              ${HTMLV}
            </div>
          </div>`

  } catch (error) {
    console.log(`Erro geral nas Mecanias: ${error}`)
    return ''
  }
}