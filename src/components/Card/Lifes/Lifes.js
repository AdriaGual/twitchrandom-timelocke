import React from "react";
import heart_on from "../../../assets/images/heart_on.png";
import heart_off from "../../../assets/images/heart_off.png";

function Lifes(props) {
  const lifes = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];

  return (
    <div>
      <p className="font-semibold text-lg">VIDAS</p>
      <div class="grid grid-cols-10 gap-4 mt-2">
        {lifes.map((data, index) => {
          return data < props.lifes ? (
            <img src={heart_on} alt={heart_on} className="h-7"></img>
          ) : (
            <img src={heart_off} alt={heart_off} className="h-7"></img>
          );
        })}
      </div>
    </div>
  );
}

export default Lifes;
