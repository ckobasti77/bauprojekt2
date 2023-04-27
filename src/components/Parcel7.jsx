import React, { useContext } from "react";
import { ContextAll } from "../context/context";

import {
  ParcelNumber7,
  ParcelSubnumber7,
  CadastralMunicipality7,
} from "../inputs/inputs";

const Parcel = ({ setNumber7, number8 }) => {
  const { language } = useContext(ContextAll);
  return (
    <div className="relative">
      <span
        className={`iks ${number8 ? 'cursor-default' : 'transition-all duration-200 ease-out hover:text-[#ee3b47] hover:scale-125 cursor-pointer hover:select-none'} rotate-45 absolute top-0 right-0 rounded-full mx-auto w-[25px] h-[25px] bg-[#fff] text-[#ee3b47] lg:text-[#6b7280] text-2xl pb-1 font-bold flex items-center justify-center`}
        title={`${
          language === "cir" ? "Поништи парцелу 7" : "Poništi parcelu 7"
        }`}
        onClick={() => {
          !number8 && setNumber7(false)
        }}
      >
        +
      </span>
      <h2 className="text-center mt-2 mb-5 text-md">
        {language === "cir" ? "Парцела 7" : "Parcela 7"}
      </h2>
      <div className="flex gap-x-4 w-full h-[75px]">
        <ParcelNumber7 />
        <ParcelSubnumber7 />
      </div>
      <CadastralMunicipality7 />
    </div>
  );
};

export default Parcel;
