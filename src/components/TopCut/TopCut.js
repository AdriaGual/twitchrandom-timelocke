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
          date: "Lunes, 2 de Agosto",
          teams: [
            { name: "IMOCADE - HELENMIKAN" },
            { name: "SOULOFFARMING - TANAKAHX" },
          ],
        },
        {
          id: 2,
          date: "Lunes, 2 de Agosto",
          teams: [
            { name: "SMASHANDPLAYS - YUKYBARU" },
            { name: "HATOSITO - MELLMAN_AL" },
          ],
        },
        {
          id: 3,
          date: "Lunes, 2 de Agosto",
          teams: [
            { name: "HELLBEECTOR - URISIA" },
            { name: "TOKU_DOKU - ACHAMASTER" },
          ],
        },
        {
          id: 3,
          date: "Lunes, 2 de Agosto",
          teams: [
            { name: "KILLZANGG - YURIKOX1618" },
            { name: "SWEETANAÏS - SHU_R" },
          ],
        },
        {
          id: 1,
          date: "Lunes, 2 de Agosto",
          teams: [
            { name: "MENNSHY - NEFERFUFI" },
            { name: "GINEBRA08 - MARCREMASTERED" },
          ],
        },
        {
          id: 2,
          date: "Lunes, 2 de Agosto",
          teams: [
            { name: "ONIBIGAMES - RENZOXROCK" },
            { name: "PONYCORNIO - SRDELORDRAN" },
          ],
        },
        {
          id: 3,
          date: "Lunes, 2 de Agosto",
          teams: [
            { name: "LUCI_KONEKO - ELIRIIN" },
            { name: "AGUIRADO92 - ANDIDOTH" },
          ],
        },
        {
          id: 3,
          date: "Lunes, 2 de Agosto",
          teams: [
            { name: "CXSMIC_GIRL - MIRIANARAGUNDE" },
            { name: "MIKUCHINATSU - DEORE" },
          ],
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
