import React, { useContext, useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ContextAll } from "../context/context";


const Admin = ({ setShowAdmin, setShowTable }) => {
  const { language } = useContext(ContextAll);

  const [ime, setIme] = useState('');
  const [sifra, setSifra] = useState('');


  useEffect(() => {
    if(ime === "bau2023" && sifra === "projekt") {
      if(navigator.vibrate) {
        navigator.vibrate(500)
      }
      setShowTable(true);
    }
  }, [ime, sifra])

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
      <div className="flex flex-col gap-2 w-2/6">
        <div class="relative">
            <input autoFocus onChange={(e) => setIme(e.target.value)} type="text" id="floating_filled_user" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_filled_user" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{language === 'cir' ? 'Корисничко име' : 'Korisničko ime'}</label>
        </div>
        <div class="relative">
            <input onChange={(e) => setSifra(e.target.value)} type="password" id="floating_filled_sifra" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_filled_sifra" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{language === 'cir' ? 'Шифра' : 'Šifra'}</label>
        </div>
      </div>
    </div>
  );
};

export default Admin;
