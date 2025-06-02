export const BuscadorPoke = async (ID) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`)
    const Pokemon = await response.json()
    return Pokemon
  } catch (error) {
    console.log(`Esse foi o erro apresentado: ${error}`)
  }
}