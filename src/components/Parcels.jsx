import React, { useState, useContext } from "react";
import { ContextAll } from "../context/context";

import { Parcel, Parcel2, Parcel3, Parcel4, Parcel5, Parcel6, Parcel7, Parcel8, Parcel9, Parcel10,  } from "./components";

const Parcels = () => {
  const { language } = useContext(ContextAll);

  const [number2, setNumber2] = useState(false);
  const [number3, setNumber3] = useState(false);
  const [number4, setNumber4] = useState(false);
  const [number5, setNumber5] = useState(false);
  const [number6, setNumber6] = useState(false);
  const [number7, setNumber7] = useState(false);
  const [number8, setNumber8] = useState(false);
  const [number9, setNumber9] = useState(false);
  const [number10, setNumber10] = useState(false);

  return (
    <>
      <Parcel />
      {!number2 && !number3 && (
        <span
          className={`plus transition-all duration-200 ease-out hover:text-[#2EA295] hover:scale-125 rounded-full mx-auto w-[40px] h-[40px] bg-[#fff] text-[#6b7280] text-5xl pb-1 font-bold flex items-center justify-center cursor-pointer`}
          title={`${
            language === "cir"
              ? "Додај још једну парцелу"
              : "Dodaj još jednu parcelu"
          }`}
          onClick={() => setNumber2(true)}
        >
          +
        </span>
      )}
      {number2 && <Parcel2 setNumber2={setNumber2} number3={number3} />}
      {number2 && !number3 && (
        <span
          className={`plus iks transition-all duration-200 ease-out hover:text-[#2EA295] hover:scale-125 rounded-full mx-auto w-[40px] h-[40px] bg-[#fff] text-[#6b7280] text-5xl pb-1 font-bold flex items-center justify-center cursor-pointer`}
          title={`${
            language === "cir"
              ? "Додај још једну парцелу"
              : "Dodaj još jednu parcelu"
          }`}
          onClick={() => setNumber3(true)}
        >
          +
        </span>
      )}
      {number3 && <Parcel3 setNumber3={setNumber3} number4={number4} />}
      {number3 && !number4 && (
        <span
          className={`plus iks transition-all duration-200 ease-out hover:text-[#2EA295] hover:scale-125 rounded-full mx-auto w-[40px] h-[40px] bg-[#fff] text-[#6b7280] text-5xl pb-1 font-bold flex items-center justify-center cursor-pointer`}
          title={`${
            language === "cir"
              ? "Додај још једну парцелу"
              : "Dodaj još jednu parcelu"
          }`}
          onClick={() => setNumber4(true)}
        >
          +
        </span>
      )}
      {number4 && <Parcel4 setNumber4={setNumber4} number5={number5} />}
      {number4 && !number5 && (
        <span
          className={`plus iks transition-all duration-200 ease-out hover:text-[#2EA295] hover:scale-125 rounded-full mx-auto w-[40px] h-[40px] bg-[#fff] text-[#6b7280] text-5xl pb-1 font-bold flex items-center justify-center cursor-pointer`}
          title={`${
            language === "cir"
              ? "Додај још једну парцелу"
              : "Dodaj još jednu parcelu"
          }`}
          onClick={() => setNumber5(true)}
        >
          +
        </span>
      )}
      {number5 && <Parcel5 setNumber5={setNumber5} number6={number6} />}
      {number5 && !number6 && (
        <span
          className={`plus iks transition-all duration-200 ease-out hover:text-[#2EA295] hover:scale-125 rounded-full mx-auto w-[40px] h-[40px] bg-[#fff] text-[#6b7280] text-5xl pb-1 font-bold flex items-center justify-center cursor-pointer`}
          title={`${
            language === "cir"
              ? "Додај још једну парцелу"
              : "Dodaj još jednu parcelu"
          }`}
          onClick={() => setNumber6(true)}
        >
          +
        </span>
      )}
      {number6 && <Parcel6 setNumber6={setNumber6} number7={number7} />}
      {number6 && !number7 && (
        <span
          className={`plus iks transition-all duration-200 ease-out hover:text-[#2EA295] hover:scale-125 rounded-full mx-auto w-[40px] h-[40px] bg-[#fff] text-[#6b7280] text-5xl pb-1 font-bold flex items-center justify-center cursor-pointer`}
          title={`${
            language === "cir"
              ? "Додај још једну парцелу"
              : "Dodaj još jednu parcelu"
          }`}
          onClick={() => setNumber7(true)}
        >
          +
        </span>
      )}
      {number7 && <Parcel7 setNumber7={setNumber7} number8={number8} />}
      {number7 && !number8 && (
        <span
          className={`plus iks transition-all duration-200 ease-out hover:text-[#2EA295] hover:scale-125 rounded-full mx-auto w-[40px] h-[40px] bg-[#fff] text-[#6b7280] text-5xl pb-1 font-bold flex items-center justify-center cursor-pointer`}
          title={`${
            language === "cir"
              ? "Додај још једну парцелу"
              : "Dodaj još jednu parcelu"
          }`}
          onClick={() => setNumber8(true)}
        >
         +
        </span>
      )}
      {number8 && <Parcel8 setNumber8={setNumber8} number9={number9} />}
      {number8 && !number9 && (
        <span
          className={`plus iks transition-all duration-200 ease-out hover:text-[#2EA295] hover:scale-125 rounded-full mx-auto w-[40px] h-[40px] bg-[#fff] text-[#6b7280] text-5xl pb-1 font-bold flex items-center justify-center cursor-pointer`}
          title={`${
            language === "cir"
              ? "Додај још једну парцелу"
              : "Dodaj još jednu parcelu"
          }`}
          onClick={() => setNumber9(true)}
        >
         +
        </span>
      )}
      {number9 && <Parcel9 setNumber9={setNumber9} number10={number10} />}
      {number9 && !number10 && (
        <span
          className={`plus iks transition-all duration-200 ease-out hover:text-[#2EA295] hover:scale-125 rounded-full mx-auto w-[40px] h-[40px] bg-[#fff] text-[#6b7280] text-5xl pb-1 font-bold flex items-center justify-center cursor-pointer`}
          title={`${
            language === "cir"
              ? "Додај још једну парцелу"
              : "Dodaj još jednu parcelu"
          }`}
          onClick={() => setNumber10(true)}
        >
         +
        </span>
      )}
      {number10 && <Parcel10 setNumber10={setNumber10} />}
    </>
  );
};

export default Parcels;
