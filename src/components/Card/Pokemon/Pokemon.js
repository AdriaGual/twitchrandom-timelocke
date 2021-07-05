import React, { useState, useEffect, useCallback } from "react";
import { PokeAPI } from "../../../utils/pokemons";
import Modal from "react-modal";
import Move from "./Move";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "50%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "4px solid #A353C8",
  },
};

Modal.setAppElement(document.getElementById("root"));

const Pokemon = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [pokemonSprite, setPokemonSprite] = useState(null);

  useEffect( () => {
    getPokemonSprite();
  }, [])

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  };

  const getPokemonSprite = useCallback(async () => {
    const { sprites: { front_default: sprite }} = await PokeAPI.getPokemonByName(props.pokemonIndex + 1);

    setPokemonSprite(sprite);
  }, [props.pokemonIndex]);

  return (
    <div className="cursor-pointer">
      <div onClick={openModal}>
        <img
          src={pokemonSprite}
          className="mx-auto h-32"
          alt={pokemonSprite}
        ></img>
        <p className="text-center font-semibold text-lg">{props.pokemonName}</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={pokemonSprite}
      >
        <div class="grid grid-cols-4">
          <div className="col-span-2">
            <img
              src={pokemonSprite}
              className="mx-auto h-64"
              alt={pokemonSprite}
            ></img>
            <p className="pt-4 font-semibold text-lg text-center">
              {props.pokemonName + " #" + (props.pokemonIndex + 1)}
            </p>{" "}
            <p className="">
              <span className="pt-4 font-semibold">Habilidad: </span>
              {props.pokemonHability}
            </p>
            <p>{props.pokemonDescription}</p>
          </div>

          <div className="col-span-2">
            {props.pokemonMoves.map((data, index) => {
              return <Move data={data}></Move>;
            })}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Pokemon;
