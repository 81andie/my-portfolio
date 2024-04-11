import React from 'react'

export const Footer = () => {

    let img = "img/logo.jpeg";
  return (
    <>
    <div className="footer">
    <img src={img} className='logo_footer' alt="logo-imagen"/>

    <div className="icons_social">
  
    <i className="pi pi-instagram" style={{ color: 'rgba(35, 158, 224, 0.817)' }}></i>
    <i className="pi pi-facebook" style={{ color:  'rgba(35, 158, 224, 0.817)'}}></i>
    <i className="pi pi-github" style={{ color: 'rgba(35, 158, 224, 0.817)' }}></i>
    <i className="pi pi-telegram" style={{ color: 'rgba(35, 158, 224, 0.817)' }}></i>
    </div>
        <h4>Diseñadora página web y desarrollor Web:</h4>
        <h3>Andrea Hernández</h3>
        <i className="pi pi-envelope" style={{ color: 'rgba(35, 158, 224, 0.817)' }}> pianistgirl81@gmail.com</i>
       
       <h5> ©2024 Andrea Hernández | All Rights Reserved <br/>Todos los derechos reservados</h5> 
       
    </div>

    </>
  )
}
