import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import {
  LanguageProvider,
  NameProvider,
  SurnameProvider,
  LocationProvider,
  StreetNumberProvider,
  StreetProvider,
} from "./context/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StreetProvider>
      <StreetNumberProvider>
        <LocationProvider>
          <SurnameProvider>
            <NameProvider>
              <LanguageProvider>
                <App />
              </LanguageProvider>
            </NameProvider>
          </SurnameProvider>
        </LocationProvider>
      </StreetNumberProvider>
    </StreetProvider>
  </React.StrictMode>
);
