import React from 'react'
import {NavLink } from 'react-router-dom';




export const Header = () => {

    let img = "img/logo.jpeg";

  return (
    
    <div className="header">
       <img src ={img} className='logo_header'/>
     
       <div className="navbar">
        <NavLink to="/inicio">Inicio</NavLink>
        <NavLink to="/curriculum">Curriculum</NavLink>
        <NavLink to="/proyectos">Proyectos</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
       
       </div>
    </div>
  )
}
