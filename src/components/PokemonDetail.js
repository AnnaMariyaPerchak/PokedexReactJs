import React from 'react';

const PokemonDetail = ({ pokemon}) => {

  const getPokemonStats = stats => {
    let content = [];
    for (let idx in stats) {
      const item = stats[idx];
      content.push(<p style={{textTransform: "capitalize",textAlign:"center"}}>{item.stat.name}:{item.base_stat}</p>);
    }
    return content;
  };

  const getPokemonMoves = moves => {
    let content = [];
    for (let idx in moves) {
      const item = moves[idx];
      content.push(item.move.name);
    }
    return content.length
  };
  const getPokemonTypes = types => {
    let content = [];
    for (let idx in types) {
      const item = types[idx];
      content.push(item.type.name);
    }
    return content.toString()
  };
  const getPokemonImage = sprites => {
    let content = [];
    for (let idx in sprites) {
      content.push(<img src={sprites["front_default"]} alt="pokemon" />);
    }
    return content[1]
  };
    return (
      <div className="pokemonDetail">
        <center>{getPokemonImage(pokemon.sprites)}</center>
        <p style={{textAlign:"center"}}>Name: {pokemon.name}</p>
        <p style={{textAlign:"center"}}>Types: {getPokemonTypes(pokemon.types)}</p>
        <div>{getPokemonStats(pokemon.stats)}</div>
        <p style={{textAlign:"center"}}>Weight:{pokemon.weight}</p>
        <p style={{textAlign:"center"}}>Total moves:{getPokemonMoves(pokemon.moves)}</p>
    </div>
  )
}

export default PokemonDetail;