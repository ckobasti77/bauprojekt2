import React, { useContext } from "react";
import { LanguageContext } from "../context/context";

import {
  ParcelNumber2,
  ParcelSubnumber2,
  CadastralMunicipality2,
} from "../inputs/inputs";

const Parcel = () => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <h2 className="text-center mt-2 mb-5 text-md">
        {language === "cir" ? "Парцела 2" : "Parcela 2"}
      </h2>
      <div className="flex gap-x-4 w-full h-[75px]">
        <ParcelNumber2 />
        <ParcelSubnumber2 />
      </div>
      <CadastralMunicipality2 />
    </>
  );
};

export default Parcel;