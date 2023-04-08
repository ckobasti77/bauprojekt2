import React, { useContext } from 'react';
import { LanguageContext } from "../context/context";

const Rules = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className='mt-24'>
        <p className='my-4 text-xl'>{language === 'cir' ? 'Правила:' : 'Pravila:'}</p>
        <p className='mb-2'>{language === 'cir' ? ' - Такса мора бити уплаћена у року од 24 сата од подношења захтева, у супротном се захтев поништава.' : ' - Taksa mora biti uplaćena u roku od 24 sata od podnošenja zahteva, u suprotnom se zahtev poništava.'}</p>
        <p className='mb-2'>{language === 'cir' ? ' - Време обраде стандардног захтева је до 3 радна дана од евидентирања уплате(износ таксе за једну парцелу износи:)' : ' - Vreme obrade standardnog zahteva je do 3 radna dana od evidentiranja uplate(iznos takse za jednu parcelu iznosi:)'}</p>
        <p className='mb-2'>{language === 'cir' ? ' - Време обраде хитног захтева је 1 радни дан од евидентирања уплате(износ таксе за једну парцелу износи:)' : ' - Vreme obrade hitnog zahteva je 1 radni dan od evidentiranja uplate(iznos takse za jednu parcelu iznosi:)'}</p>
    </div>
  )
}

export default Rules