import React, { useContext } from 'react';
import { LanguageContext } from "../context/context";

const Name = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="relative w-full my-4 z-0 group">
      <input type="text" name='Ime' id="floating_filled_name" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
      <label for="floating_filled_name" class="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{language === 'cir' ? 'Име' : 'Ime'}</label>
    </div>
    // <div class="relative">
    //   <input type="text" placeholder="Enter your text" class="w-full py-2 pl-4 pr-2 border-2 border-gray-300 rounded-md transition-all duration-300 focus:outline-none focus:border-purple-500" />
    //   <div class="absolute bottom-0 left-0 w-full h-1 bg-gray-300 transition-all duration-300"></div>
    //   <div class="absolute bottom-0 left-0 w-0 h-1 bg-purple-500 transition-all duration-300"></div>
    // </div>

  )
}

export default Name;