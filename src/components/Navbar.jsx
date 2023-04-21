import React, { useContext } from "react";
import { ContextAll } from "../context/context";

const Navbar = ({ setShowTable, setShowAdmin }) => {
  const { language, setLanguage } = useContext(ContextAll);

  return (
    <div className="navbar w-full flex justify-between px-0 py-3 lg:px-10">
      <div>
        <input
          type="radio"
          name="pismo"
          id="cir"
          defaultChecked
          className="jezik-inputs hidden h-0 w-0"
        />
        <label
          htmlFor="cir"
          className="jezik-labels cursor-pointer mx-2 px-3 py-1 w-[100px] inline-flex items-center justify-center"
          onClick={() => setLanguage("cir")}
        >
          {language === "cir" ? "Ћирилица" : "Ćirilica"}
        </label>
        <input
          type="radio"
          name="pismo"
          id="lat"
          className="jezik-inputs hidden h-0 w-0"
        />
        <label
          htmlFor="lat"
          className="jezik-labels cursor-pointer mx-2 px-3 py-1 w-[100px] inline-flex items-center justify-center"
          onClick={() => setLanguage("lat")}
        >
          {language === "cir" ? "Латиница" : "Latinica"}
        </label>
      </div>
      <span className="rounded-lg bg-slate-600 px-6 py-1 cursor-pointer" onClick={() => setShowAdmin(true)}>Admin</span>
    </div>
  );
};

export default Navbar;
