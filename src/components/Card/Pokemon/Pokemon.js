import React from "react";
import { getPokemon } from "../../../utils/pokemons";
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

function Pokemon(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="cursor-pointer">
      <div onClick={openModal}>
        {props.pokemonImage}
        <img
          src={getPokemon(props.pokemonIndex)}
          className="mx-auto h-24"
          alt={getPokemon(props.pokemonIndex)}
        ></img>
        <p className="text-center font-semibold text-lg">{props.pokemonName}</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={getPokemon(props.pokemonIndex)}
      >
        <div class="grid grid-cols-4 px-20">
          <div>
            <img
              src={getPokemon(props.pokemonIndex)}
              className="mx-auto h-24"
              alt={getPokemon(props.pokemonIndex)}
            ></img>

            <p className="pt-4 font-semibold text-lg text-center">
              {props.pokemonName}
            </p>
            {
              //<p className="">Habilidad: {props.pokemonHability}</p>
            }
          </div>
          <div> </div>
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
