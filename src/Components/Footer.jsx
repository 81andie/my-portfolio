import React from 'react'
import './Footer.css';

export const Footer = () => {

  let img = "img/logo2.png";
  return (
    <>
      <div className="flex justify-center md:flex-row ">
      <img src={img} className='w-20 h-20' alt="logo-imagen" />

        <div className="icons_social">
        
          <i className="pi pi-instagram" style={{ color: '#e040a4' }}></i>
          <i className="pi pi-facebook" style={{ color: '#e040a4' }}></i>
          <i className="pi pi-github" style={{ color: '#e040a4' }}></i>
          <i className="pi pi-telegram" style={{ color: '#e040a4' }}></i>
          </div>

        <div className="contacto_footer">
       
        <h3 className="dev_nombre"> Diseñadora página web y desarrollor Web:<br/> Andrea Hernández <br/>©2024 Andrea Hernández | All Rights Reserved </h3>
        
        
       
        

       
        </div>
       
      

      </div>

    </>
  )
}
