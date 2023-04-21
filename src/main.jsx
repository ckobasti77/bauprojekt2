import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ContextAllProvider } from "./context/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextAllProvider>
      <Router>
        <App />
      </Router>
    </ContextAllProvider>
  </React.StrictMode>
);
