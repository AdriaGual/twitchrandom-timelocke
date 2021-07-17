import React from "react";
import topRight from "../../assets/images/topright.png";
import Card from "../Card/Card";
import Footer from "../../components/Footer/Footer";
import mikanHelenTeam from "../../utils/jsonData/mikanHelenTeam.json";
import tanakaHxTeam from "../../utils/jsonData/tanakaHxTeam.json";
import hatositoTeam from "../../utils/jsonData/hatositoTeam.json";
import mennshyTeam from "../../utils/jsonData/mennshyTeam.json";
import soulofFarmingTeam from "../../utils/jsonData/soulofFarmingTeam.json";
import neferfufiTeam from "../../utils/jsonData/neferfufiTeam.json";
import alejandroGuiradoTeam from "../../utils/jsonData/alejandroGuiradoTeam.json";
import mirianAragundeTeam from "../../utils/jsonData/mirianAragundeTeam.json";
import kilzanGGTeam from "../../utils/jsonData/kilzanGGTeam.json";
import sweetAnaisTeam from "../../utils/jsonData/sweetAnaisTeam.json";
import marcRemasteredTeam from "../../utils/jsonData/marcRemasteredTeam.json";
import achamasterTeam from "../../utils/jsonData/achamasterTeam.json";
import luciKonekoTeam from "../../utils/jsonData/luciKonekoTeam.json";
import smashPlays1999Team from "../../utils/jsonData/smashPlays1999Team.json";
import miriamHyruleTeam from "../../utils/jsonData/miriamHyruleTeam.json";
import tokuDokuTeam from "../../utils/jsonData/tokuDokuTeam.json";
import imocadeTeam from "../../utils/jsonData/imocadeTeam.json";
import srdelordranTeam from "../../utils/jsonData/srdelordranTeam.json";
import mikuchinatsuTeam from "../../utils/jsonData/mikuchinatsuTeam.json";
import onibigamesTeam from "../../utils/jsonData/onibigamesTeam.json";
import deoreTeam from "../../utils/jsonData/deoreTeam.json";
import shu_rTeam from "../../utils/jsonData/shu_rTeam.json";
import cxsmicGirlTeam from "../../utils/jsonData/cxsmicGirlTeam.json";
import mellaman_alTeam from "../../utils/jsonData/mellaman_alTeam.json";
import renzoxrockTeam from "../../utils/jsonData/renzoxrockTeam.json";
import gbatalla8Team from "../../utils/jsonData/gbatalla8Team.json";
import urisiaBeropenTeam from "../../utils/jsonData/urisiaBeropenTeam.json";
import beectorTeam from "../../utils/jsonData/beectorTeam.json";
import baruYukyTeam from "../../utils/jsonData/baruYukyTeam.json";
import antidothTeam from "../../utils/jsonData/antidothTeam.json";
import yurikoxTeam from "../../utils/jsonData/yurikoxTeam.json";

function Main() {
  const streamerTeams = [
    mikanHelenTeam,
    tanakaHxTeam,
    hatositoTeam,
    mennshyTeam,
    soulofFarmingTeam,
    neferfufiTeam,
    alejandroGuiradoTeam,
    mirianAragundeTeam,
    kilzanGGTeam,
    sweetAnaisTeam,
    marcRemasteredTeam,
    achamasterTeam,
    luciKonekoTeam,
    smashPlays1999Team,
    miriamHyruleTeam,
    tokuDokuTeam,
    imocadeTeam,
    srdelordranTeam,
    mikuchinatsuTeam,
    onibigamesTeam,
    deoreTeam,
    shu_rTeam,
    cxsmicGirlTeam,
    mellaman_alTeam,
    renzoxrockTeam,
    gbatalla8Team,
    urisiaBeropenTeam,
    beectorTeam,
    baruYukyTeam,
    antidothTeam,
    yurikoxTeam,
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
