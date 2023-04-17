import React, { useState, useEffect } from "react";
import StreetNumberContext from "./StreetNumberContext";

const StreetNumberProvider = ({ children }) => {
  const [streetNumber, setStreetNumber] = useState("");

  return (
    <StreetNumberContext.Provider value={{ streetNumber, setStreetNumber }}>
      {children}
    </StreetNumberContext.Provider>
  );
};

export default StreetNumberProvider;
