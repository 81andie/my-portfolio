import React from 'react'
import './SobreMi.css';
import { useEffect, useState,useRef } from 'react';


export const Sobremi = () => {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const inputRef=useRef()

useEffect(()=>{
  inputRef.current.focus()

})


  const onChangeInput = (e) => {
    setInput(e.target.value)

  }

  const onKeyDownEnter = (e) => {
    if (e.key === "Enter") {

      let newOutPut = "";
      newOutPut = output + "\n" + "$ " + input + "\n";
     

      switch (input) {

        case 'init':
          newOutPut += `
  /\\_/\\                                         
 ( o.o )   Hello!!!                              
  > ^ <    Bienvenido a mi terminal!!
  
`;
          break;


        case 'date':
          newOutPut += 'Today is ' + new Date().toDateString();
          break;

        case 'bienvenida':
          newOutPut += 'Hola puedes guiarte con los diferentes comandos, ...';
          break;

        case 'quienSoy':
          newOutPut += 'Me llamo Andrea, y soy una gerundense que hace más de un año medio desarrollando webs en el sector del Frontend, mis frameworks favoritos son Angular y React';
          break;

        case 'unMundoDescubierto':
          newOutPut += 'Desde que descubrí este mundo, hace aproximadamente un año, me he sumergido en este viaje emocionante de aprendizaje constante  y crecimiento personal,en él he aprendido que no hay nada imposible de conseguir si trabajas duro y con disciplina. Con el paso de los meses, la curiosidad y el afán de aprender, han sido el motor incansable que me ha llevado hasta este camino.';
          break;

        case 'viajeLenguajes':
          newOutPut += 'Durante este viaje, he adquirido experiencia en el desarrollo Web Frontend y mis pinitos en el Backend, utilizando las tecnologias más demandadas de esta carrera, HTML, CSS, Javascript, React, Node, MongoDb. Además he podido enfrentarme al desafio  de trabajar en proyectos reales que me han permitido mejorar todas mis habilidades y enfrentarme a situaciones en el mundo real. Me he adentrado en el mundo de las librerias de mapas interactivos, como Leaflet, MapLibre, OpenLayers y Mapbox, generando de cada librería un proyecto de cada uno de características distintas';
          break;

        case 'gracias':
          newOutPut += 'Si has llegado hasta aqui, queria agradecerte que hayas dedicado tu tiempo a conocerme un poco más, si tienes alguna pregunta o quieres saber más sobre mi, no dudes en contactar conmigo. ¡Gracias!';
          break;

        case 'clear':
          setOutput("")
          setInput("")
          return;

        case 'help':
          newOutPut += `Prompts:
          - init: Inicializa la terminal.
          - date: Muestra la fecha actual.
          - bienvenida: Un saludo inicial y guía.
          - quienSoy: Información sobre mí.
          - unMundoDescubierto: Mi introducción al desarrollo.
          - viajeLenguajes: Tecnologías y proyectos.
          - gracias: Mensaje de agradecimiento.
          - clear: Limpia la terminal.
          - help: Muestra esta lista de comandos.
                  `
          break;

        default:
          newOutPut += 'Unknown command: ' + input;
          break;


      }

      setOutput(newOutPut)
      setInput("")

    }



  }



  return (

    <>
      <div className="container-terminal bg-zinc-50 md:mb-20 lg:mb-20  p-4 overflow-auto"
      onClick={e=> inputRef.current.focus()}
      >

        <div className="md:flex flex-col md:flex-row lg:flex-row justify-center  font-mono text-zinc-800 card terminal-demo h-80">
          <div className="grid grid-cols-1 md:grid-rows-2 text-center md:text-left lg-text-left md:mr-5">
            <div>
              <p className="text-xl font-bold">Instrucciones</p>
              <p>Entre "<strong>date</strong>" la terminal <br></br>le mostrará la fecha.</p>
              <p>Si quiere limpiar la terminal <br></br>utilice el prompt <strong>"clear"</strong></p>
            </div>
          </div>


          <div className="flex flex-col text-center md:text-left">
            <ol>
              <p className="text-xl font-bold">Propmts</p>
              <li><strong>init{'{0}'}</strong></li>
              <li><strong>bienvenida {'{1}'}</strong></li>
              <li><strong>date{'{2}'}</strong></li>
              <li><strong>quienSoy{'{3}'}</strong></li>
              <li><strong>unMundoDescubierto{'{4}'}</strong></li>
              <li><strong>viajeLenguajes{'{5}'}</strong></li>
              <li><strong>gracias{'{6}'}</strong></li>
              <li><strong>clear{'{7}'}</strong></li>
              <li><strong>help{'{8}'}</strong></li>

            </ol>

          </div>




        </div>

        <div className="w-full">
         
          <input type="text"
            className="border-none outline-none m-0 p-0 bg-transparent text-green-500 mt-20 font-mono"
            placeholder="Escribe un prompt..."
            ref={inputRef}
            value={input}
            onChange={onChangeInput}
            onKeyDown={onKeyDownEnter}

          />
          <div className="terminal font-mono mb-2 mt-2">
           <p class="p-1">{output}</p> 
          </div>
        </div>


   </div>











    </>
  )
}
