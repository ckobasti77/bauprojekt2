import React, { useState, useContext, useEffect } from "react";
import { ContextAll } from "../context/context";
import { success, error } from "../assets/assets";

const Submit = ({ submit }) => {
  const { language } = useContext(ContextAll);

  const [subButText, setSubButText] = useState('');

  useEffect(() => {
    if(language === 'cir') {
        setSubButText('Поднеси захтев')
    } else {
        setSubButText('Podnesi zahtev')
    }
  }, [language])

  return (
    <button
        type="submit"
        className={`${!submit && 'block'} ${submit && 'flex items-center justify-center'} py-3 px-6 w-[154.4px] h-[48px] rounded-xl mx-auto my-8 bg-[#2EA295] hover:bg-[#2EA295]/75 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-medium`}
    >
        {!submit && subButText}
        {submit === 'loading' && (<p className="spinnin text-transparent border-white border-t-[3px] rounded-full"></p>)}
        {submit === 'success' && (<img src={success} alt="success" className="w-[28px]" />)}
        {submit === 'error' && (<img src={error} alt="error" className="w-[28px]" />)}
    </button>
  );
};

export default Submit;
