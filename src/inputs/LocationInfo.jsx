import React, { useState, useContext, useEffect } from 'react';
import { ContextAll } from "../context/context";

const LocationInfo = () => {
  const { language, locationInfo, setLocationInfo } = useContext(ContextAll);

  return (
    <>
      <h2 className='text-center mt-8 mb-4'>{language === 'cir' ? 'Желим да ми се информација о локацији достави путем' : 'Želim da mi se informacija o lokaciji dostavi putem'}</h2>
      <div className='flex gap-x-4 w-full justify-between'>
          <div className='w-3/6'>
            <input type="radio" name="Dostaviti putem" value={'E-maila'} id="email" className='vrsta-zahteva-inputs hidden h-0 w-0' required/>
            <label htmlFor="email" className='vrsta-zahteva-labels cursor-pointer px-3 py-1 rounded-lg w-full inline-flex items-center justify-center' onClick={() => setLocationInfo('E-mail')}>{language === 'cir' ? 'Е-маила' : 'E-maila'}</label>
          </div>
          <div className="w-3/6">
            <input type="radio" name="Dostaviti putem" value={'Pošte'} id="posta" className='vrsta-zahteva-inputs hidden h-0 w-0' required/>
            <label htmlFor="posta" className='vrsta-zahteva-labels cursor-pointer px-3 py-1 rounded-lg w-full inline-flex items-center justify-center' onClick={() => setLocationInfo('Pošta')}>{language === 'cir' ? 'Поште' : 'Pošte'}</label>
          </div>
      </div>
      {locationInfo === '' && <span className="mx-auto my-1 font-bold text-[#ee3b47] text-center block text-sm">{language === 'cir' ? '* Обавезно' : '* Obavezno'}</span>}
    </>
  )
}

export default LocationInfo