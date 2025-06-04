const RegionalLista = ['kanto', 'hoenn', 'original-johto', 'original-sinnoh', 'original-unova','kalos-central','kalos-coastal','kalos-mountain','original-alola', 'galar', 'paldea', 'hisui']

const PokeRegional = async () => {
  try{
    const response = await fetch('https://pokeapi.co/api/v2/pokedex/?offset=0&limit=32')
    const NomesRegionais = await response.json()

    const Li = Promise.all(
      Object.values(NomesRegionais.results).map(async Regional => {
        const Unico = await fetch(Regional.url)
        const Info = await Unico.json()
        RegionalLista.forEach(Regional => {
          if (Info.name === Regional) {
            console.log(Info)
          }
        })
      })
    );
  } catch (error) {
    console.log(`O erro no codigo foi ${error}`)
  }
}

PokeRegional()