import React from "react";
import logo from "../../assets/images/logo.png";
import Moment from "react-moment";
import { Link } from "react-router-dom";

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
              date="2021-07-01T11:59-0500"
              interval={100}
              format="d [días] hh [h] : mm [m] : ss [s]"
              className="text-white text-xl font-semibold hidden lg:flex"
              durationFromNow
            />
            <div className=" flex-grow"></div>
            <div className="flex gap-4">
              <Link to="/" className="text-white">
                Inicio
              </Link>
              <Link to="/topCut" className="text-white">
                Top Cut
              </Link>
              <Link to="/novedades" className="text-white">
                Novedades
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </header>
  );
}

export default TopBar;
