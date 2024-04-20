import React from 'react'
import { useState, useEffect } from 'react';

export const Contacto = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (


    <>
    <form className="register-form" >

    <h1 className="form_title">Si quieres la página de tus sueños, déjame tu correo, <br/>me pondré en contacto contigo, juntos encontraremos la fórmula</h1>
         
         
         <div className="form-group">
         <div className="img_src" style={{ transform: `translate(-${scrollPosition / 3}px, ${scrollPosition / 2}px)` }}>
  {/* Contenido del div aquí */}
</div>


              <label htmlFor="name">Nombre</label>
              <input type="text" name="name"  />
            </div>

            <div className="form-group">
              <label htmlFor="nick">Correo electrónico</label>
              <input type="email" name="email"  />
            </div>

            <input type="submit" value="Registrate" className='btn-Registrate' />
            
            </form>
            </>
  )
}
