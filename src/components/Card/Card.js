import React from "react";
import Profile from "./Profile/Profile";
import Badges from "./Badges/Badges";
import Pokemon from "./Pokemon/Pokemon";
import Time from "./Time/Time";

function Card(props) {
  return (
    <div className="w-full border-4 rounded border-purple bg-white my-4 py-6">
      <div className="grid grid-cols-5 px-2 md:px-8 lg:px-20">
        <div className="col-span-2">
          <Profile
            isPlayer={true}
            name={props.data.playerName}
            imageUrl={props.data.playerImageUrl}
            twitch={props.data.playerTwitch}
          ></Profile>
          {props.data.hasCoach ? (
            <Profile
              isPlayer={false}
              name={props.data.coachName}
              imageUrl={props.data.coachImageUrl}
              twitch={props.data.coachTwitch}
            ></Profile>
          ) : (
            ""
          )}
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-4 h-full">
            {props.data.team.map((data, index) => {
              return (
                <Pokemon
                  pokemonName={data.pokemonName}
                  pokemonIndex={data.pokemonIndex}
                  pokemonMoves={data.pokemonMoves}
                  pokemonHability={data.pokemonHability}
                  pokemonDescription={data.pokemonDescription}
                  key={index}
                ></Pokemon>
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 px-2 md:px-8 lg:px-20 pt-8">
        <div className="col-span-2">
          <Time
            timeMinutes={props.data.timeMinutes}
            timeHours={props.data.timeHours}
          ></Time>
        </div>
        <div className="col-span-3">
          <Badges badges={props.data.badges}></Badges>
        </div>
      </div>
    </div>
  );
}

export default Card;
