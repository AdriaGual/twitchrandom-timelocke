import React from "react";
import logo from "../../assets/images/logo.png";
import Moment from "react-moment";

function TopBar() {
  return (
    <div className=" h-24 bg-black relative">
      <div class="grid grid-cols-5 absolute inset-0">
        <div></div>
        <div class="col-span-3 flex items-center">
          <img src={logo} alt="twitch-cup-logo" className="h-20"></img>
          <div className=" flex-grow"></div>
          <Moment
            date="2021-06-19T12:59-0500"
            interval={100}
            format="d [días] hh [h] : mm [m] : ss [s]"
            className="text-white text-xl font-semibold hidden lg:flex"
            durationFromNow
          />
          <div className=" flex-grow"></div>
          <div className="flex gap-4">
            <p className="text-white">Inicio</p>
            <p className="text-white">Novedades</p>
            <p className="text-white">Top Cut</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default TopBar;
