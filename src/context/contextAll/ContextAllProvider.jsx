import React, { useState, useEffect } from "react";
import ContextAll from "./ContextAll";

const ContextAllProvider = ({ children }) => {
  const [language, setLanguage] = useState("");

  useEffect(() => {
    setLanguage("cir");
  }, []);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [street, setStreet] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [parcelNumber, setParcelNumber] = useState("");
  const [parcelSubnumber, setParcelSubnumber] = useState("");
  const [cadastralMunicipality, setCadastralMunicipality] = useState("");
  const [parcelNumber2, setParcelNumber2] = useState("");
  const [parcelSubnumber2, setParcelSubnumber2] = useState("");
  const [cadastralMunicipality2, setCadastralMunicipality2] = useState("");
  const [parcelNumber3, setParcelNumber3] = useState("");
  const [parcelSubnumber3, setParcelSubnumber3] = useState("");
  const [cadastralMunicipality3, setCadastralMunicipality3] = useState("");
  const [parcelNumber4, setParcelNumber4] = useState("");
  const [parcelSubnumber4, setParcelSubnumber4] = useState("");
  const [cadastralMunicipality4, setCadastralMunicipality4] = useState("");
  const [parcelNumber5, setParcelNumber5] = useState("");
  const [parcelSubnumber5, setParcelSubnumber5] = useState("");
  const [cadastralMunicipality5, setCadastralMunicipality5] = useState("");
  const [parcelNumber6, setParcelNumber6] = useState("");
  const [parcelSubnumber6, setParcelSubnumber6] = useState("");
  const [cadastralMunicipality6, setCadastralMunicipality6] = useState("");
  const [parcelNumber7, setParcelNumber7] = useState("");
  const [parcelSubnumber7, setParcelSubnumber7] = useState("");
  const [cadastralMunicipality7, setCadastralMunicipality7] = useState("");
  const [parcelNumber8, setParcelNumber8] = useState("");
  const [parcelSubnumber8, setParcelSubnumber8] = useState("");
  const [cadastralMunicipality8, setCadastralMunicipality8] = useState("");
  const [parcelNumber9, setParcelNumber9] = useState("");
  const [parcelSubnumber9, setParcelSubnumber9] = useState("");
  const [cadastralMunicipality9, setCadastralMunicipality9] = useState("");
  const [parcelNumber10, setParcelNumber10] = useState("");
  const [parcelSubnumber10, setParcelSubnumber10] = useState("");
  const [cadastralMunicipality10, setCadastralMunicipality10] = useState("");
  const [requestType, setRequestType] = useState("");
  const [locationInfo, setLocationInfo] = useState("");

  return (
    <ContextAll.Provider
      value={{
        language,
        setLanguage,
        name,
        setName,
        surname,
        setSurname,
        street,
        setStreet,
        streetNumber,
        setStreetNumber,
        location,
        setLocation,
        phoneNumber,
        setPhoneNumber,
        email,
        setEmail,
        parcelNumber,
        setParcelNumber,
        parcelSubnumber,
        setParcelSubnumber,
        cadastralMunicipality,
        setCadastralMunicipality,
        parcelNumber2,
        setParcelNumber2,
        parcelSubnumber2,
        setParcelSubnumber2,
        cadastralMunicipality2,
        setCadastralMunicipality2,
        parcelNumber3,
        setParcelNumber3,
        parcelSubnumber3,
        setParcelSubnumber3,
        cadastralMunicipality3,
        setCadastralMunicipality3,
        parcelNumber4,
        setParcelNumber4,
        parcelSubnumber4,
        setParcelSubnumber4,
        cadastralMunicipality4,
        setCadastralMunicipality4,
        parcelNumber5,
        setParcelNumber5,
        parcelSubnumber5,
        setParcelSubnumber5,
        cadastralMunicipality5,
        setCadastralMunicipality5,
        parcelNumber6,
        setParcelNumber6,
        parcelSubnumber6,
        setParcelSubnumber6,
        cadastralMunicipality6,
        setCadastralMunicipality6,
        parcelNumber7,
        setParcelNumber7,
        parcelSubnumber7,
        setParcelSubnumber7,
        cadastralMunicipality7,
        setCadastralMunicipality7,
        parcelNumber8,
        setParcelNumber8,
        parcelSubnumber8,
        setParcelSubnumber8,
        cadastralMunicipality8,
        setCadastralMunicipality8,
        parcelNumber9,
        setParcelNumber9,
        parcelSubnumber9,
        setParcelSubnumber9,
        cadastralMunicipality9,
        setCadastralMunicipality9,
        parcelNumber10,
        setParcelNumber10,
        parcelSubnumber10,
        setParcelSubnumber10,
        cadastralMunicipality10,
        setCadastralMunicipality10,
        requestType,
        setRequestType,
        locationInfo,
        setLocationInfo,
      }}
    >
      {children}
    </ContextAll.Provider>
  );
};

export default ContextAllProvider;
