import React from 'react'
import { NavLink } from 'react-router-dom';




export const Header = () => {

  let img = "img/logo.jpeg";

  return (
    <>


      <div className="header">

        <img src={img} className='logo_header' />

        <div className="navbar">
          <NavLink to="/inicio" className="enlaces_navbar">Inicio</NavLink>
          <NavLink to="/curriculum" className="enlaces_navbar">Curriculum</NavLink>
          <NavLink to="/proyectos" className="enlaces_navbar">Proyectos</NavLink>
          <NavLink to="/contacto" className="enlaces_navbar">Contacto</NavLink>

        </div>
      </div>
    </>
  )
}