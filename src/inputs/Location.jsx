import React, { useState, useContext, useEffect } from "react";
import { ContextAll } from "../context/context";

import { warning } from "../assets/assets";

const Location = () => {
  const { language, setLocation } = useContext(ContextAll);

  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setError("")
    setValue('');
    setLocation('');
  }, [language]);

  return (
    <div className="relative w-full z-0 group h-[75px]">
      <input
        type="text"
        name="Mesto"
        id="floating_filled_location"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setLocation(e.target.value);
        }}
        onBlur={(e) => {
          /^([А-ЩЪЬЈЉЊЋЂЏ][а-щъьюљњћђџ -_]{0,27}|[A-ZČĆŠĐŽ][a-zčćšđž -_]{0,27})( [А-ЩЪЬЈЉЊЋЂЏ][а-щъьюљњћђџ -_]{0,27}| [A-ZČĆŠĐŽ][a-zčćšđž -_]{0,27}){0,3}$/.test(e.target.value)
            ? setError("")
            : language === "cir"
            ? setError("Унесите валидну локацију.")
            : setError("Unesite validnu lokaciju.");
        }}
        className={`${
          error.length > 0 && value.length > 0
            ? "border-red-600 focus:border-red-600"
            : " border-gray-300 focus:border-[#2EA295]"
        } block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-300 border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-[#2EA295] peer`}
        placeholder=" "
        required
      />
      <label
        htmlFor="floating_filled_location"
        className={`${
          error.length > 0 && value.length > 0
            ? "text-red-600 peer-focus:text-red-600"
            : "text-gray-500 peer-focus:text-[#2EA295]"
        } absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}
      >
        {language === "cir" ? "Место" : "Mesto"}
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

export default Location;
