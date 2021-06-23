import React from "react";
import logo from "../../../assets/images/bottomleft.png";

function Profile() {
  return (
    <div className="p-6">
      <img
        src={logo}
        alt="twitch-cup-logo"
        className="h-20 rounded-full pb-6"
      ></img>
      <div className="profile-card-title m-24">Ander</div>
    </div>
  );
}

export default Profile;
