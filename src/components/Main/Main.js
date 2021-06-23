import React from "react";
import topRight from "../../assets/images/topright.png";
import Card from "../Card/Card";
import cristininiTeam from "../../utils/jsonData/cristininiTeam.json";
import anderTeam from "../../utils/jsonData/anderTeam.json";

function Main() {
  const streamerTeams = [cristininiTeam, anderTeam];

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
          <div class="col-span-3 ">
            {streamerTeams.map((data, index) => {
              return <Card data={data}></Card>;
            })}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
