import React from 'react';
import './App.css';
import { RoutasPrincipales } from './routing/RoutasPrincipales';
import {Inicio} from './Components/Inicio';


function App() {
  return (
    <div className="App">
      
     <RoutasPrincipales/>
     <Inicio/>
   
    </div>
  );
}

export default App;
