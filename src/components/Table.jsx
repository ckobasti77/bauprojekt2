import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import axios from "axios";

const Table = ({ setShowTable, setShowAdmin }) => {
  const [podaci, setPodaci] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/zahtevi")
      .then((response) => {
        setPodaci(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="overflow-x-scroll shadow-md fixed z-[99999] h-screen w-screen bg-[#e0e0e0]">
      <table className="w-full text-sm text-left text-gray-600">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="text-center">
            <button
              className="close-uplatnica text-[#252525] font-bold text-2xl transform translate-y-[3px] hover:text-[#2ea295] hover:translate-y-[0px] transition-all duration-150"
              onClick={(e) => {
                e.preventDefault();
                setShowTable(false);
                setShowAdmin(false);
              }}
            >
              <AiOutlineCloseCircle />
            </button>
            </th>
            <th scope="col" className="text-center px-6 py-3">
              Ime i Prezime
            </th>
            <th scope="col" className="text-center px-6 py-3">
              Ulica i broj
            </th>
            <th scope="col" className="text-center px-6 py-3">
              Mesto
            </th>
            <th scope="col" className="text-center px-6 py-3">
              Telefon
            </th>
            <th scope="col" className="text-center px-6 py-3">
              E-mail
            </th>
            <th scope="col" className="text-center px-6 py-3">
              Zahtevi
            </th>
            <th scope="col" className="text-center px-6 py-3">
              Vrsta <br /> zahteva
            </th>
            <th scope="col" className="text-center px-6 py-3">
              Dostaviti <br /> putem
            </th>
            <th scope="col" className="text-center px-6 py-3">
              Vreme <br /> podnošenja
            </th>
          </tr>
        </thead>
        <tbody>
          {podaci &&
            podaci?.map((jedan, i) => {
              return (
                <tr className="bg-white border-b border-gray-300" key={i}>
                  <th
                    scope="row"
                    className="text-center px-6 py-4 font-bold text-[12px] text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {++i}
                  </th>
                  
                  <td className="text-center px-6 py-4 whitespace-nowrap">
                  {jedan.ime} {jedan.prezime}
                  </td>
                  <td className="text-center px-6 py-4 whitespace-nowrap">
                    {jedan.ulica} {jedan.broj}
                  </td>
                  <td className="text-center px-6 py-4 whitespace-nowrap">{jedan.mesto}</td>
                  <td className="text-center px-6 py-4 whitespace-nowrap">{jedan.telefon}</td>
                  <td className="text-center px-6 py-4 whitespace-nowrap">{jedan.email}</td>
                  <td className="text-center px-6 py-4 flex whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="text-center font-bold px-6 pb-6">I</span>
                      <div className="flex">
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">BROJ</span> <span>{jedan.parcele[0].broj}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">PODBROJ</span> <span>{jedan.parcele[0].podbroj}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">OPŠTINA</span> <span>{jedan.parcele[0].katastarskaOpstina}</span></span>
                      </div>
                    </div>
                      <div className="flex flex-col">
                      <span className="text-center font-bold px-6 pb-6">
                        II
                      </span>
                      <div className="flex">
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">BROJ</span> <span>{jedan.parcele[1] ? jedan.parcele[1].broj : '/'}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">PODBROJ</span> <span>{jedan.parcele[1] ? jedan.parcele[1].podbroj : '/'}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">OPŠTINA</span> <span>{jedan.parcele[1] ? jedan.parcele[1].katastarskaOpstina : '/'}</span></span>
                      </div>
                      </div>
                    <div className="flex flex-col">
                      <span className="text-center font-bold px-6 pb-6">
                        II
                      </span>
                      <div className="flex">
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">BROJ</span> <span>{jedan.parcele[2] ? jedan.parcele[2].broj : '/'}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">PODBROJ</span> <span>{jedan.parcele[2] ? jedan.parcele[2].podbroj : '/'}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">OPŠTINA</span> <span>{jedan.parcele[2] ? jedan.parcele[2].katastarskaOpstina : '/'}</span></span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center px-6 py-4 whitespace-nowrap">
                    {jedan.vrstaZahteva}
                  </td>
                  <td className="text-center px-6 py-4 whitespace-nowrap">
                    {jedan.dostavitiPutem}
                  </td>
                  <td className="text-center px-6 py-4 whitespace-nowrap">
                    {new Date(jedan.createdAt).toLocaleDateString("en-GB")} <br />
                    {new Date(jedan.createdAt).toLocaleTimeString("en-GB", {
                       hour: "2-digit",
                       minute: "2-digit",
                       second: "2-digit",
                       hour12: false,
                    })}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
