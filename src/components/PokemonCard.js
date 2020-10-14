import React from "react";

const getPokemonTypes = (types) => {
  let content = [];
  for (let idx in types) {
    const item = types[idx];
    content.push(item.type.name);
  }
  return content.toString();
};

const PokemonCard = ({ pokemon, handleOnClick }) => {
  return (
    <div className="pokemonCardColumn">
      <button className="pokemonCard" onClick={() => {
          handleOnClick(pokemon.id);}}>
        <div key={pokemon.id}>
          <img src={pokemon.sprites["front_default"]} alt="pokemon" />
          <b>{pokemon.name}</b>
          <p style={{fontSize:"12px"}}>{getPokemonTypes(pokemon.types)}</p>
        </div>
      </button>
    </div>
  );
};

export default PokemonCard;
