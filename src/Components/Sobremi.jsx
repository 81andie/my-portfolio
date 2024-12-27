import React from 'react'
import './SobreMi.css';

export const Sobremi = () => {

  let gift = "img/yo.png";



  return (
    <>
      <section className="flex flex-col justify-center items-center">
      <div className="w-4/12 flex flex-row justify-center items-center bg-slate-200 rounded-sm p-2">
       <span className="font-mono">Quién Soy</span>
        <img src={gift} className="w-20 h-20 object-contain" />
      </div>
     
      <section className="">
          <h2 className="">Soy una gerundense que desde hace un tiempo se ha adentrado en el desarrollo web del desarrollo web. Me he formado en esta profesión de manera autodidactica, en parte y grácias a la ayuda de dos mentores y excelentes profesores en Inginiera Informática y Desarrollo Web, a ellos les debo todo lo aprendido, han sido mi guia y referente para mejorar en todos los aspectos necesarios de esta profesión.</h2>
      </section>

      <section className="">
      <span className="">Un mundo descubierto</span><br/>
        <h2 className=""> Desde que descubrí este mundo, hace aproximadamente un año, me he sumergido
          en este viaje emocionante de aprendizaje constante  y crecimiento personal,en él he aprendido que no hay nada imposible
          de conseguir si trabajas duro y con disciplina. Con el paso de los meses, la curiosidad y el afán de aprender, han sido el motor incansable que me ha llevado hasta este camino. </h2>
      </section>

      <section className="">
      <span className="">Viaje entre lenguages</span><br/>
        <h2 className=""> Durante este viaje, he adquirido experiendia en el desarrollo Web Frontend y mis pinitos en el Backend, utilizando las tecnologias más demandadas de esta carrera, HTML, CSS, Javascript, React, Node, MongoDb. Además he podido enfrentarme al desafio  de trabajar en proyectos reales que me han permitido mejorar todas mis habilidades y enfrentarme a situaciones en el mundo real. </h2>
      </section>

      <section className="">
      <span className="">Grácias por tu visita</span><br/>
        <h2 className=""> Y antes de que te vayas, quiero expresarte mi más sincero agradecimiento por visitar mi portfolio. Cada "click" y cada minuto que pasas aquí es una muestra de confianza y aprecio hacia mi trabajo. Prometo seguir en esta línea, comprometida arduamente para ofrecer contenido de calidad y experiencias únicas.Grácias por formar parte de ello y por creer en mi visión.</h2>
      </section>
     </section>

    </>
  )
}
