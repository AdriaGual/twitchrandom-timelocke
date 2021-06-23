import React from "react";
import On_1 from "../../../assets/images/badges/1_on.png";
import On_2 from "../../../assets/images/badges/2_on.png";
import On_3 from "../../../assets/images/badges/3_on.png";
import On_4 from "../../../assets/images/badges/4_on.png";
import On_5 from "../../../assets/images/badges/5_on.png";
import On_6 from "../../../assets/images/badges/6_on.png";
import On_7 from "../../../assets/images/badges/7_on.png";
import On_8 from "../../../assets/images/badges/8_on.png";
import Off_1 from "../../../assets/images/badges/1_off.png";
import Off_2 from "../../../assets/images/badges/2_off.png";
import Off_3 from "../../../assets/images/badges/3_off.png";
import Off_4 from "../../../assets/images/badges/4_off.png";
import Off_5 from "../../../assets/images/badges/5_off.png";
import Off_6 from "../../../assets/images/badges/6_off.png";
import Off_7 from "../../../assets/images/badges/7_off.png";
import Off_8 from "../../../assets/images/badges/8_off.png";

function Badges() {
  return (
    <div className="pt-6">
      <p className="font-semibold text-lg">MEDALLAS</p>
      <div class="grid grid-cols-4 gap-4 w-44 pt-2">
        <div>
          <img
            src={On_1}
            alt="twitch-cup-logo"
            className="h-10 rounded-full pb-2"
          ></img>
        </div>
        <div>
          <img
            src={On_1}
            alt="twitch-cup-logo"
            className="h-10 rounded-full pb-2"
          ></img>
        </div>{" "}
        <div>
          <img
            src={On_1}
            alt="twitch-cup-logo"
            className="h-10 rounded-full pb-2"
          ></img>
        </div>{" "}
        <div>
          <img
            src={On_1}
            alt="twitch-cup-logo"
            className="h-10 rounded-full pb-2"
          ></img>
        </div>{" "}
        <div>
          <img
            src={On_1}
            alt="twitch-cup-logo"
            className="h-10 rounded-full pb-2"
          ></img>
        </div>{" "}
        <div>
          <img
            src={On_1}
            alt="twitch-cup-logo"
            className="h-10 rounded-full pb-2"
          ></img>
        </div>{" "}
        <div>
          <img
            src={On_1}
            alt="twitch-cup-logo"
            className="h-10 rounded-full pb-2"
          ></img>
        </div>{" "}
        <div>
          <img
            src={On_1}
            alt="twitch-cup-logo"
            className="h-10 rounded-full pb-2"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Badges;
