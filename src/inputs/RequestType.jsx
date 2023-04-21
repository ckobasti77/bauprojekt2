import React, { useState, useContext } from 'react';
import { ContextAll } from "../context/context";

const RequestType = () => {
  const { language, requestType, setRequestType } = useContext(ContextAll);

  return (
    <>
      <h2 className='text-center text-xl mt-6 mb-4'>{language === 'cir' ? 'Врста захтева' : 'Vrsta zahteva'}</h2>
      <div className='flex gap-x-4 w-full justify-between'>
          <div className='w-3/6'>
            <input type="radio" name="Vrsta zahteva" value={language === 'cir' ? 'Стандардан' : 'Standardan'} id="standardan" className='vrsta-zahteva-inputs hidden h-0 w-0' required/>
            <label htmlFor="standardan" className='vrsta-zahteva-labels cursor-pointer px-3 py-1 rounded-lg w-full inline-flex items-center justify-center' onClick={() => setRequestType('Standardan')}>{language === 'cir' ? 'Стандардан' : 'Standardan'}</label>
            <p className='w-full mt-2 text-center'>{language === 'cir' ? (<span>до 3 радна дана <br /> износ таксе за 1 парцелу</span>) : (<span>do 3 radna dana <br /> iznos takse za 1 parcelu</span>)}</p>
          </div>
          <div className="w-3/6">
            <input type="radio" name="Vrsta zahteva" value={language === 'cir' ? 'Хитан' : 'Hitan'}  id="hitan" className='vrsta-zahteva-inputs hidden h-0 w-0' required/>
            <label htmlFor="hitan" className='vrsta-zahteva-labels cursor-pointer px-3 py-1 rounded-lg w-full inline-flex items-center justify-center' onClick={() => setRequestType('Hitan')}>{language === 'cir' ? 'Хитан' : 'Hitan'}</label>
            <p className='w-full mt-2 text-center'>{language === 'cir' ? (<span>1 радни дан <br /> износ таксе за 1 парцелу</span>) : (<span>1 radni dan <br /> iznos takse za 1 parcelu</span>)}</p>
          </div>
      </div>
      {requestType === '' && <span className="mx-auto font-bold my-1 text-[#ee3b47] text-center block text-sm">{language === 'cir' ? '* Обавезно' : '* Obavezno'}</span>}
    </>
  )
}

export default RequestType