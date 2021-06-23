import React from "react";
import nidoking from "../../../assets/images/sprites/nidoking.gif";
function Pokemon(props) {
  const pokemonGifs = [nidoking];
  return (
    <div>
      {props.pokemonImage}
      <img
        src={pokemonGifs[props.pokemonIndex]}
        className="mx-auto h-28"
        alt={pokemonGifs[props.pokemonIndex]}
      ></img>
      <p className="text-center">{props.pokemonName}</p>
    </div>
  );
}

export default Pokemon;
