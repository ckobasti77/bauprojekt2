import React, { useContext } from "react";
import { ContextAll } from "../context/context";

import {
  ParcelNumber8,
  ParcelSubnumber8,
  CadastralMunicipality8,
} from "../inputs/inputs";

const Parcel = ({ setNumber8, number9 }) => {
  const { language } = useContext(ContextAll);
  return (
    <div className="relative">
      <span
        className={`iks ${number9 ? 'cursor-default' : 'transition-all duration-200 ease-out hover:text-[#ee3b47] hover:scale-125 cursor-pointer hover:select-none'} rotate-45 absolute top-0 right-0 rounded-full mx-auto w-[25px] h-[25px] bg-[#fff] text-[#ee3b47] lg:text-[#6b7280] text-2xl pb-1 font-bold flex items-center justify-center`}
        title={`${
          language === "cir" ? "Поништи парцелу 8" : "Poništi parcelu 8"
        }`}
        onClick={() => {
          !number9 && setNumber8(false)
        }}
      >
        +
      </span>
      <h2 className="text-center mt-2 mb-5 text-md">
        {language === "cir" ? "Парцела 8" : "Parcela 8"}
      </h2>
      <div className="flex gap-x-4 w-full h-[75px]">
        <ParcelNumber8 />
        <ParcelSubnumber8 />
      </div>
      <CadastralMunicipality8 />
    </div>
  );
};

export default Parcel;
