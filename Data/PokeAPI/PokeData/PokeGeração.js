const PokeData = async (ID) => {
  try{
    const response = await fetch(`https://pokeapi.co/api/v2/${ID}`)
    const Data = await response.json()

    const Li = await Promise.all(
      Data.pokemon_species.map(async (pokemon) => {
        const SpeciesID = pokemon.url.split('/')[6]
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

export const PokemonsData = {
  Gen1Data: await PokeData('generation/1/'),
  Gen2Data: await PokeData('generation/2/'),
  Gen3Data: await PokeData('generation/3/'),
  Gen4Data: await PokeData('generation/4/'),
  Gen5Data: await PokeData('generation/5/'),
  Gen6Data: await PokeData('generation/6/'),
  Gen7Data: await PokeData('generation/7/'),
  Gen8Data: await PokeData('generation/8/'),
  Gen9Data: await PokeData('generation/9/')
}