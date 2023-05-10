import React, { useContext, useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ContextAll } from "../context/context";

const Admin = ({ setShowAdmin, setShowTable, setIsAdmin }) => {
  const { language } = useContext(ContextAll);

  const [ime, setIme] = useState("");
  const [sifra, setSifra] = useState("");

  function handleLogin() {
    if (ime === "bau2023" && sifra === "projekt") {
      setIsAdmin(true);
      localStorage.setItem("isAdmin", true);
    } else {
      if (language === "cir") {
        alert("Неважећи подаци.");
      } else {
        alert("Nevažeći podaci.");
      }
    }
  }

  return (
    <div className="uplatnica-bg fixed w-screen h-screen z-[99999] flex items-center justify-center">
      <button
        className="close-uplatnica absolute right-[22px] top-[15px] text-white font-bold text-2xl transform translate-y-[3px] hover:text-[#2ea295] hover:translate-y-[0px] transition-all duration-150"
        onClick={(e) => {
          e.preventDefault();
          setShowAdmin(false);
        }}
      >
        <AiOutlineCloseCircle />
      </button>
      <form className="flex flex-col gap-2 w-2/6">
        <div className="relative">
          <input
            autoFocus
            onChange={(e) => setIme(e.target.value)}
            type="text"
            id="floating_filled_user"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_filled_user"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            {language === "cir" ? "Корисничко име" : "Korisničko ime"}
          </label>
        </div>
        <div className="relative">
          <input
            onChange={(e) => setSifra(e.target.value)}
            type="password"
            id="floating_filled_sifra"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_filled_sifra"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            {language === "cir" ? "Шифра" : "Šifra"}
          </label>
        </div>
        <button
          type="submit"
          className="rounded-lg block text-center bg-slate-600 hover:bg-slate-500 transition-all duration-100 px-6 py-1 cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            handleLogin()
          }}
        >
          {language === "cir" ? "Улогуј се" : "Uloguj se"}
        </button>
      </form>
    </div>
  );
};

export default Admin;
