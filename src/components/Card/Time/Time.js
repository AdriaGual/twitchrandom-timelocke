import React from "react";

function Time(props) {
  let totalTimeMinutes = 18 * 60;
  let totalTimeRemaining = props.timeHours * 60 + props.timeMinutes;
  let remainingMinutes = totalTimeMinutes - totalTimeRemaining;
  let remainingHours = 0;
  while (remainingMinutes >= 60) {
    remainingHours = remainingHours + 1;
    remainingMinutes = remainingMinutes - 60;
  }
  if (remainingHours < 10) {
    remainingHours = "0" + remainingHours;
  }
  if (remainingMinutes < 10) {
    remainingMinutes = "0" + remainingMinutes;
  }
  return (
    <div>
      <p className="font-semibold text-lg">TIEMPO RESTANTE</p>
      <div class="mt-2">
        <p>{remainingHours + ":" + remainingMinutes} h</p>
      </div>
    </div>
  );
}

export default Time;
