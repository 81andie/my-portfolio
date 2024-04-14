import React from 'react'
import { NavLink } from 'react-router-dom';





export const Header = () => {

  let img = "img/logo.jpeg";

  

  return (
    <>



      <div className="header">

        <div className="logo_container"w>

          <img src={img} className='logo_header' alt="logo-imagen" />

          <div className="navbar">
            <NavLink to="/inicio" className="enlaces_navbar">Inicio</NavLink>
           
            <details>
              <summary className="enlaces_navbar">Conóceme algo más</summary>
              <NavLink to="/sobremi" className="enlaces">Sobre mi</NavLink>
              <NavLink to="/queofrezco" className="enlaces"> Que ofrezco?</NavLink>
            </details>




            <details>
              <summary className="enlaces_navbar">Formación</summary>
              <NavLink to="/skills" className="enlaces">Skills</NavLink>
              <NavLink to="/certificaciones" className="enlaces"> Certificaciones</NavLink>
            </details>

            <NavLink to="/contacto" className="enlaces_navbar">Contacto</NavLink>

          </div>

        </div>


      </div>

    </>
  )
}
