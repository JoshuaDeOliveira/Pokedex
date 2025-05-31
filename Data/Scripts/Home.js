import {RunRegioesHTML} from "../Infos/Regioes.js";

RunRegioesHTML()

document.querySelectorAll('.Pokemons-Div').forEach(button => {
  button.addEventListener('click', () => {window.location.href = 'Detalhes.html'})
})

