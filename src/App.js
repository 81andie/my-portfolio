import React from 'react';
import './App.css';
import './responsive.css'
import { useState } from 'react';
import { RoutasPrincipales } from './routing/RoutasPrincipales';
import { SeccionInformativa } from './Components/SeccionInformativa';



function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  return (

    <div className="App">


      <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
        <button className={theme} onClick={toggleTheme}>

          <i className="pi pi-moon"></i>
         <br/> DARK THEME
        </button>
      
        <RoutasPrincipales />
        <SeccionInformativa/>

      </div>
    </div>


  );
}

export default App;
