import React from 'react'
import './Footer.css';

export const Footer = () => {

  let img = "img/logo2.png";
  return (
    <>
      <div className="flex flex-col md:flex-row  lg:flex-row justify-center items-center gap-2">
      <img src={img} className='w-28 h-28 ' alt="logo-imagen" />

        <div className="icons_social flex flex-row text-3xl justify-center">
    
          <i className="pi pi-github mr-1" style={{ color: '#e040a4' }}></i>
          <i className="pi pi-linkedin" style={{ color: '#e040a4' }}></i>
          </div>

        <div className="text-center mb-2">
       
        <h3 className="text-slate-500"> Diseñadora página web y desarrollor Web:<br/> Andrea Hernández <br/>©2024 Andrea Hernández | All Rights Reserved </h3>
        
        
       
        

       
        </div>
       
      

      </div>

    </>
  )
}
