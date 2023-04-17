import React, { useState, useEffect } from "react";
import LocationContext from "./LocationContext";

const LocationProvider = ({ children }) => {
const [location, setLocation] = useState('');

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
