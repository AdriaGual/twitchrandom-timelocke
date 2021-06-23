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

function Badges(props) {
  const earnedBadges = [On_1, On_2, On_3, On_4, On_5, On_6, On_7, On_8];
  const remainingBadges = [
    Off_1,
    Off_2,
    Off_3,
    Off_4,
    Off_5,
    Off_6,
    Off_7,
    Off_8,
  ];
  const badges = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <div>
      <p className="font-semibold text-lg">MEDALLAS</p>
      <div class="grid grid-cols-4 gap-4 w-44 mt-2">
        {badges.map((data, index) => {
          return data < props.badges ? (
            <img
              src={earnedBadges[data]}
              alt={index}
              className="h-8 mx-auto"
            ></img>
          ) : (
            <img
              src={remainingBadges[data]}
              alt={index}
              className="h-8 mx-auto"
            ></img>
          );
        })}
      </div>
    </div>
  );
}

export default Badges;
