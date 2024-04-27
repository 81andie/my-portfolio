import React from 'react'

export const Contacto = () => {



  return (


    <>
    
    <div> <h1 className="form_title">Si quieres la página de tus sueños, déjame tu correo, <br />me pondré en contacto contigo, juntos encontraremos la fórmula</h1></div>

     <form className="register-form" >

       


        <div className="form-group">
          
            {/* Contenido del div aquí */}
            <img src="https://img.freepik.com/foto-gratis/icono-proceso-diseno-creacion-ideas_53876-124499.jpg?t=st=1714231630~exp=1714235230~hmac=5bed6039feab31a0ae4ec86005459c2110a8045c6d3634b85e906296716faa74&w=360" className="imagen_form"/>
          
         
          </div>

          <div className="contenedor_inputs">
        
         <div className="form-inputs">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" />
        </div>

        <div className="form-group">
          <label htmlFor="correo">Correo electrónico</label>
          <input type="email" name="email" />
        </div>

        <input type="submit" value="Registrate" className='btn-Registrate' />
     
        </div>
      </form>
    </>
  )
}
