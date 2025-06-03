class PokeInfos{
  Nomes;
  Imagem;
  Especie;
  Descrição;
  Fisico; /*As medidas estão em cm e gramas*/
  Tipos;
  Habilidades;
  Base; /*ID, GENDER, CATCH RATE, BASE FRIEND, BASE EXP, GROWTH RATE*/
  EggGroup;
  Status; /*VIDA + ATAQUE + DEFESA + SPECIAL ATTACK + SPECIAL DEFESE + SPEED*/
  Evoluções; /*ARVORE DE EVOLUÇÃO*/
  Variações; /*VARIAÇÕES DO POKEMON*/

  constructor(PokemonData, PokeDataAdicional){''
    this.Nomes = {
      Japones: PokeDataAdicional.names.find(u => u.language.name == 'ja').name || 'Desconhecido',
      Ingles: PokeDataAdicional.name
    };
    this.Imagem = PokemonData.sprites.other["official-artwork"].front_default
    this.Especie = PokeDataAdicional.genera.find(u => u.language.name == 'en').genus
    this.Descrição = PokeDataAdicional.flavor_text_entries.find(u => u.language.name == 'en').flavor_text
    this.Fisico = {
      Altura: PokemonData.height, 
      Peso: PokemonData.weight
    }
    this.Tipos = PokemonData.types
    this.Habilidades = PokemonData.abilities
    this.Base = {
      ID: PokemonData.id,
      Genero: PokeDataAdicional.gender_rate, 
      Captura: PokeDataAdicional.capture_rate, 
      Felicidade: PokeDataAdicional.base_happiness,
      Xp: PokemonData.base_experience,
      Growth_Rate: PokeDataAdicional.growth_rate.name
    }
    this.EggGroup = PokeDataAdicional.egg_groups
    this.Status = {
      Health: PokemonData.stats.find(u => u.stat.name == 'hp').
      base_stat,
      Attack: PokemonData.stats.find(u => u.stat.name == 'attack').
      base_stat,
      Defense: PokemonData.stats.find(u => u.stat.name == 'defense').
      base_stat,
      Sp_Atk: PokemonData.stats.find(u => u.stat.name == 'special-attack').
      base_stat,
      Sp_Def: PokemonData.stats.find(u => u.stat.name == 'special-defense').
      base_stat,
      Speed: PokemonData.stats.find(u => u.stat.name == 'speed').
      base_stat
    }
    this.Evoluções = PokeDataAdicional.evolution_chain.url
    this.Variações = PokeDataAdicional.varieties
  }
}

export function PokeInfo(PokemonData, PokeDataAdicional){
  const Escolhido = new PokeInfos(PokemonData, PokeDataAdicional)
  return Escolhido
}