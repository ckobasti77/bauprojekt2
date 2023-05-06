import React from 'react';
import { BsArrowRight } from "react-icons/bs";


const Start = ({ setShowStart }) => {
  return (
    <div className='uplatnica-bg w-screen h-screen fixed z-[999999] grid place-items-center '>
        <div className='bg-bg w-4/6 h-3/6 rounded-2xl border-2 p-6 flex flex-col justify-between'>
            <h1 className="text-4xl text-center">Dosli ste na sajt za izdavanje INFORMACIJE O LOKACIJI</h1>
            <p className='my-4'>
                Informacija o lokaciji sadrži podatke o mogućnostima i ograničenjima gradnje na katastarskoj parceli, odnosno na više katastarskih parcela, na osnovu planskog dokumenta.
            </p>
            <p className='my-4'>
                Na osnovu ovog dokumenta nije moguca izgradnja objekta.
            </p>
            <p className='my-4'>
                Zahtev može podneti svako zainteresovano fizičko lice.
            </p>
            <button onClick={() => setShowStart(false)} className='block rounded-lg bg-[#2ea295] mx-auto px-4 py-2 hover:bg-[#2ea295]/75 transition-all duration-200 group'>Popuni zahtev<BsArrowRight className='inline ml-2 group-hover:ml-4 transition-all duration-200'/></button>
        </div>
    </div>
  )
}

export default Start