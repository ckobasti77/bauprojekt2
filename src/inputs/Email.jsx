import React, { useContext } from 'react';
import { LanguageContext } from "../context/context";

const Email = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="relative w-full my-4">
      <input type="email" name='E-mail' id="floating_filled_email" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
      <label for="floating_filled_email" class="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{language === 'cir' ? 'Е-маил' : 'E-mail'}</label>
    </div>
  )
}

export default Email;