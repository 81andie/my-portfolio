import React from 'react'

export const Contacto = () => {



  return (


    <>


    <div className="contenedor_principal">
    <div className="contenedor_información">
          <h4 className="contenedorTituloy_Span">Si lo prefieres, puedes contactar conmigo directamente, enviame un Whasapp a este número:</h4>
          <span className="span_mobil"> XXX XX XX XX</span>
          <br/>
          <span className="contenedor_SpanOrientacion">También puedes transladarme tus propuestas, las estudiamos y te ofrezco mis orientaciones y presupuestos, puedes escribirme aqui:</span>
          <br/>
          <span className="span_email">andie@hotmail.com</span>
        </div>
      <div className="contenedor_inputs">
       

        <div className="form-inputs">
          <h3>Contacto</h3>
          <img src="https://cdn.pixabay.com/photo/2014/08/25/22/53/control-427512_1280.png" className="img-form" />
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" />
        </div>

        <div className="form-group">
          <label htmlFor="correo">Correo electrónico</label>
          <input type="email" name="email" />
        </div>

        <input type="submit" value="Registrate" className='btn-Registrate' />

      </div>
      </div>


    </>
  )
}
