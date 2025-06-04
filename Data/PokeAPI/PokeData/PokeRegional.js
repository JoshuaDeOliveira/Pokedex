const PokeRegião = async (ID) => {
  try{
    const response = await fetch(`https://pokeapi.co/api/v2/${ID}`)
    const Data = await response.json()

    const Li = await Promise.all(
      Data.pokemon_entries.map(async (pokemon) => {
        const SpeciesID = pokemon.pokemon_species.url.split('/')[6]
        const Unico = await fetch(`https://pokeapi.co/api/v2/pokemon/${SpeciesID}`);
         if (!Unico.ok) throw new Error(`Falha ao buscar ${pokemon.name}`);
        return await Unico.json()
      })
    ); 
    Li.sort((a, b) => a.id - b.id)
    return Li
  } catch (error) {
    console.log(`Esse foi o erro: ${error.message}`) 
    return null
  }
}