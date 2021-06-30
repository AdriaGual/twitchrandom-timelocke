import React from "react";
import topRight from "../../assets/images/topright.png";
import Footer from "../Footer/Footer";
import { Bracket } from "react-brackets";

function TopCut() {
  const rounds = [
    {
      title: "Top 16",
      seeds: [
        {
          id: 1,
          date: "Miércoles, 14 de Julio",
          teams: [{ name: "Anuhiu" }, { name: "Arocet" }],
        },
        {
          id: 2,
          date: "Miércoles, 14 de Julio",
          teams: [{ name: "Comandante Shepard" }, { name: "AquiNoEstaPatt" }],
        },
        {
          id: 3,
          date: "Miércoles, 14 de Julio",
          teams: [{ name: "Hatosito" }, { name: "Kiarafey" }],
        },
        {
          id: 3,
          date: "Miércoles, 14 de Julio",
          teams: [{ name: "Zigred" }, { name: "Zetaeme" }],
        },
        {
          id: 1,
          date: "Jueves, 15 de Julio",
          teams: [{ name: "YastMe" }, { name: "LisRudy" }],
        },
        {
          id: 2,
          date: "Jueves, 15 de Julio",
          teams: [{ name: "MatyCyndaPoke" }, { name: "Streamfran" }],
        },
        {
          id: 3,
          date: "Jueves, 15 de Julio",
          teams: [{ name: "SharknessVS" }, { name: "Pipono Laura" }],
        },
        {
          id: 3,
          date: "Jueves, 15 de Julio",
          teams: [{ name: "Moonxwisher" }, { name: "Mikuchinatsu" }],
        },
      ],
    },
    {
      title: "Top 8",
      seeds: [
        {
          id: 3,
          date: "Viernes, 16 de Julio",
          teams: [{ name: "-" }, { name: "-" }],
        },
        {
          id: 3,
          date: "Viernes, 16 de Julio",
          teams: [{ name: "-" }, { name: "-" }],
        },
        {
          id: 3,
          date: "Viernes, 16 de Julio",
          teams: [{ name: "-" }, { name: "-" }],
        },
        {
          id: 3,
          date: "Viernes, 16 de Julio",
          teams: [{ name: "-" }, { name: "-" }],
        },
      ],
    },
    {
      title: "Semifinales",
      seeds: [
        {
          id: 3,
          date: "Sábado, 17 de Julio",
          teams: [{ name: "-" }, { name: "-" }],
        },
        {
          id: 3,
          date: "Sábado, 17 de Julio",
          teams: [{ name: "-" }, { name: "-" }],
        },
      ],
    },
    {
      title: "Finales",
      seeds: [
        {
          id: 3,
          date: "Domingo, 18 de Julio",
          teams: [{ name: "-" }, { name: "-" }],
        },
      ],
    },
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
            <div className="py-6">
              <Bracket rounds={rounds} />
            </div>

            <Footer></Footer>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default TopCut;
