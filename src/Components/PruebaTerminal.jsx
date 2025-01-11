
import React, { useEffect } from 'react';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';


export const PruebaTerminal = () => {

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
    <div className="card terminal-demo">
            <p>
                Enter "<strong>date</strong>" to display the current date, "<strong>greet {'{0}'}</strong>" for a message, "<strong>random</strong>" to get a random number and "<strong>clear</strong>" to clear all commands.
            </p>
            <Terminal 
                welcomeMessage="Welcome to PrimeReact" 
                prompt="primereact $" 
                pt={{
                    root: 'bg-gray-900 text-white border-round',
                    prompt: 'text-gray-400 mr-2',
                    command: 'text-primary-300',
                    response: 'text-primary-300'
                }} 
            />
        </div>
  )
}
