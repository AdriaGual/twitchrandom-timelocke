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
import On_9 from "../../../assets/images/badges/9_on.png";
import On_10 from "../../../assets/images/badges/10_on.png";
import On_11 from "../../../assets/images/badges/11_on.png";
import On_12 from "../../../assets/images/badges/12_on.png";
import On_13 from "../../../assets/images/badges/13_on.png";
import On_14 from "../../../assets/images/badges/14_on.png";
import On_15 from "../../../assets/images/badges/15_on.png";
import On_16 from "../../../assets/images/badges/16_on.png";
import Off_9 from "../../../assets/images/badges/9_off.png";
import Off_10 from "../../../assets/images/badges/10_off.png";
import Off_11 from "../../../assets/images/badges/11_off.png";
import Off_12 from "../../../assets/images/badges/12_off.png";
import Off_13 from "../../../assets/images/badges/13_off.png";
import Off_14 from "../../../assets/images/badges/14_off.png";
import Off_15 from "../../../assets/images/badges/15_off.png";
import Off_16 from "../../../assets/images/badges/16_off.png";

function Badges(props) {
  const earnedBadges = [
    On_9,
    On_10,
    On_11,
    On_12,
    On_13,
    On_14,
    On_15,
    On_16,
    On_1,
    On_2,
    On_3,
    On_4,
    On_5,
    On_6,
    On_7,
    On_8,
  ];
  const remainingBadges = [
    Off_9,
    Off_10,
    Off_11,
    Off_12,
    Off_13,
    Off_14,
    Off_15,
    Off_16,
    Off_1,
    Off_2,
    Off_3,
    Off_4,
    Off_5,
    Off_6,
    Off_7,
    Off_8,
  ];
  const kantoBadges = [0, 1, 2, 3, 4, 5, 6, 7];
  const johtoBadges = [8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div>
      <p className="font-semibold text-lg">MEDALLAS</p>
      <div class="grid grid-cols-2">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-2">
          {kantoBadges.map((data, index) => {
            return data < props.badges ? (
              <img src={earnedBadges[data]} alt={index} className="h-8"></img>
            ) : (
              <img
                src={remainingBadges[data]}
                alt={index}
                className="h-8"
              ></img>
            );
          })}
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-2">
          {johtoBadges.map((data, index) => {
            return data < props.badges ? (
              <img src={earnedBadges[data]} alt={index} className="h-8"></img>
            ) : (
              <img
                src={remainingBadges[data]}
                alt={index}
                className="h-8"
              ></img>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Badges;
