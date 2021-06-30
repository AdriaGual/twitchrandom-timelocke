import React from "react";
import topRight from "../../assets/images/topright.png";
import Footer from "../../components/Footer/Footer";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Novedades() {
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
            <div class="grid grid-cols-1 lg:grid-cols-2 py-4">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="SharknessVS"
                options={{ height: 800 }}
              />
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="ZETAEME_YOUTUBE"
                options={{ height: 800 }}
              />
            </div>
            <Footer></Footer>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Novedades;
