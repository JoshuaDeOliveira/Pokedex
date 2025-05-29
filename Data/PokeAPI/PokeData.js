export const PokeData = async (ID) => {
  try{
    const response = await fetch(`https://pokeapi.co/api/v2/${ID}`)
    const Data = await response.json()

    const Li = await Promise.all(
      Data.results.map(async (pokemon) => {
        const Unico = await fetch(pokemon.url);
        return await Unico.json()
      })
    ); 
    return Li
  } catch (error) {
    console.log(`Deu erro na pega das informações ${error}`)
  }
}

export const Data = await PokeData('pokemon?limit=151&offset=0')



