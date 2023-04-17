import React, { useState, useEffect } from "react";
import SurnameContext from "./SurnameContext";

const SurnameProvider = ({ children }) => {
  const [surname, setSurname] = useState("");

  return (
    <SurnameContext.Provider value={{ surname, setSurname }}>
      {children}
    </SurnameContext.Provider>
  );
};

export default SurnameProvider;
