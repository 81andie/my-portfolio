import React from 'react';
import './App.css';
import './index.css';


import './ErrorPage.css';
import { useState, useEffect } from 'react';
import { RoutasPrincipales } from './routing/RoutasPrincipales';
import { I18nextProvider } from 'react-i18next';
import i18n from './Configuracion/i18n';
import LanguageSelector from './Components/LanguageSelector';


const Moon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
);

const Sun = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clipRule="evenodd"
    />
  </svg>
);



function App() {

 const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      window.document.documentElement.classList.add("dark");
      setIsDarkMode(true)
    }

  }, [])

  const handleClick = () => {
    if (isDarkMode) {
      window.document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
      window.document.documentElement.classList.add("dark");
    }
    setIsDarkMode(!isDarkMode);

  }









  return (

    <>
      <I18nextProvider i18n={i18n}>
        <div className=" dark:bg-zinc-800 ">
          <div>

            <div className="marquee-wrapper">
              <div className="marquee-content">
                <p>_WEB <strong>DEVELOPER FRONTEND</strong>__<strong>H</strong>TML__ <strong>C</strong>SS__<strong>S</strong>ASS__<strong>J</strong>S__<strong>R</strong>EACT__<strong>A</strong>NGULAR___WEB <strong>DEVELOPER FRONTEND</strong>__<strong>H</strong>TML__ <strong>C</strong>SS__<strong>S</strong>ASS__<strong>J</strong>S__<strong>R</strong>EACT__<strong>A</strong>NGULAR__</p>
              </div>
            </div>

            <div className="flex justify-end items-center">

             <button className="w-8 h-8 text-yellow-300 bg-blue-50 dark:bg-zinc-700 dark:text-white flex justify-center items-center mt-2 rounded-full"
                onClick={handleClick}
                aria-label={`Toggle ${isDarkMode ? "light" : "dark"} mode`}

              >

                {isDarkMode ? <Moon /> : <Sun />}
              </button>
              <LanguageSelector />

            </div>



            <RoutasPrincipales />


          </div>
        </div>

      </I18nextProvider>



    </>
  );
}

export default App;