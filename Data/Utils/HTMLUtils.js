export function Loading(Key){
  setTimeout(() => {
    document.querySelector('.skeleton-card').style.display = 'none'
    document.querySelector(Key).style.display = 'block'
  }, 1000);
}

export function BotãoEntrar(){
  document.querySelectorAll('.Pokemons-Div').forEach(PokemonEscolhido => {
  PokemonEscolhido.addEventListener('click', () => {
    const ID = PokemonEscolhido.dataset.pokemonId
    window.location.href = `Detalhes.html?search=${ID}`
  })
})
}