import React, { useState, useContext } from "react";
import { LanguageContext } from "../context/context";

import { Parcel, Parcel2, Parcel3 } from "./components";

const Parcels = () => {
  const { language } = useContext(LanguageContext);

  const [number2, setNumber2] = useState(false);
  const [number3, setNumber3] = useState(false);

  return (
    <>
      <Parcel />
      <span
        className={`${number2 ? 'iks' : 'plus'} rounded-full mx-auto w-[40px] h-[40px] bg-[#fff] text-[#6b7280] text-5xl pb-1 font-bold flex items-center justify-center cursor-pointer`}
        title={`${
          language === "cir"
            ? "Додај још једну парцелу"
            : "Dodaj još jednu parcelu"
        }`}
        onClick={() => setNumber2(true)}
      >
        +
      </span>
      {number2 && (
        <>
          <Parcel2 />
          <span
            className={`${number2 ? 'iks' : 'plus'} rounded-full mx-auto w-[40px] h-[40px] bg-[#fff] text-[#6b7280] text-5xl pb-1 font-bold flex items-center justify-center cursor-pointer`}
            title={`${
              number2 ? (
                language === "cir"
                  ? "Обриши парцелу 2"
                  : "Obriši parcelu 2"
              ) : (
                language === "cir"
                  ? "Додај још једну парцелу"
                  : "Dodaj još jednu parcelu"
              )
            }`}
            onClick={() => setNumber3(true)}
          >
            +
          </span>
        </>
      )}
      {number3 && <Parcel3 />}
    </>
  );
};

export default Parcels;
