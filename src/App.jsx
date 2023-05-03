import React, { useState, useContext, useEffect } from "react";
import { ContextAll } from "./context/context";

import axios from "axios";

import {
  Loader,
  Navbar,
  Applicant,
  Request,
  Rules,
  Footer,
  Uplatnica,
  Table,
  Admin,
  Submit,
} from "./components/components";

import { LocationInfo } from "./inputs/inputs";

import { qr, check } from "./assets/assets";

function App() {
  const {
    language,
    name,
    surname,
    street,
    streetNumber,
    location,
    phoneNumber,
    email,
    parcelNumber,
    parcelSubnumber,
    cadastralMunicipality,
    parcelNumber2,
    parcelSubnumber2,
    cadastralMunicipality2,
    parcelNumber3,
    parcelSubnumber3,
    cadastralMunicipality3,
    parcelNumber4,
    parcelSubnumber4,
    cadastralMunicipality4,
    parcelNumber5,
    parcelSubnumber5,
    cadastralMunicipality5,
    parcelNumber6,
    parcelSubnumber6,
    cadastralMunicipality6,
    parcelNumber7,
    parcelSubnumber7,
    cadastralMunicipality7,
    parcelNumber8,
    parcelSubnumber8,
    cadastralMunicipality8,
    parcelNumber9,
    parcelSubnumber9,
    cadastralMunicipality9,
    parcelNumber10,
    parcelSubnumber10,
    cadastralMunicipality10,
    requestType,
    locationInfo,
    number2,
    number3,
    number4,
    number5,
    number6,
    number7,
    number8,
    number9,
    number10,
  } = useContext(ContextAll);

  const [showTable, setShowTable] = useState(false);

  const [loader, setLoader] = useState(true);
  const [showPayCheck, setShowPayCheck] = useState(false);

  const [podaci, setPodaci] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (
      !number2 &&
      !number3 &&
      !number4 &&
      !number5 &&
      !number6 &&
      !number7 &&
      !number8 &&
      !number9 &&
      !number10
    ) {
      setPodaci({
        ime: name,
        prezime: surname,
        ulica: street,
        broj: streetNumber,
        mesto: location,
        telefon: phoneNumber,
        email: email,
        parcele: [
          {
            broj: parcelNumber,
            podbroj: parcelSubnumber,
            katastarskaOpstina: cadastralMunicipality,
          },
        ],
        vrstaZahteva: requestType,
        dostavitiPutem: locationInfo,
        statusZahteva: "Podnet",
      });
    } else if (
      number2 &&
      !number3 &&
      !number4 &&
      !number5 &&
      !number6 &&
      !number7 &&
      !number8 &&
      !number9 &&
      !number10
    ) {
      setPodaci({
        ime: name,
        prezime: surname,
        ulica: street,
        broj: streetNumber,
        mesto: location,
        telefon: phoneNumber,
        email: email,
        parcele: [
          {
            broj: parcelNumber,
            podbroj: parcelSubnumber,
            katastarskaOpstina: cadastralMunicipality,
          },
          {
            broj: parcelNumber2,
            podbroj: parcelSubnumber2,
            katastarskaOpstina: cadastralMunicipality2,
          },
        ],
        vrstaZahteva: requestType,
        dostavitiPutem: locationInfo,
        statusZahteva: "Podnet",
      });
    } else if (
      number2 &&
      number3 &&
      !number4 &&
      !number5 &&
      !number6 &&
      !number7 &&
      !number8 &&
      !number9 &&
      !number10
    ) {
      setPodaci({
        ime: name,
        prezime: surname,
        ulica: street,
        broj: streetNumber,
        mesto: location,
        telefon: phoneNumber,
        email: email,
        parcele: [
          {
            broj: parcelNumber,
            podbroj: parcelSubnumber,
            katastarskaOpstina: cadastralMunicipality,
          },
          {
            broj: parcelNumber2,
            podbroj: parcelSubnumber2,
            katastarskaOpstina: cadastralMunicipality2,
          },
          {
            broj: parcelNumber3,
            podbroj: parcelSubnumber3,
            katastarskaOpstina: cadastralMunicipality3,
          },
        ],
        vrstaZahteva: requestType,
        dostavitiPutem: locationInfo,
        statusZahteva: "Podnet",
      });
    } else if (
      number2 &&
      number3 &&
      number4 &&
      !number5 &&
      !number6 &&
      !number7 &&
      !number8 &&
      !number9 &&
      !number10
    ) {
      setPodaci({
        ime: name,
        prezime: surname,
        ulica: street,
        broj: streetNumber,
        mesto: location,
        telefon: phoneNumber,
        email: email,
        parcele: [
          {
            broj: parcelNumber,
            podbroj: parcelSubnumber,
            katastarskaOpstina: cadastralMunicipality,
          },
          {
            broj: parcelNumber2,
            podbroj: parcelSubnumber2,
            katastarskaOpstina: cadastralMunicipality2,
          },
          {
            broj: parcelNumber3,
            podbroj: parcelSubnumber3,
            katastarskaOpstina: cadastralMunicipality3,
          },
          {
            broj: parcelNumber4,
            podbroj: parcelSubnumber4,
            katastarskaOpstina: cadastralMunicipality4,
          },
        ],
        vrstaZahteva: requestType,
        dostavitiPutem: locationInfo,
        statusZahteva: "Podnet",
      });
    } else if (
      number2 &&
      number3 &&
      number4 &&
      number5 &&
      !number6 &&
      !number7 &&
      !number8 &&
      !number9 &&
      !number10
    ) {
      setPodaci({
        ime: name,
        prezime: surname,
        ulica: street,
        broj: streetNumber,
        mesto: location,
        telefon: phoneNumber,
        email: email,
        parcele: [
          {
            broj: parcelNumber,
            podbroj: parcelSubnumber,
            katastarskaOpstina: cadastralMunicipality,
          },
          {
            broj: parcelNumber2,
            podbroj: parcelSubnumber2,
            katastarskaOpstina: cadastralMunicipality2,
          },
          {
            broj: parcelNumber3,
            podbroj: parcelSubnumber3,
            katastarskaOpstina: cadastralMunicipality3,
          },
          {
            broj: parcelNumber4,
            podbroj: parcelSubnumber4,
            katastarskaOpstina: cadastralMunicipality4,
          },
          {
            broj: parcelNumber5,
            podbroj: parcelSubnumber5,
            katastarskaOpstina: cadastralMunicipality5,
          },
        ],
        vrstaZahteva: requestType,
        dostavitiPutem: locationInfo,
        statusZahteva: "Podnet",
      });
    } else if (
      number2 &&
      number3 &&
      number4 &&
      number5 &&
      number6 &&
      !number7 &&
      !number8 &&
      !number9 &&
      !number10
    ) {
      setPodaci({
        ime: name,
        prezime: surname,
        ulica: street,
        broj: streetNumber,
        mesto: location,
        telefon: phoneNumber,
        email: email,
        parcele: [
          {
            broj: parcelNumber,
            podbroj: parcelSubnumber,
            katastarskaOpstina: cadastralMunicipality,
          },
          {
            broj: parcelNumber2,
            podbroj: parcelSubnumber2,
            katastarskaOpstina: cadastralMunicipality2,
          },
          {
            broj: parcelNumber3,
            podbroj: parcelSubnumber3,
            katastarskaOpstina: cadastralMunicipality3,
          },
          {
            broj: parcelNumber4,
            podbroj: parcelSubnumber4,
            katastarskaOpstina: cadastralMunicipality4,
          },
          {
            broj: parcelNumber5,
            podbroj: parcelSubnumber5,
            katastarskaOpstina: cadastralMunicipality5,
          },
          {
            broj: parcelNumber6,
            podbroj: parcelSubnumber6,
            katastarskaOpstina: cadastralMunicipality6,
          },
        ],
        vrstaZahteva: requestType,
        dostavitiPutem: locationInfo,
        statusZahteva: "Podnet",
      });
    } else if (
      number2 &&
      number3 &&
      number4 &&
      number5 &&
      number6 &&
      number7 &&
      !number8 &&
      !number9 &&
      !number10
    ) {
      setPodaci({
        ime: name,
        prezime: surname,
        ulica: street,
        broj: streetNumber,
        mesto: location,
        telefon: phoneNumber,
        email: email,
        parcele: [
          {
            broj: parcelNumber,
            podbroj: parcelSubnumber,
            katastarskaOpstina: cadastralMunicipality,
          },
          {
            broj: parcelNumber2,
            podbroj: parcelSubnumber2,
            katastarskaOpstina: cadastralMunicipality2,
          },
          {
            broj: parcelNumber3,
            podbroj: parcelSubnumber3,
            katastarskaOpstina: cadastralMunicipality3,
          },
          {
            broj: parcelNumber4,
            podbroj: parcelSubnumber4,
            katastarskaOpstina: cadastralMunicipality4,
          },
          {
            broj: parcelNumber5,
            podbroj: parcelSubnumber5,
            katastarskaOpstina: cadastralMunicipality5,
          },
          {
            broj: parcelNumber6,
            podbroj: parcelSubnumber6,
            katastarskaOpstina: cadastralMunicipality6,
          },
          {
            broj: parcelNumber7,
            podbroj: parcelSubnumber7,
            katastarskaOpstina: cadastralMunicipality7,
          },
        ],
        vrstaZahteva: requestType,
        dostavitiPutem: locationInfo,
        statusZahteva: "Podnet",
      });
    } else if (
      number2 &&
      number3 &&
      number4 &&
      number5 &&
      number6 &&
      number7 &&
      number8 &&
      !number9 &&
      !number10
    ) {
      setPodaci({
        ime: name,
        prezime: surname,
        ulica: street,
        broj: streetNumber,
        mesto: location,
        telefon: phoneNumber,
        email: email,
        parcele: [
          {
            broj: parcelNumber,
            podbroj: parcelSubnumber,
            katastarskaOpstina: cadastralMunicipality,
          },
          {
            broj: parcelNumber2,
            podbroj: parcelSubnumber2,
            katastarskaOpstina: cadastralMunicipality2,
          },
          {
            broj: parcelNumber3,
            podbroj: parcelSubnumber3,
            katastarskaOpstina: cadastralMunicipality3,
          },
          {
            broj: parcelNumber4,
            podbroj: parcelSubnumber4,
            katastarskaOpstina: cadastralMunicipality4,
          },
          {
            broj: parcelNumber5,
            podbroj: parcelSubnumber5,
            katastarskaOpstina: cadastralMunicipality5,
          },
          {
            broj: parcelNumber6,
            podbroj: parcelSubnumber6,
            katastarskaOpstina: cadastralMunicipality6,
          },
          {
            broj: parcelNumber7,
            podbroj: parcelSubnumber7,
            katastarskaOpstina: cadastralMunicipality7,
          },
          {
            broj: parcelNumber8,
            podbroj: parcelSubnumber8,
            katastarskaOpstina: cadastralMunicipality8,
          },
        ],
        vrstaZahteva: requestType,
        dostavitiPutem: locationInfo,
        statusZahteva: "Podnet",
      });
    } else if (
      number2 &&
      number3 &&
      number4 &&
      number5 &&
      number6 &&
      number7 &&
      number8 &&
      number9 &&
      !number10
    ) {
      setPodaci({
        ime: name,
        prezime: surname,
        ulica: street,
        broj: streetNumber,
        mesto: location,
        telefon: phoneNumber,
        email: email,
        parcele: [
          {
            broj: parcelNumber,
            podbroj: parcelSubnumber,
            katastarskaOpstina: cadastralMunicipality,
          },
          {
            broj: parcelNumber2,
            podbroj: parcelSubnumber2,
            katastarskaOpstina: cadastralMunicipality2,
          },
          {
            broj: parcelNumber3,
            podbroj: parcelSubnumber3,
            katastarskaOpstina: cadastralMunicipality3,
          },
          {
            broj: parcelNumber4,
            podbroj: parcelSubnumber4,
            katastarskaOpstina: cadastralMunicipality4,
          },
          {
            broj: parcelNumber5,
            podbroj: parcelSubnumber5,
            katastarskaOpstina: cadastralMunicipality5,
          },
          {
            broj: parcelNumber6,
            podbroj: parcelSubnumber6,
            katastarskaOpstina: cadastralMunicipality6,
          },
          {
            broj: parcelNumber7,
            podbroj: parcelSubnumber7,
            katastarskaOpstina: cadastralMunicipality7,
          },
          {
            broj: parcelNumber8,
            podbroj: parcelSubnumber8,
            katastarskaOpstina: cadastralMunicipality8,
          },
          {
            broj: parcelNumber9,
            podbroj: parcelSubnumber9,
            katastarskaOpstina: cadastralMunicipality9,
          },
        ],
        vrstaZahteva: requestType,
        dostavitiPutem: locationInfo,
        statusZahteva: "Podnet",
      });
    } else if (
      number2 &&
      number3 &&
      number4 &&
      number5 &&
      number6 &&
      number7 &&
      number8 &&
      number9 &&
      number10
      ) {
      setPodaci({
        ime: name,
        prezime: surname,
        ulica: street,
        broj: streetNumber,
        mesto: location,
        telefon: phoneNumber,
        email: email,
        parcele: [
          {
            broj: parcelNumber,
            podbroj: parcelSubnumber,
            katastarskaOpstina: cadastralMunicipality,
          },
          {
            broj: parcelNumber2,
            podbroj: parcelSubnumber2,
            katastarskaOpstina: cadastralMunicipality2,
          },
          {
            broj: parcelNumber3,
            podbroj: parcelSubnumber3,
            katastarskaOpstina: cadastralMunicipality3,
          },
          {
            broj: parcelNumber4,
            podbroj: parcelSubnumber4,
            katastarskaOpstina: cadastralMunicipality4,
          },
          {
            broj: parcelNumber5,
            podbroj: parcelSubnumber5,
            katastarskaOpstina: cadastralMunicipality5,
          },
          {
            broj: parcelNumber6,
            podbroj: parcelSubnumber6,
            katastarskaOpstina: cadastralMunicipality6,
          },
          {
            broj: parcelNumber7,
            podbroj: parcelSubnumber7,
            katastarskaOpstina: cadastralMunicipality7,
          },
          {
            broj: parcelNumber8,
            podbroj: parcelSubnumber8,
            katastarskaOpstina: cadastralMunicipality8,
          },
          {
            broj: parcelNumber9,
            podbroj: parcelSubnumber9,
            katastarskaOpstina: cadastralMunicipality9,
          },
          {
            broj: parcelNumber10,
            podbroj: parcelSubnumber10,
            katastarskaOpstina: cadastralMunicipality10,
          },
        ],
        vrstaZahteva: requestType,
        dostavitiPutem: locationInfo,
        statusZahteva: "Podnet",
      });
    }
  }, [
    name,
    surname,
    street,
    streetNumber,
    location,
    phoneNumber,
    email,
    parcelNumber,
    parcelSubnumber,
    cadastralMunicipality,
    parcelNumber2,
    parcelSubnumber2,
    cadastralMunicipality2,
    parcelNumber3,
    parcelSubnumber3,
    cadastralMunicipality3,
    parcelNumber4,
    parcelSubnumber4,
    cadastralMunicipality4,
    parcelNumber5,
    parcelSubnumber5,
    cadastralMunicipality5,
    parcelNumber6,
    parcelSubnumber6,
    cadastralMunicipality6,
    parcelNumber7,
    parcelSubnumber7,
    cadastralMunicipality7,
    parcelNumber8,
    parcelSubnumber8,
    cadastralMunicipality8,
    parcelNumber9,
    parcelSubnumber9,
    cadastralMunicipality9,
    parcelNumber10,
    parcelSubnumber10,
    cadastralMunicipality10,
    requestType,
    locationInfo,
    number2,
    number3,
    number4,
    number5,
    number6,
    number7,
    number8,
    number9,
    number10,
  ]);
  const [submit, setSubmit] = useState("");
  const [singleId, setSingleId] = useState('')

  const handleSubmit = async (e) => {
    setSubmit("loading");
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://bp-be.onrender.com/zahtevi",
        podaci
      );
      const data = await response.data;
      const id = await data._id.replace(/\D/g, '');
      setSingleId(id);
      setSubmit("success");
      setShowPayCheck(true)
    } catch (err) {
      console.log(err);
      setSubmit("error");
    }
  };

  const [showAdmin, setShowAdmin] = useState(false);

  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin") || false);

  useEffect(() => {
    if (isAdmin) {
      // Pozovite funkciju koja prikazuje prozor sa tabelom
      setShowTable(true);
    } else {
      setShowTable(false);
    }
  }, [isAdmin]);


  return (
    <>
      {showAdmin && (
        <Admin setShowAdmin={setShowAdmin} setShowTable={setShowTable} setIsAdmin={setIsAdmin} />
      )}
      {showTable && (
        <Table
          showTable={showTable}
          setShowTable={setShowTable}
          setShowAdmin={setShowAdmin}
          setIsAdmin={setIsAdmin}
        />
      )}
      {loader && <Loader />}
      {showPayCheck && <Uplatnica setShowPayCheck={setShowPayCheck} showPayCheck={showPayCheck} singleId={singleId} />}
      <div className="App w-full">
        <Navbar setShowAdmin={setShowAdmin} />
        <form
          // action="https://formsubmit.co/jocikam738@gmail.com"
          onSubmit={handleSubmit}
          method="POST"
          className="w-full md:w-[640px] mx-auto form p-4"
        >
          <div className="w-full md:w-[600px] md:px-0 md:mx-auto">
            <Request />
            <Applicant />
            <LocationInfo />
            {/* <button
              className="py-3 px-6 rounded-xl mx-auto block my-8 bg-[#2EA295] hover:bg-[#2EA295]/75 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-medium"
              onClick={(e) => {
                e.preventDefault();
                setShowPayCheck(true);
              }}
            >
              {language === "cir" ? `Прикажи уплатницу` : `Prikaži uplatnicu`}{" "}
              <img src={check} alt="qr" className="inline ml-3" />
            </button> */}
            <Rules />
            <Submit submit={submit} />
          </div>
        </form>
        <Footer />
      </div>
    </>
  );
}

export default App;
