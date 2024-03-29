import React from 'react'

export const Header = () => {

    let img = "img/logo.jpeg";

  return (
    
    <div className="header">
       <img src ={img} className='logo_header'/>
     

       <div className="navbar">
        <li>Inicio</li>
        <li>CV</li>
        <li>Proyectos</li>
        <li>Contacto</li>
       </div>
    </div>
  )
}
