import React, { useContext } from 'react';
import { LanguageContext } from "../context/context";

const CadastralMunicipality = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="relative w-full my-4">
      <input type="text" name='Katastarska opstina' id="floating_filled_cadastral_muncipality" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
      <label for="floating_filled_cadastral_muncipality" class="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{language === 'cir' ? 'Катастарска општина' : 'Katastarska opština'}</label>
    </div>
  )
}

export default CadastralMunicipality;