import React, { useContext } from "react";
import { ContextAll } from "../context/context";

import {
  ParcelNumber2,
  ParcelSubnumber2,
  CadastralMunicipality2,
} from "../inputs/inputs";

const Parcel = ({ setNumber3 }) => {
  const { language } = useContext(ContextAll);
  return (
    <div className="relative">
      <span
        className={`iks transition-all duration-200 ease-out rotate-45 hover:text-[#ee3b47] hover:scale-125 absolute top-0 right-0 rounded-full mx-auto w-[25px] h-[25px] bg-[#fff] text-[#ee3b47] lg:text-[#6b7280] text-2xl pb-1 font-bold flex items-center justify-center cursor-pointer`}
        title={`${
          language === "cir" ? "Поништи парцелу 3" : "Poništi parcelu 3"
        }`}
        onClick={() => setNumber3(false)}
      >
        +
      </span>
      <h2 className="text-center mt-2 mb-5 text-md">
        {language === "cir" ? "Парцела 3" : "Parcela 3"}
      </h2>
      <div className="flex gap-x-4 w-full h-[75px]">
        <ParcelNumber2 />
        <ParcelSubnumber2 />
      </div>
      <CadastralMunicipality2 />
    </div>
  );
};

export default Parcel;
