import React from "react";
import logo from "../../../assets/images/bottomleft.png";

function Profile() {
  return (
    <a href="https://twitter.com/home">
      <img
        src={logo}
        alt="twitch-cup-logo"
        className="h-20 rounded-full pb-2"
      ></img>
      <div className="relative">
        <div className="relative">
          <div className="profile-card-title w-36 h-12 flex items-center p-2">
            <p className="font-semibold">Ander</p>
          </div>
        </div>
        <div className="absolute top-8 left-24">
          <div className="relative z-10">
            <div className="profile-card-position w-20 h-6 flex items-center p-2">
              <p className="font-semibold">Coach</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Profile;
