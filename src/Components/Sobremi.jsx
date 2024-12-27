import React from 'react'
import './SobreMi.css';

export const Sobremi = () => {

  let gift = "img/yo.png";



  return (
    <>
      <section className="flex flex-col justify-center  md:flex-row lg:flex-row ml-1">
      <div className="flex flex-row justify-center rounded-sm p-4 bg-gray-200">
       <span className="font-mono text-2xl">Quién Soy</span>
        <img src={gift} className="w-16 h-16 object-contain bg-slate-950 rounded-full ml-2" />
      <div className="flex flex-col justify-center ml-2">
      <h1 className="font-bold text-2xl">FRONTEND STACK</h1>
      <h1 className="font-mono"> + de <span class="text-2xl">1</span> año desarrollando webs</h1>
      <h1 className="font-bold text-xl">React</h1>
      <h1 className="font-bold text-xl">Angular</h1>
      </div>
      </div>
     
    
    

      </section>

      <div className="mt-3 ml-2">
      <span className="font-mono text-2xl text-white bg-slate-950">Un mundo descubierto</span><br/>
        <h2 className=""> Desde que descubrí este mundo, hace aproximadamente un año, me he sumergido
          en este viaje emocionante de aprendizaje constante  y crecimiento personal,en él he aprendido que no hay nada imposible
          de conseguir si trabajas duro y con disciplina. Con el paso de los meses, la curiosidad y el afán de aprender, han sido el motor incansable que me ha llevado hasta este camino. </h2>
      </div>



      <section className="">
      <span className="">Viaje entre lenguages</span><br/>
        <h2 className=""> Durante este viaje, he adquirido experiendia en el desarrollo Web Frontend y mis pinitos en el Backend, utilizando las tecnologias más demandadas de esta carrera, HTML, CSS, Javascript, React, Node, MongoDb. Además he podido enfrentarme al desafio  de trabajar en proyectos reales que me han permitido mejorar todas mis habilidades y enfrentarme a situaciones en el mundo real. </h2>
      </section>

      <section className="">
      <span className="">Grácias por tu visita</span><br/>
        <h2 className=""> Y antes de que te vayas, quiero expresarte mi más sincero agradecimiento por visitar mi portfolio. Cada "click" y cada minuto que pasas aquí es una muestra de confianza y aprecio hacia mi trabajo. Prometo seguir en esta línea, comprometida arduamente para ofrecer contenido de calidad y experiencias únicas.Grácias por formar parte de ello y por creer en mi visión.</h2>
      </section>
     

    </>
  )
}
