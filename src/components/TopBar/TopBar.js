import React from "react";
import logo from "../../assets/images/logo.png";
import Moment from "react-moment";

function TopBar() {
  return (
    <header>
      <div className=" h-24 bg-black relative">
        <div class="grid grid-cols-5 absolute inset-0">
          <div></div>
          <div class="col-span-3 flex items-center">
            <img src={logo} alt="twitch-cup-logo" className="h-20"></img>
            <div className=" flex-grow"></div>
            <Moment
              date="2021-06-30T11:59-0500"
              interval={100}
              format="d [días] hh [h] : mm [m] : ss [s]"
              className="text-white text-xl font-semibold hidden lg:flex"
              durationFromNow
            />
          </div>
          <div></div>
        </div>
      </div>
    </header>
  );
}

export default TopBar;
