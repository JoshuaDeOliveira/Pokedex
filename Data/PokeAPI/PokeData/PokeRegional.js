export const RegionalLista = ['kanto', 'hoenn', 'original-johto', 'original-sinnoh', 'original-unova','kalos-central','kalos-coastal','kalos-mountain','original-alola', 'galar', 'paldea', 'hisui']

const PokeRegional = async (Key) => {
  try{
    const response = await fetch('https://pokeapi.co/api/v2/pokedex/?offset=0&limit=32')
    const NomesRegionais = await response.json()
    const Li = await Promise.all(
      Object.values(NomesRegionais.results).map(async Regional => {
        const Unico = await fetch(Regional.url)
        const Info = await Unico.json()
          if (Info.name === Key) {
            const Regioes = Info.pokemon_entries
            const Separar = await Promise.all(
              Regioes.map(async Poke => {
                const Pokemons = Poke.pokemon_species
                const SpeciesId = Pokemons.url.split('/')[6]
                const PokeName = Pokemons.name
                const Teste = await fetch(`https://pokeapi.co/api/v2/pokemon/${SpeciesId}`) //NÃO USAR A PROPIEDADE NAME POIS NÃO É CONFIAVEL PELA FORMA DE ORGANIZAÇÃO DA PROPRIA API
                return {
                  PokeList: await Teste.json(),
                  PokeName: PokeName
                } 
              }
            ))
            return Separar
          } else { return null }
      })
    );
    return Li.find(item => item !== null)
  } catch (error) {
    console.log(`O erro no codigo foi ${error}`)
  }
}


export let Regioes = {}

for (const Nome of RegionalLista) {
  Regioes[`${Nome}Data`] = await PokeRegional(Nome)
}
