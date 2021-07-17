import React from "react";
import Moment from "react-moment";

function Time(props) {
  const date = "2021-07-19T18:00-0500";

  return (
    <div>
      <p className="font-semibold text-lg">TIEMPO RESTANTE</p>
      <div class="mt-2">
        <p>{18 - props.time} h</p>
      </div>
    </div>
  );
}

export default Time;
