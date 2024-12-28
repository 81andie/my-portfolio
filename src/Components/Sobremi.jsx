import React from 'react'
import './SobreMi.css';
import { useEffect } from 'react';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';

export const Sobremi = () => {

  let gift = "img/yo.png";

  const commandHandler = (text) => {
    let response;
    let argsIndex = text.indexOf(' ');
    let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

    switch (command) {
      case 'date':
        response = 'Today is ' + new Date().toDateString();
        break;

      case 'bienvenida':
        response = 'Hola puedes guiarte con los diferentes comandos, ...' + text.substring(argsIndex + 1) + '!';
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
          response = 'Durante este viaje, he adquirido experiencia en el desarrollo Web Frontend y mis pinitos en el Backend, utilizando las tecnologias más demandadas de esta carrera, HTML, CSS, Javascript, React, Node, MongoDb. Además he podido enfrentarme al desafio  de trabajar en proyectos reales que me han permitido mejorar todas mis habilidades y enfrentarme a situaciones en el mundo real. Me he adentrado en el mundo de las librerias de mapas interactivos, como Leaflet, MapLibre, OpenLayers y Mapbox, generando de cada librería un proyecto de cada uno de características distintas';
         break;

      case 'clear':
        response = null;
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
    
      <div className="terminal-demo flex justify-center mt-16 gap-14 font-mono">
        <div className="grid grid-rows-2 text-left">
         <div>
          <p className="text-xl font-bold">Instrucciones</p>
         <p>Entre "<strong>date</strong>" la terminal le mostrará la fecha.</p>
         <p>Si quiere limpiar la terminal utilice el prompt <strong>"clear"</strong></p>
        </div>
         </div>
       
      
        <ol>
        <p className="text-xl font-bold">Propmts</p>
          <li><strong>bienvenida {'{0}'}</strong></li>
          <li><strong>date{'{1}'}</strong></li>
          <li><strong>quienSoy{'{2}'}</strong></li>
          <li><strong>unMundoDescubierto{'{3}'}</strong></li>
          <li><strong>viajeLenguajes{'{4}'}</strong></li>
          <li><strong>gracias{'{5}'}</strong></li>
          <li><strong>clear{'{6}'}</strong></li>
         
          </ol>

      
      
      </div>

      <Terminal welcomeMessage="Welcome to my Portfolio" prompt="terminal-portfolio$" />



    


    </>
  )
}
