import React from "react";
import logo from "../../assets/images/logo.png";
function TopBar() {
  return (
    <div className=" h-24 bg-black relative">
      <div className="absolute inset-0 flex items-center">
        <img src={logo} alt="twitch-cup-logo" className="h-20"></img>
      </div>
    </div>
  );
}

export default TopBar;
