import React, { useState, useContext } from "react";
import QRCode from "qrcode.react";
import { LanguageContext, NameContext, SurnameContext, StreetContext, StreetNumberContext, LocationContext } from "../context/context";

function Uplatnica({ setShowPayCheck }) {
  const { language } = useContext(LanguageContext);
  const { name } = useContext(NameContext);
  const { surname } = useContext(SurnameContext);
  const { street } = useContext(StreetContext);
  const { streetNumber } = useContext(StreetNumberContext);
  const { location } = useContext(LocationContext);

  return (
    <div className="uplatnica-bg fixed w-screen h-screen z-[99999] flex place-items-center justify-center">
      <button
        className="absolute right-[30px] top-[15px] text-white font-bold text-2xl"
        onClick={(e) => {
          e.preventDefault();
          setShowPayCheck(false);
        }}
      >
        X
      </button>
      <div className="bg-white w-[800px] h-[350px] p-2 text-[#252525]">
        <div className="border border-1 border-[#252525]/25 w-full h-full p-4">
          <h1 className="text-right text-[#252525] mb-2">
            {language === "cir" ? "НАЛОГ ЗА УПЛАТУ" : "NALOG ZA UPLATU"}
          </h1>
          <div className="flex h-[75%]">
            <div className="w-[40%]">
              <div>
                <span className='text-[.75rem]'>{language === "cir" ? "уплатилац" : "uplatilac"}</span>
                <p className="p-2 border border-1 border-black text-[.9rem]">{`${name} ${surname}, ${street + ' ' + streetNumber}, ${location}`}</p>
              </div>
              <div className='mt-2'>
                <span className='text-[.75rem]'>{language === "cir" ? "сврха уплате" : "svrha uplate"}</span>
                <p className="p-2 border border-1 border-black text-[.9rem]">uplata</p>
              </div>
              <div className='mt-2'>
                <span className='text-[.75rem]'>{language === "cir" ? "прималац" : "primalac"}</span>
                <p className="p-2 border border-1 border-black text-[.9rem]">BAUPROJEKT DOO</p>
              </div>

            </div>
            <div className="h-full w-[1px] mx-4 bg-black/75"></div>
            <div className="w-[55%]">
              <div className="w-full flex justify-between items-end">
                <div className="w-[20%]">
                  <span className='text-[.75rem] leading-4 block'>{language === "cir" ? "шифра плаћања" : "šifra plaćanja"}</span>
                  <p className="px-1 border border-1 border-black text-[.9rem]">189</p>
                </div>
                <div className="w-[20%]">
                  <span className='text-[.75rem]'>{language === "cir" ? "валута" : "valuta"}</span>
                  <p className="px-1 border border-1 border-black text-[.9rem]">rsd</p>
                </div>
                <div className="w-[50%]">
                  <span className='text-[.75rem]'>{language === "cir" ? "износ" : "iznos"}</span>
                  <p className="px-1 border border-1 border-black text-[.9rem]">5000</p>
                </div>
              </div>
              <div className="w-full">
                <span className='text-[.75rem]'>{language === "cir" ? "израчун примаоца" : "račun primaoca"}</span>
                <p className="px-1 border border-1 border-black text-[.9rem]">205-9001022545298-66</p>
              </div>
              <div className="w-full">
                <span className='text-[.75rem]'>{language === "cir" ? "модел и позив на број (одобрење)" : "model i poziv na broj (odobrenje)"}</span>
                <div className="flex w-full justify-between">
                  <p className="px-1 border border-1 border-black text-[.9rem] w-[15%]">205</p>
                  <p className="px-1 border border-1 border-black text-[.9rem] w-[75%]">205-9001022545298-66</p>
                </div>
              </div>
              <div className="w-full">
                <QRCode className="mx-auto w-[100px] my-4" size={100} value={`K:PR|V:01|C:1|R:205900102254529866|N:Jovan Milojevic, Beograd|I:RSD5000,00|SF:289|S:Transakcija gradjana`} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Uplatnica;
