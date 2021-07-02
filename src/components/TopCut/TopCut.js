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
          teams: [{ name: "Shepard" }, { name: "YastMe" }],
        },
        {
          id: 2,
          date: "Miércoles, 14 de Julio",
          teams: [{ name: "Anuhiu" }, { name: "Laura Pipono" }],
        },
        {
          id: 3,
          date: "Miércoles, 14 de Julio",
          teams: [{ name: "Sharkness" }, { name: "Miku" }],
        },
        {
          id: 3,
          date: "Miércoles, 14 de Julio",
          teams: [{ name: "Fran" }, { name: "Hatosito" }],
        },
        {
          id: 1,
          date: "Jueves, 15 de Julio",
          teams: [{ name: "Kiara" }, { name: "Nia" }],
        },
        {
          id: 2,
          date: "Jueves, 15 de Julio",
          teams: [{ name: "Patt" }, { name: "Zigred" }],
        },
        {
          id: 3,
          date: "Jueves, 15 de Julio",
          teams: [{ name: "Zetaeme" }, { name: "Arocet" }],
        },
        {
          id: 3,
          date: "Jueves, 15 de Julio",
          teams: [{ name: "Maty" }, { name: "Ken" }],
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
