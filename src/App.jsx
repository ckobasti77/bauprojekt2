import React, { useState, useContext, useEffect } from "react";
import { LanguageContext } from "./context/context";

import {
  Loader,
  Navbar,
  Applicant,
  Request,
  Rules,
  Footer,
  Uplatnica,
} from "./components/components";

import { qr, check } from "./assets/assets";

function App() {
  const { language } = useContext(LanguageContext);

  const [loader, setLoader] = useState(true);
  const [showPayCheck, setShowPayCheck] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 4000);
  }, []);

  return (
    <>
      {loader && <Loader />}
      {showPayCheck && <Uplatnica setShowPayCheck={setShowPayCheck} />}
      <div className="App w-full">
        <Navbar />
        <form
          action="https://formsubmit.co/jocikam738@gmail.com"
          method="POST"
          className="w-full md:w-[640px] mx-auto form p-4"
        >
          <div className="w-full md:w-[600px] md:px-0 md:mx-auto">
            <Applicant />
          </div>
          <div className="w-full md:w-[600px] md:px-0 md:mx-auto">
            <Request />
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
            <button
              type="submit"
              className="py-3 px-6 rounded-xl mx-auto block my-8 bg-[#2EA295] hover:bg-[#2EA295]/75 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-medium"
            >
              {language === "cir" ? "Поднеси захтев" : "Podnesi zahtev"}
            </button>
          </div>
        </form>
        <Footer />
      </div>
    </>
  );
}

export default App;
