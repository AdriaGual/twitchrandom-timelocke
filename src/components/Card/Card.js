import React, { useEffect } from "react";
import Profile from "./Profile/Profile";
import Badges from "./Badges/Badges";
import Pokemon from "./Pokemon/Pokemon";
import Lifes from "./Lifes/Lifes";

function Card(props) {
  useEffect(() => {
    for (let a = 1; a < 251; a++) {
      if (a < 10) {
        console.log("s00" + a + ",");
      } else if (a >= 10 && a < 100) {
        console.log("s0" + a + ",");
      } else {
        console.log("s" + a + ",");
      }
    }
  }, []);

  return (
    <div class="w-full border-4 rounded border-purple bg-white my-4 py-6">
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
                  pokemonMoves={data.pokemonMoves}
                  pokemonHability={data.pokemonHability}
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
