import React from "react";

function Profile(props) {
  return (
    <div className={!props.isPlayer ? "mt-6" : ""}>
      <a href={props.twitch} target="_blank" rel="noreferrer">
        <img
          src={props.imageUrl}
          alt={props.name}
          className="rounded-full h-24 w-24 shadow"
        ></img>
        <div className="relative pt-2">
          <div className="">
            <div className="profile-card-title w-36 h-10 flex items-center p-2 shadow">
              <p className="font-semibold">{props.name}</p>
            </div>
          </div>

          <div className="absolute top-9 left-24">
            <div className="profile-card-position w-32 h-6 flex items-center p-2 text-white">
              <p className="font-semibold">
                {props.isPlayer ? "JUGADOR" : "COACH"}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Profile;
