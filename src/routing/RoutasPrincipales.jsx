import React from 'react'
import {Routes, Route,BrowserRouter} from 'react-router-dom';
import { Inicio } from '../Components/Inicio';
import {Skills} from '../Components/Skills';
import { Header } from '../Components/Header';
import { Proyectos } from '../Components/Proyectos';
import { Contacto } from '../Components/Contacto';

import { Sobremi } from '../Components/Sobremi';
import { Queofrezco } from '../Components/Queofrezco';



export const RoutasPrincipales = () => {
  return (
<>
    <BrowserRouter>
    <Header/>
   
    <Routes>
   
       <Route path= "/" element= {<Inicio/>}/>
       <Route path= "/inicio" element= {<Inicio/>}/>
       <Route path= "/sobremi" element= {<Sobremi/>}/>
       <Route path="/queofrezco" element={<Queofrezco/>}/>
       <Route path= "/skills" element= {<Skills/>}/>
       <Route path= "/proyectos" element= {<Proyectos/>}/>
       <Route path= "/contacto" element= {<Contacto/>}/>
       
      
    </Routes>
  
   
    
    
    
    
    </BrowserRouter>
 
    </>
  )
}
