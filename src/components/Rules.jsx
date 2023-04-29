import React, { useContext } from 'react';
import { ContextAll } from "../context/context";

import { warning } from "../assets/assets";

const Rules = () => {
  const { language } = useContext(ContextAll);

  return (
    <div className='mt-24'>
        <p className='my-4 text-xl'>{language === 'cir' ? 'Правила:' : 'Pravila:'}</p>
        <p className='mb-2'><img src={warning} alt="warning" className="w-[24px] inline object-contain mr-1" />{language === 'cir' ? 'Такса мора бити уплаћена у року од 24 сата од подношења захтева, у супротном се захтев поништава.' : 'Taksa mora biti uplaćena u roku od 24 sata od podnošenja zahteva, u suprotnom se zahtev poništava.'}</p>
        <p className='mb-2'><img src={warning} alt="warning" className="w-[24px] inline object-contain mr-1" />{language === 'cir' ? 'Време обраде стандардног захтева је до 3 радна дана од евидентирања уплате(износ таксе за три парцеле износи 1000рсд)' : 'Vreme obrade standardnog zahteva je do 3 radna dana od evidentiranja uplate(iznos takse za tri parcele iznosi 1000rsd.)'}</p>
        <p className='mb-2'><img src={warning} alt="warning" className="w-[24px] inline object-contain mr-1" />{language === 'cir' ? 'Време обраде хитног захтева је 1 радни дан од евидентирања уплате(износ таксе је 50% већи у односу на стандардан захтев.)' : 'Vreme obrade hitnog zahteva je 1 radni dan od evidentiranja uplate(iznos takse je 50% veći u odnosu na standardan zahtev.)'}</p>
        <p className='mb-2'><img src={warning} alt="warning" className="w-[24px] inline object-contain mr-1" />{language === 'cir' ? 'Максималан број парцела у захтеву је 10.' : 'Maksimalan broj parcela u zahtevu je 10.'}</p>
    </div>
  )
}

export default Rules