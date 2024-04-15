import React from 'react';
import './App.css';
import './Certificaciones.css';
import './responsive.css'
import { useState } from 'react';
import { RoutasPrincipales } from './routing/RoutasPrincipales';
import { Footer } from './Components/Footer';
import { I18nextProvider } from 'react-i18next';
import i18n from './Configuracion/i18n'; // Importa tu archivo de configuración de i18next
import LanguageSelector from './Components/LanguageSelector';







function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

 



  return (


<>


<I18nextProvider i18n={i18n}>


    <div className="App">
    <LanguageSelector />

      <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
        <button className={theme} onClick={toggleTheme}>

        <i className={theme === 'light' ? 'pi pi-sun' : 'pi pi-moon'}></i>
        <br/> {theme === 'light' ? 'LIGHT THEME' : 'DARK THEME'}
        </button>
        <RoutasPrincipales />
        <Footer/>
      </div>
    </div>
  
    </I18nextProvider>
  
   </> 
  );
}

export default App;
