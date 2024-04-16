import React from 'react'



export const Sobremi = () => {

  let gift = "img/Cuadro1.png";
 


  return (
    <>
      <section className="sobremi">

    
      
        <div className="parallax">

          <img src={gift} className="img-sobremi"/>

          <h2 className="presentación">Hola, me llamo Andrea, una apasionada del desarrollo web autodidacta.
            Resido en Gerona. Desde que descubrí este mundo, hace aproximadamente un año, me he sumergido
            en este viaje emocionante de aprendizaje constante  y crecimiento personal,en él he aprendido que no hay nada imposible
            de conseguir si trabajas duro y con disciplina</h2>


        </div>


      </section>

      <div className="prueba_parrallax">
        <h3>QUe tal</h3>
      </div>
    </>
  )
}
