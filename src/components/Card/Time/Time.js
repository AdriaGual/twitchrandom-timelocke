import React from "react";

function Time(props) {
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
