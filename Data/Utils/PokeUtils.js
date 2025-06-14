import {Formatar} from "../Utils/StringUtils.js";

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

export const PokeUtils = {
  CorrigirTexto(Text){
    return Text.replace(/[\f\n\r\t\v\u200B\u200C\u200D\uFEFF]/g," ").replace(/\s+/g, ' ').trim();
  },
  Converter(Text){
    return Text / 10
  },
  TotalStatus(Status){
    let Contador = 0
    Object.values(Status).forEach(stat => {
      Contador += stat
    });
    return Contador
  },
  Tipos(Types){
    let HTML = ''
    Types.forEach(tipo => {
      HTML += `<div class="TypeP"><img src="../../CSS/Imagens/IconTypes/${tipo.type.name}.png" alt="Tipos"></div>`
    })
    return HTML
  },
  GenderRate(Genero){
    if (Genero >= 0){
      const Feminino = (Genero / 8) * 100
      const Masculino = 100 - Feminino
      return `&#9794;${Masculino} &female;${Feminino}`
    } else {
      return 'Sem Genero'
    }
  },
  Habilidades(Abilities){
    let Lista = ''
    Abilities.forEach(Habilidades => {
      Lista += Habilidades.ability.name + ' '
    })
    return Lista
  },
  Catch(Porcentagem){
    return ((Porcentagem / 255) * 100).toFixed(2) + '%'
  },
  MetricaFelicidade(Felicidade){
    if (Felicidade <= 49) {return 'hostil'} 
    if (Felicidade <= 99) {return 'normal'}
    if (Felicidade <= 149) {return 'neutro'}
    if (Felicidade <= 199) {return 'amigavel'}
    if (Felicidade <= 254) {return 'leal'}
    if (Felicidade === 255) {return 'amizade total'}
  },
  Eggs(Grupo){
    let Lista = ''
    Grupo.forEach(Egg => {
      Lista += Egg.name + ' '
    })
    return Lista.replace(1, ' ')
  }
}