import React, { useContext } from "react";
import { ContextAll } from "../context/context";

import {
  ParcelNumber,
  ParcelSubnumber,
  CadastralMunicipality,
} from "../inputs/inputs";

const Parcel = () => {
  const { language } = useContext(ContextAll);

  return (
    <div className="parc">
      <h2 className="text-center mt-2 mb-5 text-md">
        {language === "cir" ? "Парцела 1" : "Parcela 1"}
      </h2>
      <div className="flex gap-x-4 w-full h-[75px]">
        <ParcelNumber />
        <ParcelSubnumber />
      </div>
      <CadastralMunicipality />
    </div>
  );
};

export default Parcel;
