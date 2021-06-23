import React from "react";
import topRight from "../../assets/images/topright.png";
import Card from "../Card/Card";
import Footer from "../../components/Footer/Footer";
import cristininiTeam from "../../utils/jsonData/cristininiTeam.json";
import anderTeam from "../../utils/jsonData/anderTeam.json";
import barbeTeam from "../../utils/jsonData/barbeTeam.json";
import chusoTeam from "../../utils/jsonData/chusoTeam.json";
import elXokasTeam from "../../utils/jsonData/elXokasTeam.json";
import felipezTeam from "../../utils/jsonData/felipezTeam.json";
import folagorTeam from "../../utils/jsonData/folagorTeam.json";
import ibaiTeam from "../../utils/jsonData/ibaiTeam.json";
import lmdShowTeam from "../../utils/jsonData/lmdShowTeam.json";
import maximusTeam from "../../utils/jsonData/maximusTeam.json";
import mayichiTeam from "../../utils/jsonData/mayichiTeam.json";
import merySoldierTeam from "../../utils/jsonData/merySoldierTeam.json";
import revenTeam from "../../utils/jsonData/revenTeam.json";
import richMCTeam from "../../utils/jsonData/richMCTeam.json";
import silithurTeam from "../../utils/jsonData/silithurTeam.json";
import werlybTeam from "../../utils/jsonData/werlybTeam.json";

function Main() {
  const streamerTeams = [
    cristininiTeam,
    anderTeam,
    barbeTeam,
    chusoTeam,
    elXokasTeam,
    felipezTeam,
    folagorTeam,
    ibaiTeam,
    lmdShowTeam,
    maximusTeam,
    mayichiTeam,
    merySoldierTeam,
    revenTeam,
    richMCTeam,
    silithurTeam,
    werlybTeam,
  ];

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
          <div class="col-span-3">
            {streamerTeams.map((data, index) => {
              return <Card data={data}></Card>;
            })}
            <Footer></Footer>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
