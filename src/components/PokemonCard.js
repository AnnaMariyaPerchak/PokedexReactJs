import React from "react";

const getPokemonTypes = (types) => {
  let content = [];
  for (let idx in types) {
    const item = types[idx];
    content.push(item.type.name + " ");
  }
  return content;
};

const PokemonCard = ({ pokemon, handleOnClick }) => {
  return (
    <div className="pokemonCardColumn">
      <button className="pokemonCard" onClick={() => {
          handleOnClick(pokemon.id);}}>
        <div key={pokemon.id}>
          <img src={pokemon.sprites["front_default"]} alt="pokemon" />
          <b>{pokemon.name}</b>
          <h6>Types:{getPokemonTypes(pokemon.types)}</h6>
        </div>
      </button>
    </div>
  );
};

export default PokemonCard;
