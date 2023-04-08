import React, { useContext } from 'react';
import { LanguageContext } from "../context/context";

const Street = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="relative w-8/12">
      <input type="text" name='Ulica' id="floating_filled_street" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
      <label for="floating_filled_street" class="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{language === 'cir' ? 'Улица' : 'Ulica'}</label>
    </div>
  )
}

export default Street;