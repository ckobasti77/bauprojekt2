import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle, AiOutlineDelete } from "react-icons/ai";
import { BsSave } from "react-icons/bs";

import axios from "axios";

const Table = ({ setShowTable, setShowAdmin }) => {
  const [podaci, setPodaci] = useState([]);

  const [singleRow, setSingleRow] = useState({});
  const [status, setStatus] = useState('');

  
  useEffect(() => {
    axios
    .get("https://bp-be.onrender.com/zahtevi")
    .then((response) => {
      setPodaci(response.data);
    })
    .catch((error) => console.log(error));
  }, []);

  const handleSelectChange = (e, id) => {
    const { value } = e.target;
    e.preventDefault();

    axios.put(`https://bp-be.onrender.com/zahtevi/${id}`, { statusZahteva: value })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const deleteRequest = (id) => {
    axios
      .delete(`https://bp-be.onrender.com/zahtevi/${id}`)
      .catch(error => console.log(error)) 
  }

  const tabela = document.getElementById("tabela");

  const scrollToLeft = () => {
    tabela.scroll({
      left: 0,
      behavior: "smooth",
    });
    setShowScrollLeft(false);
    setShowScrollRight(true);
  };
  const scrollToRight = () => {
    tabela.scroll({
      left: tabela.scrollWidth,
      behavior: "smooth",
    });
    setShowScrollRight(false);
    setShowScrollLeft(true);
  };

  const [showScrollRight, setShowScrollRight] = useState(true);
  const [showScrollLeft, setShowScrollLeft] = useState(false);


  return (
    <div id="tabela" className="overflow-scroll shadow-md fixed z-[99999] h-screen w-screen bg-[#e0e0e0]">
      <button 
        className={`${showScrollLeft ? 'opacity-100' : 'opacity-0'} fixed bottom-10 px-4 py-2 left-5 rounded-lg bg-[#2ea295]`}
        onClick={() => {
          scrollToLeft();
        }}
      >
        {"<"}
      </button>
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
            <th scope="col" className="text-center px-6 py-3">
              Status <br /> zahteva
            </th>
            <th scope="col" className="kanta flex justify-center items-center px-6 py-3">
              <AiOutlineDelete />
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
                  <td className="text-center px-6 py-4 whitespace-nowrap ">{jedan.email}</td>
                  <td className="text-center px-6 py-4 flex justify-between whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="text-center font-bold px-6 pb-6">
                        I
                      </span>
                      <div className="flex">
                        <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">BROJ</span> <span>{jedan.parcele[0].broj}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">PODBROJ</span> <span>{jedan.parcele[0].podbroj}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">KAT. OPŠTINA</span> <span>{jedan.parcele[0].katastarskaOpstina}</span></span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      {jedan.parcele[1] && (
                        <>
                          <span className="text-center font-bold px-6 pb-6">
                            II
                          </span>
                          <div className="flex">
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">BROJ</span> <span>{jedan.parcele[1].broj}</span></span>
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">PODBROJ</span> <span>{jedan.parcele[1].podbroj}</span></span>
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">KAT. OPŠTINA</span> <span>{jedan.parcele[1].katastarskaOpstina}</span></span>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex flex-col">
                      {jedan.parcele[2] && (
                        <>
                          <span className="text-center font-bold px-6 pb-6">
                            III
                          </span>
                          <div className="flex">
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">BROJ</span> <span>{jedan.parcele[2].broj}</span></span>
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">PODBROJ</span> <span>{jedan.parcele[2].podbroj}</span></span>
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">KAT. OPŠTINA</span> <span>{jedan.parcele[2].katastarskaOpstina}</span></span>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex flex-col">
                      {jedan.parcele[3] && (
                        <>
                          <span className="text-center font-bold px-6 pb-6">
                            IV
                          </span>
                          <div className="flex">
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">BROJ</span> <span>{jedan.parcele[3].broj}</span></span>
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">PODBROJ</span> <span>{jedan.parcele[3].podbroj}</span></span>
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">KAT. OPŠTINA</span> <span>{jedan.parcele[3].katastarskaOpstina}</span></span>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex flex-col">
                      {jedan.parcele[4] && (
                        <>
                          <span className="text-center font-bold px-6 pb-6">
                            V
                          </span>
                          <div className="flex">
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">BROJ</span> <span>{jedan.parcele[4].broj}</span></span>
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">PODBROJ</span> <span>{jedan.parcele[4].podbroj}</span></span>
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">KAT. OPŠTINA</span> <span>{jedan.parcele[4].katastarskaOpstina}</span></span>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex flex-col">
                      {jedan.parcele[5] && (
                        <>
                          <span className="text-center font-bold px-6 pb-6">
                            VI
                          </span>
                          <div className="flex">
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">BROJ</span> <span>{jedan.parcele[5].broj}</span></span>
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">PODBROJ</span> <span>{jedan.parcele[5].podbroj}</span></span>
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">KAT. OPŠTINA</span> <span>{jedan.parcele[5].katastarskaOpstina}</span></span>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex flex-col">
                      {jedan.parcele[6] && (
                        <>
                          <span className="text-center font-bold px-6 pb-6">
                            VII
                          </span>
                          <div className="flex">
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">BROJ</span> <span>{jedan.parcele[6].broj}</span></span>
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">PODBROJ</span> <span>{jedan.parcele[6].podbroj}</span></span>
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">KAT. OPŠTINA</span> <span>{jedan.parcele[6].katastarskaOpstina}</span></span>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex flex-col">
                      {jedan.parcele[7] && (
                        <>
                          <span className="text-center font-bold px-6 pb-6">
                            VIII
                          </span>
                          <div className="flex">
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">BROJ</span> <span>{jedan.parcele[7].broj}</span></span>
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">PODBROJ</span> <span>{jedan.parcele[7].podbroj}</span></span>
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">KAT. OPŠTINA</span> <span>{jedan.parcele[7].katastarskaOpstina}</span></span>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex flex-col">
                      {jedan.parcele[8] && (
                        <>
                          <span className="text-center font-bold px-6 pb-6">
                            IX
                          </span>
                          <div className="flex">
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">BROJ</span> <br /> <span>{jedan.parcele[8].broj}</span></span>
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">PODBROJ</span> <span>{jedan.parcele[8].podbroj}</span></span>
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">KAT. OPŠTINA</span> <span>{jedan.parcele[8].katastarskaOpstina}</span></span>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex flex-col">
                      {jedan.parcele[9] && (
                        <>
                          <span className="text-center font-bold px-6 pb-6">
                            X
                          </span>
                          <div className="flex">
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">BROJ</span> <span>{jedan.parcele[9].broj}</span></span>
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">PODBROJ</span> <span>{jedan.parcele[9].podbroj}</span></span>
                            <span className="px-6 py-3 flex flex-col items-center w-[33%]"><span className="mb-2 font-bold text-[12px]">KAT. OPŠTINA</span> <span>{jedan.parcele[9].katastarskaOpstina}</span></span>
                          </div>
                        </>
                      )}
                    </div>
                  </td>
                  <td className={`${jedan.vrstaZahteva === 'Hitan' && 'bg-[#e36841] text-[#e0e0e0] rounded-xl'} text-center px-6 py-4 whitespace-nowrap`}>
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
                  <td className={`${jedan.statusZahteva === 'Uplacen' && 'bg-[#4bb543]/75 rounded-xl'} ${jedan.statusZahteva === 'Zavrsen' && 'bg-[#4bb543] rounded-xl'} px-4`}>
                    <select 
                      defaultValue={jedan.statusZahteva} 
                      onChange={(e) => {
                        handleSelectChange(e, jedan._id);
                      }} 
                      id={`select-${i}`} 
                      className="flex items-center gap-4 justify-center w-[110px] p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected={jedan.statusZahteva === 'Podnet' ? true : false} value="Podnet">Podnet</option>
                      <option selected={jedan.statusZahteva === 'Uplacen' ? true : false} value="Uplacen">Uplacen</option>
                      <option selected={jedan.statusZahteva === 'Zavrsen' ? true : false} value="Zavrsen">Zavrsen</option>
                    </select>
                  </td>
                  <td>
                    <button 
                      className="px-4 py-2 bg-[#c70000]/75 hover:bg-[#c70000] whitespace-nowrap mx-4 text-[#e0e0e0] rounded-full"
                      onClick={() => deleteRequest(jedan._id)}
                    >
                      Obriši zahtev
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <button 
        className={`${showScrollRight ? 'opacity-100' : 'opacity-0'} fixed bottom-10 px-4 py-2 right-5 rounded-lg bg-[#2ea295]`}
        onClick={() => {
          scrollToRight();
        }} 
      >
        {">"}
      </button>
    </div>
  );
};

export default Table;
