import React, { useContext } from "react";
import { ContextAll } from "../context/context";

import {
  ParcelNumber4,
  ParcelSubnumber4,
  CadastralMunicipality4,
} from "../inputs/inputs";

const Parcel = ({ setNumber4, number5 }) => {
  const { language } = useContext(ContextAll);
  return (
    <div className="relative parc">
      <span
        className={`iks ${number5 ? 'cursor-default' : 'transition-all duration-200 ease-out hover:text-[#ee3b47] hover:scale-125 cursor-pointer hover:select-none'} rotate-45 absolute top-0 right-0 rounded-full mx-auto w-[25px] h-[25px] bg-[#fff] text-[#ee3b47] lg:text-[#6b7280] text-2xl pb-1 font-bold flex items-center justify-center`}
        title={`${
          language === "cir" ? "Поништи парцелу 4" : "Poništi parcelu 4"
        }`}
        onClick={() => {
          !number5 && setNumber4(false)
        }}
      >
        +
      </span>
      <h2 className="text-center mt-2 mb-5 text-md">
        {language === "cir" ? "Парцела 4" : "Parcela 4"}
      </h2>
      <div className="flex gap-x-4 w-full h-[75px]">
        <ParcelNumber4 />
        <ParcelSubnumber4 />
      </div>
      <CadastralMunicipality4 />
    </div>
  );
};

export default Parcel;
