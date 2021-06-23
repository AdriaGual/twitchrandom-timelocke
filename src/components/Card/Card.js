import React from "react";
import Profile from "./Profile/Profile";
function Card() {
  return (
    <div class="w-full border-4 rounded border-purple bg-white">
      <div class="grid grid-cols-5">
        <div class="col-span-2 p-6">
          <Profile></Profile>
        </div>
        <div class="col-span-3">sss</div>
      </div>
    </div>
  );
}

export default Card;
