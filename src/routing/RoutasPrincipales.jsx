import React from 'react'
import {Routes, Route,BrowserRouter} from 'react-router-dom';
import { Inicio } from '../Components/Inicio';

export const RoutasPrincipales = () => {
  return (

    <BrowserRouter>
    <Routes>
   
       <Route path= "/" element= {<Inicio/>}/>
       <Route path= "/inicio" element= {<Inicio/>}/>
      
    </Routes>
   
    
    
    
    
    </BrowserRouter>
    
  )
}
