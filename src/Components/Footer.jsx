import React from 'react'

export const Footer = () => {

  let img = "img/logo2.png";
  return (
    <>
      <div className="footer">
      <img src={img} className='logo_footer' alt="logo-imagen" />

        <div className="icons_social">
      
          <i className="pi pi-instagram" style={{ color: 'rgba(35, 158, 224, 0.817)' }}></i>
          <i className="pi pi-facebook" style={{ color: 'rgba(35, 158, 224, 0.817)' }}></i>
          <i className="pi pi-github" style={{ color: 'rgba(35, 158, 224, 0.817)' }}></i>
          <i className="pi pi-telegram" style={{ color: 'rgba(35, 158, 224, 0.817)' }}></i>
          </div>

        <div className="contacto_footer">

        <h3 className="dev_nombre"> Diseñadora página web y desarrollor Web:<br/> Andrea Hernández <br/>©2024 Andrea Hernández | All Rights Reserved </h3>
        
        
        <i className="pi pi-envelope" style={{ color: 'rgba(35, 158, 224, 0.817)' }}></i>
        <h2>pianistgirl81@gmail.com</h2>

       
        </div>
       
      

      </div>

    </>
  )
}
