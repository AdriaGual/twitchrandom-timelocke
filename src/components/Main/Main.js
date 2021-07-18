import React from "react";
import topRight from "../../assets/images/topright.png";
import Card from "../Card/Card";
import Footer from "../../components/Footer/Footer";
import hatositoTeam from "../../utils/jsonData/hatositoTeam.json";
import mennshyTeam from "../../utils/jsonData/mennshyTeam.json";
import soulofFarmingTeam from "../../utils/jsonData/soulofFarmingTeam.json";
import alejandroGuiradoTeam from "../../utils/jsonData/alejandroGuiradoTeam.json";
import kilzanGGTeam from "../../utils/jsonData/kilzanGGTeam.json";
import sweetAnaisTeam from "../../utils/jsonData/sweetAnaisTeam.json";
import luciKonekoTeam from "../../utils/jsonData/luciKonekoTeam.json";
import smashPlays1999Team from "../../utils/jsonData/smashPlays1999Team.json";
import miriamHyruleTeam from "../../utils/jsonData/miriamHyruleTeam.json";
import tokuDokuTeam from "../../utils/jsonData/tokuDokuTeam.json";
import imocadeTeam from "../../utils/jsonData/imocadeTeam.json";
import mikuchinatsuTeam from "../../utils/jsonData/mikuchinatsuTeam.json";
import onibigamesTeam from "../../utils/jsonData/onibigamesTeam.json";
import cxsmicGirlTeam from "../../utils/jsonData/cxsmicGirlTeam.json";
import beectorTeam from "../../utils/jsonData/beectorTeam.json";

function Main() {
  const streamerTeams = [
    hatositoTeam,
    mennshyTeam,
    soulofFarmingTeam,
    alejandroGuiradoTeam,
    kilzanGGTeam,
    sweetAnaisTeam,
    luciKonekoTeam,
    smashPlays1999Team,
    miriamHyruleTeam,
    tokuDokuTeam,
    imocadeTeam,
    mikuchinatsuTeam,
    onibigamesTeam,
    cxsmicGirlTeam,
    beectorTeam,
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
