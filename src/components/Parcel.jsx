import React, { useContext } from "react";
import { LanguageContext } from "../context/context";

import {
  ParcelNumber,
  ParcelSubnumber,
  CadastralMunicipality,
} from "../inputs/inputs";

const Parcel = () => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <h2 className="text-center mt-2 mb-5 text-md">
        {language === "cir" ? "Парцела 1" : "Parcela 1"}
      </h2>
      <div className="flex gap-x-4 w-full h-[75px]">
        <ParcelNumber />
        <ParcelSubnumber />
      </div>
      <CadastralMunicipality />
    </>
  );
};

export default Parcel;
