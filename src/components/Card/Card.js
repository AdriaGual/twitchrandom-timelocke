import React from "react";
import Profile from "./Profile/Profile";
import Badges from "./Badges/Badges";
function Card(props) {
  return (
    <div class="w-full border-4 rounded border-purple bg-white mt-4">
      <div class="grid grid-cols-5 py-6 px-20">
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
        <div class="col-span-3">sss</div>
      </div>
      <div class="grid grid-cols-5 px-20">
        <div class="col-span-2">
          <Badges badges={props.data.badges}></Badges>
        </div>
        <div class="col-span-3">sss</div>
      </div>
    </div>
  );
}

export default Card;
