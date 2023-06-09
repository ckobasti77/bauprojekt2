import React, { useState, useContext, useEffect, useRef } from "react";
import { ContextAll } from "../context/context";

import { warning } from "../assets/assets";

const ParcelSubnumber = () => {
  const { language, setParcelSubnumber4 } = useContext(ContextAll);

  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (value.length > 5) {
      if (language === "cir") {
        setError("Максимум 5 карактера.");
      } else {
        setError("Maksimum 5 karaktera.");
      }
    } else {
      setError("");
    }
  }, [language, value]);

  useEffect(() => {
    setValue('');
  }, [language]);

  const inputRef = useRef(null);
  
  function handleKeyDown(event) {
    // dozvoli unos negativnog predznaka samo ako je prva cifra
    if (event.key === '-' && inputRef.current.selectionStart !== 0) {
      event.preventDefault();
    }

    // dozvoli unos cifara i dozvoljene tipke
    if (!/[0-9]/.test(event.key) && !['ArrowLeft', 'ArrowRight', 'Backspace', 'Delete', 'Tab'].includes(event.key)) {
      event.preventDefault();
    }
  }

  function handlePaste(event) {
    const pastedData = event.clipboardData.getData('text/plain');

    // dozvoli samo cifre u zalijepi sadržaj
    if (!/^\d*$/.test(pastedData)) {
      event.preventDefault();
    }
  }

  return (
    <div className="relative w-3/6 z-0 group">
      <input
        type="number"
        name="Podbroj parcele 4"
        id="floating_filled_parcel_subnumber4"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setParcelSubnumber4(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        ref={inputRef}
        inputMode="numeric"
        className={`${
          error.length > 0 && value.length > 0
            ? "border-red-600 focus:border-red-600"
            : "border-gray-300 focus:border-[#2EA295]"
        } block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-300 border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-[#2EA295] peer`}
        placeholder=" "
      />
      <label
        htmlFor="floating_filled_parcel_subnumber4"
        className={`${
          error.length > 0 && value.length > 0
            ? "text-red-600 peer-focus:text-red-600"
            : "text-gray-500 peer-focus:text-[#2EA295]"
        } absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}      >
        {language === "cir" ? "Подброј парцеле" : "Podbroj parcele"}
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

export default ParcelSubnumber;
