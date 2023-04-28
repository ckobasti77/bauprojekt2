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
    requestType,
    locationInfo,
  } = useContext(ContextAll);

  const [showTable, setShowTable] = useState(false)

  const [loader, setLoader] = useState(true);
  const [showPayCheck, setShowPayCheck] = useState(false);

  const [podaci, setPodaci] = useState({
    ime: "Zoranaaa",
    prezime: "Mihajlovic",
    ulica: "Mis",
    broj: "11",
    mesto: "Beograd",
    telefon: "+381 65 123 45 67",
    email: "testemail@gmail.com",
    parcele: [{ broj: "111", podbroj: "111", katastarskaOpstina: "Leposavic" }],
    vrstaZahteva: "Standardan",
    dostavitiPutem: "Pošta",
  });
  
  

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  const podatci = {
    ime: "Zoranaaa",
    prezime: "Mihajlovic",
    ulica: "Mis",
    broj: "11",
    mesto: "Beograd",
    telefon: "+381 65 123 45 67",
    email: "testemail@gmail.com",
    parcele: [{ broj: "111", podbroj: "111", katastarskaOpstina: "Leposavic" }],
    vrstaZahteva: "Standardan",
    dostavitiPutem: "Pošta",
  };

  useEffect(() => {
    if (
      !parcelNumber3 &&
      !parcelSubnumber3 &&
      !cadastralMunicipality3 &&
      parcelNumber2 &&
      parcelSubnumber2 &&
      cadastralMunicipality2
    ) {
      setPodaci({
          "ime": name,
          "prezime": surname,
          "ulica": street,
          "broj": streetNumber,
          "mesto": location,
          "telefon": phoneNumber,
          "email": email,
          "parcele": [
            {
              "broj": parcelNumber,
              "podbroj": parcelSubnumber,
              "katastarskaOpstina": cadastralMunicipality,
            },
            parcelNumber2 && {
              "broj": parcelNumber2,
              "podbroj": parcelSubnumber2,
              "katastarskaOpstina": cadastralMunicipality2,
            },
          ],
          "vrstaZahteva": requestType,
          "dostavitiPutem": locationInfo,
          "statusZahteva": "Podnet",
        }
      );
    } else if (
      !parcelNumber2 &&
      !parcelSubnumber2 &&
      !cadastralMunicipality2 &&
      parcelNumber &&
      parcelSubnumber &&
      cadastralMunicipality
    ) {
      setPodaci({
          "ime": name,
          "prezime": surname,
          "ulica": street,
          "broj": streetNumber,
          "mesto": location,
          "telefon": phoneNumber,
          "email": email,
          "parcele": [
            {
              "broj": parcelNumber,
              "podbroj": parcelSubnumber,
              "katastarskaOpstina": cadastralMunicipality,
            },
          ],
          "vrstaZahteva": requestType,
          "dostavitiPutem": locationInfo,
          "statusZahteva": "Podnet",
        }
      );
    } else {
      setPodaci({
          "ime": name,
          "prezime": surname,
          "ulica": street,
          "broj": streetNumber,
          "mesto": location,
          "telefon": phoneNumber,
          "email": email,
          "parcele": [
            {
              "broj": parcelNumber,
              "podbroj": parcelSubnumber,
              "katastarskaOpstina": cadastralMunicipality,
            },
            parcelNumber2 && {
              "broj": parcelNumber2,
              "podbroj": parcelSubnumber2,
              "katastarskaOpstina": cadastralMunicipality2,
            },
            parcelNumber3 && {
              "broj": parcelNumber3,
              "podbroj": parcelSubnumber3,
              "katastarskaOpstina": cadastralMunicipality3,
            },
          ],
          "vrstaZahteva": requestType,
          "dostavitiPutem": locationInfo,
          "statusZahteva": "Podnet",
        }
      );
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
    requestType,
    locationInfo,
  ]);
  const [submit, setSubmit] = useState('');
  
  const handleSubmit = async (e) => {
    setSubmit('loading');
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://bp-be.onrender.com/zahtevi",
        podaci
        );
        const data = await response.data;
        setSubmit('success');
    } catch (err) {
      console.log(err);
      setSubmit('error');
    }
    location.reload();
  };

  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <>
      
      {showAdmin && <Admin setShowAdmin={setShowAdmin} setShowTable={setShowTable} />}
      {showTable && <Table showTable={showTable} setShowTable={setShowTable} setShowAdmin={setShowAdmin}/>}
      {loader && <Loader />}
      {showPayCheck && <Uplatnica setShowPayCheck={setShowPayCheck} />}
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
            <button
              className="py-3 px-6 rounded-xl mx-auto block my-8 bg-[#2EA295] hover:bg-[#2EA295]/75 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-medium"
              onClick={(e) => {
                e.preventDefault();
                setShowPayCheck(true);
              }}
            >
              {language === "cir" ? `Прикажи уплатницу` : `Prikaži uplatnicu`}{" "}
              <img src={check} alt="qr" className="inline ml-3" />
            </button>
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
