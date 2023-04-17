import React, { useState, useContext, useEffect } from "react";
import { LanguageContext, NameContext } from "../context/context";

import { warning } from "../assets/assets";

const Name = () => {
  const { language } = useContext(LanguageContext);
  const { name, setName } = useContext(NameContext);

  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (language === "cir") {
      setError("Унесите валидно име.");
    } else {
      setError("Unesite validno ime.");
    }
  }, [language]);

  return (
    <div className="relative w-full z-0 group h-[75px]">
      <input
        type="text"
        name="Ime"
        id="floating_filled_name"
        value={value}
        onChange={(e) => {
          setName(e.target.value);
          setValue(e.target.value);
          /^([А-ЩЪЬЈЉЊЋЂЏ][а-щъьюљњћђџ]{1,29}|[A-ZČĆŠĐŽ][a-zčćšđž]{1,29})$/.test(e.target.value)
            ? setError("")
            : language === "cir"
            ? setError("Унесите валидно име.")
            : setError("Unesite validno ime.");
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
        htmlFor="floating_filled_name"
        className={`${
          error.length > 0 && value.length > 0
            ? "text-red-600 peer-focus:text-red-600"
            : "text-gray-500 peer-focus:text-[#2EA295]"
        } absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}
      >
        {language === "cir" ? "Име" : "Ime"}
      </label>
      <span
        className={`${
          error.length > 0 && value.length > 0 ? "visible" : "invisible"
        } text-[#ee3b47] text-[13px] ml-1 error-value flex my-[0.5px] tracking-[0.5px]`}
      >
        <img src={warning} alt="warning" className="w-[16px]" /> {error}
      </span>
    </div>
  );
};

export default Name;
