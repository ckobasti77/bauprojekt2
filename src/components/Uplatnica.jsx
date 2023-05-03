import React, { useState, useContext, useEffect } from "react";
import QRCode from "qrcode.react";
import { ContextAll } from "../context/context";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsSave } from 'react-icons/bs';
import html2canvas from 'html2canvas';

function Uplatnica({ setShowPayCheck, showPayCheck, singleId }) {
  const { language, name, surname, street, streetNumber, requestType, brojParcela, location } = useContext(ContextAll);

  const [cena, setCena] = useState();

  useEffect(() => {
    if(brojParcela <= 3) {
      if(requestType === 'Standardan') {
        setCena(parseInt(1000))
      } else if(requestType === 'Hitan') {
        setCena(parseInt(1500))
      }
    } else if (brojParcela > 3 && brojParcela <= 6) {
      if(requestType === 'Standardan') {
        setCena(parseInt(2000))
      } else if(requestType === 'Hitan') {
        setCena(parseInt(3000))
      }
    } else if (brojParcela > 6 && brojParcela <= 9) {
      if(requestType === 'Standardan') {
        setCena(parseInt(3000))
      } else if(requestType === 'Hitan') {
        setCena(parseInt(4500))
      }
    } else if (brojParcela > 9) {
      if(requestType === 'Standardan') {
        setCena(parseInt(4000))
      } else if(requestType === 'Hitan') {
        setCena(parseInt(6000))
      }
    }
  }, [brojParcela, requestType, showPayCheck])

  const takeScreenshot = () => {
    html2canvas(document.querySelector("#screenshot")).then(canvas => {
      const link = document.createElement('a');
      // link.download = 'bauprojekt-uplatnica.pdf';
      link.href = canvas.toDataURL("image/png", 0.92);
      link.download = 'bauprojekt-uplatnica.png';
      link.click();
    });
  }

  return (
    <div className="uplatnica-bg fixed w-screen h-screen z-[99999] flex items-center justify-center">
      <button
        className="close-uplatnica absolute right-[22px] top-[15px] text-white font-bold text-2xl transform translate-y-[3px] hover:text-[#2ea295] hover:translate-y-[0px] transition-all duration-150"
        onClick={(e) => {
          e.preventDefault();
          setShowPayCheck(false);
        }}
      >
        <AiOutlineCloseCircle />
      </button>
      <button
        className="screen-uplatnica absolute left-[22px] top-[15px] text-white font-bold text-md transform translate-y-[3px] hover:text-[#2ea295] hover:translate-y-[0px] transition-all duration-150"
        onClick={takeScreenshot}
      >
        {language === 'cir' ? 'Сачувај уплатницу' : 'Sačuvaj uplatnicu'}<BsSave className="inline w-[30px] ml-2 text-2xl"/>
      </button>
      
      <div id="screenshot" className="uplatnica transform scale-[1.35] bg-white sm:min-w-[800px] sm:h-[350px] p-2 text-[#252525]">
        <div className="border border-1 border-[#252525]/25 w-full h-full p-4">
          <h1 className="text-right text-[#252525] mb-2">
            {language === "cir" ? "НАЛОГ ЗА УПЛАТУ" : "NALOG ZA UPLATU"}
          </h1>
          <div className="flex h-[75%] uplatnica-inputs">
            <div className="w-[40%] prvi">
              <div>
                <span className='text-[.75rem] block mb-2'>{language === "cir" ? "уплатилац" : "uplatilac"}</span>
                <p className="p-2 border border-1 border-black text-[.9rem] leading-[.9rem]">{`${name} ${surname}, ${street + ' ' + streetNumber}, ${location}`}</p>
              </div>
              <div className='mt-2'>
                <span className='text-[.75rem] block mb-2'>{language === "cir" ? "сврха уплате" : "svrha uplate"}</span>
                <p className="p-2 border border-1 border-black text-[.9rem]">Uplata za taksu</p>
              </div>
              <div className='mt-2'>
                <span className='text-[.75rem] block mb-2'>{language === "cir" ? "прималац" : "primalac"}</span>
                <p className="p-2 border border-1 border-black text-[.9rem]">Power & Build DOO <br /> Garibaldijeva 13, Vozdovac</p>
              </div>

            </div>
            <div className="h-full w-[1px] mx-4 bg-black/75 drugi"></div>
            <div className="w-[55%] treci">
              <div className="w-full flex justify-between items-end">
                <div className="w-[20%]">
                  <span className='text-[.75rem] leading-4 block mb-2'>{language === "cir" ? "шифра плаћања" : "šifra plaćanja"}</span>
                  <p className="px-1 border border-1 border-black text-[.9rem] klasa">189</p>
                </div>
                <div className="w-[20%]">
                  <span className='text-[.75rem] block mb-2'>{language === "cir" ? "валута" : "valuta"}</span>
                  <p className="px-1 border border-1 border-black text-[.9rem] klasa">rsd</p>
                </div>
                <div className="w-[50%]">
                  <span className='text-[.75rem] block mb-2'>{language === "cir" ? "износ" : "iznos"}</span>
                  <p className="px-1 border border-1 border-black text-[.9rem] klasa">{cena},00</p>
                </div>
              </div>
              <div className="w-full">
                <span className='text-[.75rem] block mb-2'>{language === "cir" ? "рачун примаоца" : "račun primaoca"}</span>
                <p className="px-1 border border-1 border-black text-[.9rem] klasa">340-0000011033849-21</p>
              </div>
              <div className="w-full">
                <span className='text-[.75rem] block my-2'>{language === "cir" ? "модел и позив на број (одобрење)" : "model i poziv na broj (odobrenje)"}</span>
                <div className="flex w-full justify-between">
                  <p className="px-1 border border-1 border-black text-[.9rem] w-[15%]">{singleId.substring(0,2)}</p>
                  <p className="px-1 border border-1 border-black text-[.9rem] w-[75%]">{singleId.substring(2)}</p>
                </div>
              </div>
              <div className="w-full">
                <QRCode className="qr mx-auto w-[100px] my-4" size={80} value={`K:PR|V:01|C:1|R:340000001103384921|N:Power & Build doo\r\nGARIBALDIJEVA 13\r\nBEOGRAD |I:RSD${cena || 0},00|P:Kupac|SF:289|S:Uplata za taksu|RO:${singleId}`} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Uplatnica;
