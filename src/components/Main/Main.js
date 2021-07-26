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
import antidothTeam from "../../utils/jsonData/antidothTeam.json";
import mirianaragundeTeam from "../../utils/jsonData/mirianaragundeTeam.json";
import urisiaTeam from "../../utils/jsonData/urisiaTeam.json";
import gbatalla8Team from "../../utils/jsonData/gbatalla8Team.json";
import marcRemasteredTeam from "../../utils/jsonData/marcRemasteredTeam.json";
import mellmanALTeam from "../../utils/jsonData/mellmanALTeam.json";
import helenMikanTeam from "../../utils/jsonData/helenMikanTeam.json";
import yurikoxTeam from "../../utils/jsonData/yurikoxTeam.json";
import eliriinTeam from "../../utils/jsonData/eliriinTeam.json";
import neferfufiTeam from "../../utils/jsonData/neferfufiTeam.json";
import deoreTeam from "../../utils/jsonData/deoreTeam.json";
import srdelordranTeam from "../../utils/jsonData/srdelordranTeam.json";
import renzoxrockTeam from "../../utils/jsonData/renzoxrockTeam.json";
import yukiBaruTeam from "../../utils/jsonData/yukiBaruTeam.json";
import tanakahxTeam from "../../utils/jsonData/tanakahxTeam.json";
import shurTeam from "../../utils/jsonData/shurTeam.json";
import achamasterTeam from "../../utils/jsonData/achamasterTeam.json";

function Main() {
  const streamerTeams = [
    hatositoTeam,
    soulofFarmingTeam,
    alejandroGuiradoTeam,
    kilzanGGTeam,
    sweetAnaisTeam,
    smashPlays1999Team,
    miriamHyruleTeam,
    tokuDokuTeam,
    imocadeTeam,
    mikuchinatsuTeam,
    onibigamesTeam,
    cxsmicGirlTeam,
    beectorTeam,
    antidothTeam,
    mirianaragundeTeam,
    urisiaTeam,
    gbatalla8Team,
    marcRemasteredTeam,
    mellmanALTeam,
    helenMikanTeam,
    yurikoxTeam,
    eliriinTeam,
    neferfufiTeam,
    deoreTeam,
    srdelordranTeam,
    renzoxrockTeam,
    yukiBaruTeam,
    tanakahxTeam,
    shurTeam,
    mennshyTeam,
    luciKonekoTeam,
    achamasterTeam,
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
        <div className="grid grid-cols-5 absolute inset-0">
          <div></div>
          <div className="col-span-3">
            {streamerTeams.map((data, index) => {
              return <Card data={data} key={index}></Card>;
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
