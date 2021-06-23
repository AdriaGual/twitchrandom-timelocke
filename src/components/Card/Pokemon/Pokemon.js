import React from "react";
import { getPokemon } from "../../../utils/pokemons";
function Pokemon(props) {
  return (
    <div>
      {props.pokemonImage}
      <img
        src={getPokemon(props.pokemonIndex)}
        className="mx-auto h-24"
        alt={getPokemon(props.pokemonIndex)}
      ></img>
      <p className="text-center font-semibold text-lg">{props.pokemonName}</p>
    </div>
  );
}

export default Pokemon;
