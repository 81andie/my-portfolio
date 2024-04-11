import React from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




export const Header = () => {

  let img = "img/logo.jpeg";

  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    navigate(selectedOption);
        
  }
  return (
    <>

        

      <div className="header">

        <div className="logo_container">

        <img src={img} className='logo_header' alt="logo-imagen"/>
        <div className="navbar">
          <NavLink to="/inicio" className="enlaces_navbar">Inicio</NavLink>
          <select className="enlaces_navbar" onChange={handleOptionChange}>
      <option value="/sobremi">Sobre mi</option>

      <option value="/queofrezco">Qué ofrezco</option>
    </select>
          <NavLink to="/skills" className="enlaces_navbar">Skills</NavLink>
          <NavLink to="/proyectos" className="enlaces_navbar">Proyectos</NavLink>
          <NavLink to="/contacto" className="enlaces_navbar">Contacto</NavLink>

        </div>
        
        </div>

       
      </div>
     
    </>
  )
}
