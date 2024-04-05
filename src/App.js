import React from 'react';
import './App.css';
import './responsive.css'
import {useState} from 'react';
import { RoutasPrincipales } from './routing/RoutasPrincipales';



function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  return (
    
    <div className="App">

      <div className= {theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <button className={theme} onClick={toggleTheme}>Cambiar theme</button>

      <RoutasPrincipales/>
    
   </div>
    </div>

 
  );
}

export default App;
