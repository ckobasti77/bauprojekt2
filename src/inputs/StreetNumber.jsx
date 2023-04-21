import React, { useState, useContext, useEffect } from "react";
import { ContextAll } from "../context/context";

import { warning } from "../assets/assets";

const StreetNumber = () => {
  const { language, setStreetNumber } = useContext(ContextAll);

  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (language === "cir") {
      setError("Унесите валидан кућни број.");
    } else {
      setError("Unesite validan kućni broj.");
    }
    setValue('');
  }, [language]);

  return (
    <div className="relative w-4/12">
      <input
        type="text"
        name="Kućni broj"
        id="floating_filled_street_number"
        value={value}
        onChange={(e) => {
          setStreetNumber(e.target.value);
          setValue(e.target.value);
          /^(\d+[А-ЩЪЬЈЉЊЋЏа-шљњћџA-Za-z]?|\d+[а-шА-ЩЪЬЈЉЊЋЏ]\d{0,3}|bb|BB|бб|ББ)$/.test(e.target.value)
            ? setError("")
            : language === "cir"
            ? setError("Унесите валидан кућни број.")
            : setError("Unesite validan kućni broj.");
        }}
        className={`${
          error.length > 0 && value.length > 0
            ? "border-red-600 focus:border-red-600"
            : " border-gray-300 focus:border-[#2EA295]"
        } block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-[#2EA295] peer`}
        placeholder=" "
        required
      />
      <label
        htmlFor="floating_filled_street_number"
        className={`${
          error.length > 0 && value.length > 0
            ? "text-red-600 peer-focus:text-red-600"
            : "text-gray-500 peer-focus:text-[#2EA295]"
        } absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}
      >
        {language === "cir" ? "Кућни број" : "Kućni broj"}
      </label>
      <p
        className={`${
          error.length > 0 && value.length > 0 ? "visible" : "hidden"
        } text-[#ee3b47] inline-flex hyphens-auto text-[13px] ml-1 error-value my-[0.5px] tracking-[0.5px]`}
      >
        <img src={warning} alt="warning" className="w-[16px] object-contain" /> {error}
      </p>
    </div>
  );
};

export default StreetNumber;
