export const PokeData = async (ID) => {
  try{
    const response = await fetch(`https://pokeapi.co/api/v2/${ID}`)
    const Data = await response.json()

    const Li = await Promise.all(
      Data.pokemon_species.map(async (pokemon) => {
        const Unico = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        return await Unico.json()
      })
    ); 
    Li.sort((a, b) => a.id - b.id)
    return Li
  } catch (error) {
    console.log(`Deu erro na pega das informações ${error}`)
  }
}

/*Teste de Funcionalidade. IMPLEMENTAR LOCALSTORAGE + MELHOR FUNCIONALIDADE DE BUSCA DE GERAÇÃO*/

export const PokemonsData = {
  Gen1Data: await PokeData('generation/1/'),
  Gen2Data: await PokeData('generation/2/'),
}



