import React from 'react'
import './SobreMi.css';
import { useEffect, useState,useRef } from 'react';
import { useTranslation } from 'react-i18next';


export const Sobremi = () => {


  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
 
  const inputRef=useRef()
  const {t, i18n} = useTranslation();


useEffect(()=>{
  inputRef.current.focus()
},[output, input]);

useEffect(() => {
  
  setOutput(""); 
}, [i18n.language])


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
 ( o.o )  ${t('sobreMi.ini')}                     
  > ^ <   ${t('sobreMi.bienvenida')}
           
`;
          break;


        case 'date':
          newOutPut += `${t('sobreMi.fecha')} ${new Date().toDateString()}`
          break;

        case 'bienvenida':
          newOutPut += `${t('sobreMi.bienvenida')}`;
          break;

        case 'quienSoy':
          newOutPut += `${t('sobreMi.quienSoy')}`;
          break;

        case 'unMundoDescubierto':
          newOutPut += `${t('sobreMi.unMundoDescubierto')}`;
          break;

        case 'viajeLenguajes':
          newOutPut += `${t('sobreMi.viajeLenguajes')}`;
          break;

        case 'gracias':
          newOutPut += `${t('sobreMi.gracias')}`;
          break;

        case 'clear':
          setOutput("")
          setInput("")
          return;

        case 'help':
          newOutPut += `Prompts:
          - init: ${t('sobreMi.commands.init')}
          - date: ${t('sobreMi.commands.date')}
          - bienvenida: ${t('sobreMi.commands.bienvenida')}
          - quienSoy: ${t('sobreMi.commands.quienSoy')}.
          - unMundoDescubierto:${t('sobreMi.commands.unMundoDescubierto')}
          - viajeLenguajes: ${t('sobreMi.commands.viajeLenguajes')}
          - gracias: ${t('sobreMi.commands.gracias')}
          - clear: ${t('sobreMi.commands.clear')}
          - help: ${t('sobreMi.commands.help')}.
                  `
          break;

        default:
          newOutPut += `${t('sobreMi.unknownCommand')}: ${input}`;
          break;


      }
     
      setOutput(newOutPut)
      setInput("")

    }



  }



  return (

    <>
      <div className="container-terminal md:mb-20 lg:mb-20 mt-20 p-4 overflow-auto "
      onClick={e=> inputRef.current.focus()}
      >

        <div className="md:flex flex-col md:flex-row lg:flex-row justify-center  font-mono dark:text-zinc-600 card terminal-demo h-80">
          <div className="grid grid-cols-1 md:grid-rows-2 text-center md:text-left lg-text-left md:mr-5">
            <div>
              <p className="text-xl font-bold">{t('sobreMi.instructions')}</p>
             <p>{t('sobreMi.intro')}</p>
            </div>
          </div>


          <div className="flex flex-col text-center md:text-left">
            <ol>
              <pre>
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
              </pre>
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
           <p className="p-1">{output}</p> 
          </div>
        </div>
        </div>
    </>
  )
}
