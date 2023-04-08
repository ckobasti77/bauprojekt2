import React, { useContext } from 'react';
import { LanguageContext } from "../context/context";

import { ParcelNumber, ParcelSubnumber, CadastralMunicipality, RequestType, LocationInfo } from '../inputs/inputs'


const Request = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className='w-full'>
        <h1 className='text-center mt-2 mb-5 text-2xl'>{language === 'cir' ? 'Захтев' : 'Zahtev'}</h1>
        <div className="flex gap-x-4 w-full my-4">
          <ParcelNumber />
          {/* <span className='text-4xl'>/</span> */}
          <ParcelSubnumber />
        </div>
        <CadastralMunicipality />
        <RequestType />
        <LocationInfo />
    </div>
  )
}

export default Request