import React, { useContext } from "react";
import { ContextAll } from "../context/context";
import { BsArrowRight } from "react-icons/bs";

import Navbar from "./Navbar";

const Start = ({ setShowStart }) => {
  const { language } = useContext(ContextAll);

  return (
    <>
      <div className="uplatnica-bg w-screen h-screen fixed z-[999999]">
      <Navbar />
        <div className="bg-bg w-screen lg:w-2/6 rounded-2xl border-2 p-6 flex flex-col justify-between m-auto">
          <h1 className="text-4xl text-center mb-4">
            {language === "cir"
              ? "Дошли сте на сајт за издавање ИНФОРМАЦИЈЕ О ЛОКАЦИЈИ"
              : "Došli ste na sajt za izdavanje INFORMACIJE O LOKACIJI"}
          </h1>
          <p className="my-2 text-2xl">
            {language === "cir"
              ? "Информација о локацији садржи податке о могућностима и ограничењима градње на катастарској парцели, односно на више катастарских парцела, на основу планског документа."
              : "Informacija o lokaciji sadrži podatke o mogućnostima i ograničenjima gradnje na katastarskoj parceli, odnosno na više katastarskih parcela, na osnovu planskog dokumenta."}
          </p>
          <p className="my-2 text-2xl">
            {language === "cir"
              ? "На основу овог документа није могућа изградња објекта."
              : "Na osnovu ovog dokumenta nije moguća izgradnja objekta."}
          </p>
          <p className="my-2 text-2xl">
            {language === "cir"
              ? "Захтев може поднети свако заинтересовано физичко лице."
              : "Zahtev može podneti svako zainteresovano fizičko lice."}
          </p>
          <button
            onClick={() => setShowStart(false)}
            className="block rounded-lg bg-[#2ea295] mx-auto mt-6 px-4 py-2 hover:bg-[#2ea295]/75 transition-all duration-200 group"
          >
            {language === "cir" ? "Попуни захтев" : "Popuni zahtev"}
            <BsArrowRight className="inline ml-2 group-hover:ml-4 transition-all duration-200" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Start;
