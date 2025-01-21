import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Inicio } from '../Components/Inicio';
import { Skills } from '../Components/Skills';


import { Contacto } from '../Components/Contacto';

import { Sobremi } from '../Components/Sobremi';
import { Queofrezco } from '../Components/Queofrezco';
import { Certificaciones } from '../Components/Certificaciones';
import { Header } from '../Components/Header';
import { ErrorPage } from './ErrorPage';
import { Footer } from '../Components/Footer';
import { ProjectDetails } from '../Components/ProjectDetails';










export const RoutasPrincipales = () => {
  return (
    <>
     
      <BrowserRouter basename='/my-portfolio'>
        <Header />
        <Routes>

          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/sobremi" element={<Sobremi />} />
          <Route path="/queofrezco" element={<Queofrezco />} />
         

          <Route path="/skills" element={<Skills />} />
          <Route path="/certificaciones" element={<Certificaciones />} />
      
          <Route path="/proyectos/:id" element={<ProjectDetails/>}/>
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<ErrorPage />}

          />

        </Routes>

      <Footer/>

      </BrowserRouter>

    </>
  )
}






