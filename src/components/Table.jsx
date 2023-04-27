import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
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
    e.preventDefault();
    axios
      .get(`https://bp-be.onrender.com/zahtevi/${id}`)
      .then((response) => {
        setSingleRow(response.data)
      })
      .then(() => {
        setSingleRow(prev => ({...prev, statusZahteva: e.target.value}))
      })
      // .then(() => {
      //   axios
      //     .put(`https://bp-be.onrender.com/zahtevi/${id}`, singleRow)
      //     .then(response => console.log(response))
      //     .catch(error => console.log(error))
      // })
      // .then(() => {
      //   setSingleRow({})
      //   setSingleRow('')
      // })
      .catch((error) => console.log(error))
  };

   
  useEffect(() => {
    console.log(singleRow);
  }, [singleRow]);

  const sacuvajIzmene = async (id) => {
    try {
      const response = await axios.put(
        `https://bp-be.onrender.com/zahtevi/${id}`,
        singleRow
        );
        const data = await response.data;
        console.log(data);
        setSingleRow({});
    } catch (err) {
      console.log(err);
    }
  }

 

  // const handleSaveClick = async () => {
  //   const requestsToUpdate = selectedRows.map(index => {
  //     return {
  //       "id": podaci[index]._id,
  //       "statusZahteva": podaci[index].statusZahteva
  //     };
  //   });

  //   await axios.put('/api/requests', requestsToUpdate);

  //   setSelectedRows([]);
  // };


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
            <th scope="col" className="text-center px-6 py-3">
              Status <br /> zahteva
            </th>
            <th scope="col" className="flex items-center justify-center pt-5 pl-5">
              <BsSave className="transform scale-150"/>
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
                    <div className="flex flex-col w-[305px]">
                      <span className="text-center font-bold px-6 pb-6">
                        I
                      </span>
                      <div className="flex">
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">BROJ</span> <span>{jedan.parcele[0].broj}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">PODBROJ</span> <span>{jedan.parcele[0].podbroj}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">OPŠTINA</span> <span>{jedan.parcele[0].katastarskaOpstina}</span></span>
                      </div>
                    </div>
                    <div className="flex flex-col w-[305px]">
                      <span className="text-center font-bold px-6 pb-6">
                        II
                      </span>
                      {jedan.parcele[1] && (
                        <div className="flex">
                          <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">BROJ</span> <span>{jedan.parcele[1].broj}</span></span>
                          <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">PODBROJ</span> <span>{jedan.parcele[1].podbroj}</span></span>
                          <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">OPŠTINA</span> <span>{jedan.parcele[1].katastarskaOpstina}</span></span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col w-[305px]">
                      <span className="text-center font-bold px-6 pb-6">
                        III
                      </span>
                      {jedan.parcele[2] && (
                      <div className="flex">
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">BROJ</span> <span>{jedan.parcele[2].broj}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">PODBROJ</span> <span>{jedan.parcele[2].podbroj}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">OPŠTINA</span> <span>{jedan.parcele[2].katastarskaOpstina}</span></span>
                      </div>
                      )}
                    </div>
                    <div className="flex flex-col w-[305px]">
                      <span className="text-center font-bold px-6 pb-6">
                        IV
                      </span>
                      {jedan.parcele[3] && (
                      <div className="flex">
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">BROJ</span> <span>{jedan.parcele[3].broj}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">PODBROJ</span> <span>{jedan.parcele[3].podbroj}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">OPŠTINA</span> <span>{jedan.parcele[3].katastarskaOpstina}</span></span>
                      </div>
                      )}
                    </div>
                    <div className="flex flex-col w-[305px]">
                      <span className="text-center font-bold px-6 pb-6">
                        V
                      </span>
                      {jedan.parcele[4] && (
                      <div className="flex">
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">BROJ</span> <span>{jedan.parcele[4].broj}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">PODBROJ</span> <span>{jedan.parcele[4].podbroj}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">OPŠTINA</span> <span>{jedan.parcele[4].katastarskaOpstina}</span></span>
                      </div>
                      )}
                    </div>
                    <div className="flex flex-col w-[305px]">
                      <span className="text-center font-bold px-6 pb-6">
                        VI
                      </span>
                      {jedan.parcele[5] && (
                      <div className="flex">
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">BROJ</span> <span>{jedan.parcele[5].broj}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">PODBROJ</span> <span>{jedan.parcele[5].podbroj}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">OPŠTINA</span> <span>{jedan.parcele[5].katastarskaOpstina}</span></span>
                      </div>
                      )}
                    </div>
                    <div className="flex flex-col w-[305px]">
                      <span className="text-center font-bold px-6 pb-6">
                        VII
                      </span>
                      {jedan.parcele[6] && (
                      <div className="flex">
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">BROJ</span> <span>{jedan.parcele[6].broj}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">PODBROJ</span> <span>{jedan.parcele[6].podbroj}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">OPŠTINA</span> <span>{jedan.parcele[6].katastarskaOpstina}</span></span>
                      </div>
                      )}
                    </div>
                    <div className="flex flex-col w-[305px]">
                      <span className="text-center font-bold px-6 pb-6">
                        VIII
                      </span>
                      {jedan.parcele[7] && (
                      <div className="flex">
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">BROJ</span> <span>{jedan.parcele[7].broj}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">PODBROJ</span> <span>{jedan.parcele[7].podbroj}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">OPŠTINA</span> <span>{jedan.parcele[7].katastarskaOpstina}</span></span>
                      </div>
                      )}
                    </div>
                    <div className="flex flex-col w-[305px]">
                      <span className="text-center font-bold px-6 pb-6">
                        IX
                      </span>
                      {jedan.parcele[8] && (
                      <div className="flex">
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">BROJ</span> <span>{jedan.parcele[8].broj}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">PODBROJ</span> <span>{jedan.parcele[8].podbroj}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">OPŠTINA</span> <span>{jedan.parcele[8].katastarskaOpstina}</span></span>
                      </div>
                      )}
                    </div>
                    <div className="flex flex-col w-[305px]">
                      <span className="text-center font-bold px-6 pb-6">
                        X
                      </span>
                      {jedan.parcele[9] && (
                      <div className="flex">
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">BROJ</span> <span>{jedan.parcele[9].broj}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">PODBROJ</span> <span>{jedan.parcele[9].podbroj}</span></span>
                        <span className="px-6 py-3 flex flex-col items-center"><span className="mb-2 font-bold text-[12px]">OPŠTINA</span> <span>{jedan.parcele[9].katastarskaOpstina}</span></span>
                      </div>
                      )}
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
                  <td>
                    <select 
                      defaultValue={jedan.statusZahteva} 
                      onChange={(e) => {
                        handleSelectChange(e, jedan._id, jedan.statusZahteva, i);
                      }} 
                      id={`select-${i}`} 
                      className="flex items-center gap-4 justify-center w-[110px] p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected={jedan.statusZahteva === 'Podnet' ? true : false} value="Podnet">Podnet</option>
                      <option selected={jedan.statusZahteva === 'Uplaceno' ? true : false} value="Uplaceno">Uplaceno</option>
                      <option selected={jedan.statusZahteva === 'Zavrsen' ? true : false} value="Zavrsen">Zavrsen</option>
                    </select>
                  </td>
                  <td className="pl-6">
                    <button onClick={() => sacuvajIzmene(jedan._id)} className="rounded-lg bg-slate-600 px-6 py-1 cursor-pointer admin-button text-[#e0e0e0] ">Uredi</button>
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
