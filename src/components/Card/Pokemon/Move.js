import React from "react";

function Move(props) {
  return (
    <div className="p-2 flex gap-6">
      <div className="w-32">
        <p className="font-semibold my-auto">{props.data.moveName}</p>
        <p className="my-auto">
          {props.data.PP}/{props.data.PP}
        </p>
      </div>

      <div
        className={
          props.data.type === "Tierra"
            ? " bg-ground h-10 p-2 w-32 text-center uppercase text-white font-semibold rounded items-center justify-center "
            : props.data.type === "Normal"
            ? " bg-normal h-10 p-2  w-32 text-center uppercase text-white font-semibold rounded items-center justify-center "
            : props.data.type === "Fuego"
            ? " bg-fire h-10 p-2  w-32 text-center uppercase text-white font-semibold rounded items-center justify-center "
            : props.data.type === "Agua"
            ? " bg-water h-10 p-2  w-32 text-center uppercase text-white font-semibold rounded items-center justify-center "
            : props.data.type === "Eléctrico"
            ? " bg-electric h-10 p-2  w-32 text-center uppercase text-white font-semibold rounded items-center justify-center "
            : props.data.type === "Planta"
            ? " bg-grass h-10 p-2  w-32 text-center uppercase text-white font-semibold rounded items-center justify-center "
            : props.data.type === "Hielo"
            ? " bg-ice h-10 p-2  w-32 text-center uppercase text-white font-semibold rounded items-center justify-center "
            : props.data.type === "Lucha"
            ? " bg-fighting h-10 p-2  w-32 text-center uppercase text-white font-semibold rounded items-center justify-center "
            : props.data.type === "Veneno"
            ? " bg-poison h-10 p-2  w-32 text-center uppercase text-white font-semibold rounded items-center justify-center "
            : props.data.type === "Volador"
            ? " bg-flying h-10 p-2  w-32 text-center uppercase text-white font-semibold rounded items-center justify-center "
            : props.data.type === "Psíquico"
            ? " bg-psychic h-10 p-2  w-32 text-center uppercase text-white font-semibold rounded items-center justify-center "
            : props.data.type === "Bicho"
            ? " bg-bug h-10 p-2  w-32 text-center uppercase text-white font-semibold rounded items-center justify-center "
            : props.data.type === "Roca"
            ? " bg-rock h-10 p-2  w-32 text-center uppercase text-white font-semibold rounded items-center justify-center "
            : props.data.type === "Fantasma"
            ? " bg-ghost h-10 p-2  w-32 text-center uppercase text-white font-semibold rounded items-center justify-center "
            : props.data.type === "Dragón"
            ? " bg-dragon h-10 p-2  w-32 text-center uppercase text-white font-semibold rounded items-center justify-center "
            : props.data.type === "Siniestro"
            ? " bg-dark h-10 p-2  w-32 text-center uppercase text-white font-semibold rounded items-center justify-center "
            : props.data.type === "Acero"
            ? " bg-steel h-10 p-2  w-32 text-center uppercase text-white font-semibold rounded items-center justify-center "
            : props.data.type === "Hada"
            ? " bg-fairy h-10 p-2  w-32 text-center uppercase text-white font-semibold rounded items-center justify-center "
            : ""
        }
      >
        {props.data.type}
      </div>
    </div>
  );
}

export default Move;
