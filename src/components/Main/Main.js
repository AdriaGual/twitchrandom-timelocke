import React from "react";
import topRight from "../../assets/images/topright.png";
import Card from "../Card/Card";
import Footer from "../../components/Footer/Footer";
import sharknessTeam from "../../utils/jsonData/sharknessTeam.json";
import anuhiuTeam from "../../utils/jsonData/anuhiuTeam.json";
import arocetTeam from "../../utils/jsonData/arocetTeam.json";
import comandanteShepardTeam from "../../utils/jsonData/comandanteShepardTeam.json";
import streamfranTeam from "../../utils/jsonData/streamfranTeam.json";
import hatositoTeam from "../../utils/jsonData/hatositoTeam.json";
import moonxwisherTeam from "../../utils/jsonData/moonxwisherTeam.json";
import kiarafeyTeam from "../../utils/jsonData/kiarafeyTeam.json";
import piponoLauraTeam from "../../utils/jsonData/piponoLauraTeam.json";
import matyCyndaPokeTeam from "../../utils/jsonData/matyCyndaPokeTeam.json";
import mikuchinatsuTeam from "../../utils/jsonData/mikuchinatsuTeam.json";
import lisRudyTeam from "../../utils/jsonData/lisRudyTeam.json";
import aquiNoEstaPattTeam from "../../utils/jsonData/aquiNoEstaPattTeam.json";
import yastMeTeam from "../../utils/jsonData/yastMeTeam.json";
import zetaemeTeam from "../../utils/jsonData/zetaemeTeam.json";
import zigredBTeam from "../../utils/jsonData/zigredBTeam.json";

function Main() {
  const streamerTeams = [
    sharknessTeam,
    anuhiuTeam,
    arocetTeam,
    comandanteShepardTeam,
    streamfranTeam,
    hatositoTeam,
    moonxwisherTeam,
    kiarafeyTeam,
    piponoLauraTeam,
    matyCyndaPokeTeam,
    mikuchinatsuTeam,
    lisRudyTeam,
    aquiNoEstaPattTeam,
    yastMeTeam,
    zetaemeTeam,
    zigredBTeam,
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
