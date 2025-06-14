const Pokedex = async (ID) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`)
    
    if (!response.ok) {
      return 'Não Encontrado' 
    } 

    const PokeData = await response.json()
    return PokeData
  } catch (error) {
    console.log(`esse foi o erro encontrado ${error}`)
    return 'Não Encontrado' 
  }
}

export async function GerarData(ID){
  return Pokedex(ID)
}