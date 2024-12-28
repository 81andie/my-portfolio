import React from 'react';
import './App.css';
import './index.css';
import './Certificaciones.css';
import './responsive.css';
import './ErrorPage.css';
import { useState } from 'react';
import { RoutasPrincipales } from './routing/RoutasPrincipales';
import { I18nextProvider } from 'react-i18next';
import i18n from './Configuracion/i18n'; 
import LanguageSelector from './Components/LanguageSelector';
import {Footer} from  './Components/Footer';



function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };





  return (


    <>
      <I18nextProvider i18n={i18n}>
     
          <div className="App">
          <div className= {theme === 'light' ? 'light-theme' : 'dark-theme' }>
            <div className="marquee-wrapper">
              <div className="marquee-content">
                <p>_WEB <strong>DEVELOPER FRONTEND</strong>__<strong>H</strong>TML__ <strong>C</strong>SS__<strong>S</strong>ASS__<strong>J</strong>S__<strong>R</strong>EACT__<strong>A</strong>NGULAR___WEB <strong>DEVELOPER FRONTEND</strong>__<strong>H</strong>TML__ <strong>C</strong>SS__<strong>S</strong>ASS__<strong>J</strong>S__<strong>R</strong>EACT__<strong>A</strong>NGULAR__</p>
              </div>
            </div>
            <LanguageSelector />
          
            <button className={theme} onClick={toggleTheme}>
              <i className={theme === 'light' ? 'pi pi-sun' : 'pi pi-moon'}></i>
              <br /> {theme === 'light' ? 'LIGHT THEME' : 'DARK THEME'}
            </button>

            <RoutasPrincipales/>
            <Footer/>
           
          </div>
        </div>

      </I18nextProvider>
    
   

    </>
  );
}

export default App;