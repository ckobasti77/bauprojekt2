import React, { useContext } from "react";
import { ContextAll } from "../context/context";

import { RequestType, LocationInfo } from "../inputs/inputs";
import { Parcels } from "./components";

const Request = () => {
  const { language } = useContext(ContextAll);

  return (
    <div className="w-full">
      <h2 className="text-center mt-2 mb-5 text-4xl">
        {language === "cir" ? "Захтев" : "Zahtev"}
      </h2>
      <Parcels />
      <RequestType />
    </div>
  );
};

export default Request;
