import React, { useContext } from 'react';
import { ContextAll } from "../context/context";
import { Name, Surname, Street, StreetNumber, Location, PhoneNumber, Email } from "../inputs/inputs"


const Applicant = () => {
  const { language } = useContext(ContextAll);

  return (
    <div className='w-full mt-8'>
        <h1 className='text-center mt-2 mb-5 text-4xl'>{language === 'cir' ? 'Подносилац захтева' : 'Podnosilac zahteva'}</h1>
        <Name />
        <Surname />
        <div className="flex gap-x-4 w-full min-h-[75px]">
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