import React, { useContext } from 'react';
import { LanguageContext } from "../context/context";

const LocationInfo = () => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <h2 className='text-center mt-8 mb-4'>{language === 'cir' ? 'Желим да ми се информација о локацији достави путем' : 'Želim da mi se informacija o lokaciji dostavi putem'}</h2>
      <div className='flex gap-x-4 w-full justify-between'>
          <div className='w-3/6'>
            <input type="radio" name="Dostaviti putem" value={'E-maila'} id="email" className='vrsta-zahteva-inputs hidden h-0 w-0'/>
            <label htmlFor="email" className='vrsta-zahteva-labels cursor-pointer px-3 py-1 rounded-lg w-full inline-flex items-center justify-center' onClick={() => setRequestType()}>{language === 'cir' ? 'Е-маила' : 'E-maila'}</label>
          </div>
          <div className="w-3/6">
            <input type="radio" name="Dostaviti putem" value={'Pošte'} id="posta" className='vrsta-zahteva-inputs hidden h-0 w-0'/>
            <label htmlFor="posta" className='vrsta-zahteva-labels cursor-pointer px-3 py-1 rounded-lg w-full inline-flex items-center justify-center' onClick={() => setRequestType()}>{language === 'cir' ? 'Поште' : 'Pošte'}</label>
          </div>
      </div>
    </>
  )
}

export default LocationInfo