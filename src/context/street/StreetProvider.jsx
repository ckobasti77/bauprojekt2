import React, { useState, useEffect } from "react";
import StreetContext from "./StreetContext";

const StreetProvider = ({ children }) => {
  const [street, setStreet] = useState("");

  return (
    <StreetContext.Provider value={{ street, setStreet }}>
      {children}
    </StreetContext.Provider>
  );
};

export default StreetProvider;
