import React from "react";
import colaborators from "../../utils/colaborators.json";
import Footer from "../../components/Footer/Footer";
import topRight from "../../assets/images/topright.png";
import { RiTwitterLine } from "react-icons/ri";

function Colaboradores() {
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
            <div className="py-10">
              {colaborators.map((data, index) => {
                return (
                  <div className="flex gap-4 font-semibold">
                    {data.media === "Twitter" ? (
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={data.colaboratorLink}
                      >
                        <RiTwitterLine
                          className="text-black"
                          size={20}
                        ></RiTwitterLine>
                      </a>
                    ) : (
                      ""
                    )}{" "}
                    <p>{data.colaboratorName}</p>
                  </div>
                );
              })}
            </div>

            <Footer></Footer>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Colaboradores;
