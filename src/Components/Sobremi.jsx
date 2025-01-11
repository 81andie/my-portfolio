import React from 'react'
import './SobreMi.css';
import { useEffect } from 'react';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';

export const Sobremi = () => {

 

  const commandHandler = (text) => {
    console.log('Comando recibido:', text);
    let response;
    let argsIndex = text.indexOf(' ');
    let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

    switch (command) {

      case 'init':
        response = `
  /\\_/\\                                         
 ( o.o )   Hello!!!                              
  > ^ <    Bienvenido a mi terminal!!
  
`;
    break;

       
      case 'date':
        response = 'Today is ' + new Date().toDateString();
        break;

      case 'bienvenida':
        response = 'Hola puedes guiarte con los diferentes comandos, ...';
        break;

      case 'quienSoy':
        response = 'Me llamo Andrea, y soy una gerundense que hace más de un año medio desarrollando webs en el sector del Frontend, mis frameworks favoritos son Angular y React';
        break;

      case 'unMundoDescubierto':
        response = 'Desde que descubrí este mundo, hace aproximadamente un año, me he sumergido en este viaje emocionante de aprendizaje constante  y crecimiento personal,en él he aprendido que no hay nada imposible de conseguir si trabajas duro y con disciplina. Con el paso de los meses, la curiosidad y el afán de aprender, han sido el motor incansable que me ha llevado hasta este camino.';
        break;

      case 'viajeLenguajes':
        response = 'Durante este viaje, he adquirido experiencia en el desarrollo Web Frontend y mis pinitos en el Backend, utilizando las tecnologias más demandadas de esta carrera, HTML, CSS, Javascript, React, Node, MongoDb. Además he podido enfrentarme al desafio  de trabajar en proyectos reales que me han permitido mejorar todas mis habilidades y enfrentarme a situaciones en el mundo real. Me he adentrado en el mundo de las librerias de mapas interactivos, como Leaflet, MapLibre, OpenLayers y Mapbox, generando de cada librería un proyecto de cada uno de características distintas';
        break;

      case 'gracias':
        response = 'Si has llegado hasta aqui, queria agradecerte que hayas dedicado tu tiempo a conocerme un poco más, si tienes alguna pregunta o quieres saber más sobre mi, no dudes en contactar conmigo. ¡Gracias!';
        break;

      case 'clear':
        response = null;
        break;

      case 'help':
        response = (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <strong style={{ color: '#4caf50' }}>init:</strong> Inicializa la terminal.
            </li>

            <li>
              <strong style={{ color: '#4caf50' }}>date:</strong> Muestra la fecha actual.
            </li>
            <li>
              <strong style={{ color: '#4caf50' }}>bienvenida:</strong> Un saludo inicial y guía.
            </li>
            <li>
              <strong style={{ color: '#4caf50' }}>quienSoy:</strong> Información sobre mí.
            </li>
            <li>
              <strong style={{ color: '#4caf50' }}>unMundoDescubierto:</strong> Mi introducción al desarrollo.
            </li>
            <li>
              <strong style={{ color: '#4caf50' }}>viajeLenguajes:</strong> Tecnologías y proyectos.
            </li>
            <li>
              <strong style={{ color: '#4caf50' }}>gracias:</strong> Mensaje de agradecimiento.
            </li>
            <li>
              <strong style={{ color: '#4caf50' }}>clear:</strong> Limpia la terminal.
            </li>
          </ul>
        );

        break;

      default:
        response = 'Unknown command: ' + command;
        break;
    }

    if (response)
      TerminalService.emit('response', response);
    else
      TerminalService.emit('clear');
  };

  useEffect(() => {
    TerminalService.on('command', commandHandler);

    return () => {
      TerminalService.off('command', commandHandler);
    };
  }, []);





  return (
    <>

      <div className="md:flex flex-col md:flex-row lg:flex-row justify-center  font-mono text-zinc-600 ">
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

      <div className="mt-10">
        <Terminal welcomeMessage="Welcome to my Portfolio" prompt="primereact $" className="mt-10 whitespace-pre-wrap p-terminal" 
       
        />
      </div>








    </>
  )
}
