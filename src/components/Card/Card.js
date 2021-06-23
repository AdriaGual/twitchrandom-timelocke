import React from "react";
import Profile from "./Profile/Profile";
import Badges from "./Badges/Badges";
import Pokemon from "./Pokemon/Pokemon";
import Lifes from "./Lifes/Lifes";

function Card(props) {
  return (
    <div class="w-full border-4 rounded border-purple bg-white mt-4 py-6">
      <div class="grid grid-cols-5 px-20">
        <div class="col-span-2">
          <Profile
            isPlayer={true}
            name={props.data.playerName}
            imageUrl={props.data.playerImageUrl}
          ></Profile>
          {props.data.hasCoach ? (
            <Profile
              isPlayer={false}
              name={props.data.coachName}
              imageUrl={props.data.coachImageUrl}
            ></Profile>
          ) : (
            ""
          )}
        </div>
        <div class="col-span-3">
          <div class="grid grid-cols-3 gap-4 h-full">
            {props.data.team.map((data, index) => {
              return (
                <Pokemon
                  pokemonName={data.pokemonName}
                  pokemonIndex={data.pokemonIndex}
                ></Pokemon>
              );
            })}
          </div>
        </div>
      </div>
      <div class="grid grid-cols-5 px-20">
        <div class="col-span-2">
          <Badges badges={props.data.badges}></Badges>
        </div>
        <div class="col-span-3">
          <Lifes lifes={props.data.lifes}></Lifes>
        </div>
      </div>
    </div>
  );
}

export default Card;
