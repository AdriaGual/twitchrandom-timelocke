import React from "react";
import topRight from "../../assets/images/topright.png";
import Card from "../Card/Card";
function Main() {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${topRight})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative">
        <div class="grid grid-cols-5 absolute inset-0">
          <div></div>
          <div class="col-span-3 flex items-center">
            <Card></Card>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
