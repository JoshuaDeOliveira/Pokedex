const PokeGerecional = async (ID, KeyBusca, KeyURL) => {
  try{
    const response = await fetch(`https://pokeapi.co/api/v2/${ID}`)
    const Data = await response.json()

    const Li = await Promise.all(
      Data[KeyBusca].map(async (pokemon) => {
        const SpeciesID = pokemon[KeyURL].split('/')[6]
        const Unico = await fetch(`https://pokeapi.co/api/v2/pokemon/${SpeciesID}`);
        const PokeName = pokemon.name
         if (!Unico.ok) throw new Error(`Falha ao buscar ${pokemon.name}`);
        return {
          PokeList: await Unico.json(),
          PokeName: PokeName
        }
      })
    ); 
    Li.sort((a, b) => a.PokeList.id - b.PokeList.id)
    return Li
  } catch (error) {
    console.log(`Esse foi o erro: ${error.message}`) 
    return null
  }
}


export let PokemonsData = []

for (let i = 1; i < 10; i++) {
  PokemonsData[`Gen${i}Data`] = await PokeGerecional(`generation/${i}/`, 'pokemon_species', 'url')
}
