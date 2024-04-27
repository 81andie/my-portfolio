import React from 'react'

export const Contacto = () => {



  return (


    <>


    <div className="contenedor_principal">
      <div className="contenedor_inputs">

        <div className="form-inputs">
          <h3>Por deja tu nombre, y tu email, te contactaré lo más rápido posible. O si lo prefieres puedes enviarme un whasapp al 650493930</h3>
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
