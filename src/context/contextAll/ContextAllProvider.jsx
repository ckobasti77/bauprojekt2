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
