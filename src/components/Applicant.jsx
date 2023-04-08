import React, { useContext } from 'react';
import { LanguageContext } from "../context/context";
import { Name, Surname, Street, StreetNumber, Location, PhoneNumber, Email } from "../inputs/inputs"


const Applicant = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className='w-full'>
        <h1 className='text-center mt-2 mb-5 text-2xl'>{language === 'cir' ? 'Подносилац захтева' : 'Podnosilac zahteva'}</h1>
        <Name />
        <Surname />
        <div className="flex gap-x-4 w-full my-4">
          <Street />
          <StreetNumber />
        </div>
        <Location />
        <PhoneNumber />
        <Email />
    </div>
  )
}

export default Applicant