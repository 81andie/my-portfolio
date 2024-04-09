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

        <i className={theme === 'light' ? 'pi pi-sun' : 'pi pi-moon'}></i>
        <br/> {theme === 'light' ? 'LIGHT THEME' : 'DARK THEME'}
        </button>
      
        <RoutasPrincipales />
       

      </div>
    </div>


  );
}

export default App;
