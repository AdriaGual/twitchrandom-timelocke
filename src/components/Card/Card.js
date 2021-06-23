import React from "react";
import Profile from "./Profile/Profile";
function Card() {
  return (
    <div class="w-full border-4 rounded border-purple bg-white mt-4">
      <div class="grid grid-cols-5 p-6">
        <div class="col-span-2">
          <Profile></Profile>
          <Profile></Profile>
        </div>
        <div class="col-span-3">sss</div>
      </div>
    </div>
  );
}

export default Card;
