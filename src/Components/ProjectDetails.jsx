import React from 'react'


import * as motion from "motion/react-client"
import { projects } from './proyectosData';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { MotionGlobalConfig } from 'framer-motion'
import { useTranslation } from 'react-i18next';

export const ProjectDetails = () => {

  const { id } = useParams();
  const { t } = useTranslation();

  const buscarProjecto = projects.find(item => item.id === parseInt(id));
  const projectTranslation = t("projects", { returnObjects: true }).find(p => p.id === parseInt(id));

  const shuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5)
  }

  const [order, setOrder] = useState(shuffle([...buscarProjecto.images]));

  useEffect(() => {

    const timeout = setTimeout(() => {
      setOrder((prevOrder) => shuffle([...prevOrder]));
    }, 10000);

    return () => clearTimeout(timeout);

  }, [order]);



  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 200,
  }



  return (

    
    <>

    
      <div className="flex flex-col justify-center ml-2 mr-2 mt-28 px-1 dark:text-slate-200">
        {/* Contenedor principal */}
     

        <div className="flex flex-col md:flex-row lg:flex-row  rounded-lg mb-10">
          
          {/* Grid de imágenes */}
          <div className="grid-flow-dense grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1 mt-5 p-1">


            {order.map((image, i) => (
              <motion.img
                key={image}
                className="h-52 w-52 object-cover object-center lg:h-52 lg:object-cover lg:object-center md:h-52 md:object-cover md:object-center  md:w-52 lg:w-52 "
                src={image}
                alt={`Project ${buscarProjecto.title} - Image ${i + 1}`}
                layout
                transition={spring}
              />
            ))}
          </div>

          {/* Detalles del proyecto */}
          <div className="flex flex-col justify-center p-1 mt-2 md:w-8/12 lg:w-8/12">


            <p className="text-xl font-mono">Título:</p>


            <p className="text-3xl p-1 mt-2 mb-3 animate-pulse ">{projectTranslation.title}</p>

            <p className="text-xl font-mono p-1">Lenguajes y frameworks:</p>

            <div className="flex flex-row flex-wrap gap-1 p-1 rounded-sm w-8/12 ">
              {buscarProjecto.technologies && buscarProjecto.technologies.map((tech, i) => (
                <img
                  key={i}
                  className="h-10 w-auto p-1 rounded-md inset-0 bg-blue-50"
                  src={tech.icon}
                  alt={tech.name}
                  title={tech.name}
                />
              ))}
            </div>

            {/* Descripción */}
            <p className="text-md mt-2 ml-1 mr-1 text-justify font-mono">{projectTranslation.description}</p>
            <p className="text-md mt-4 ml-1 mr-1 text-justify font-mono">{projectTranslation.description1}</p>

            {/* Links del proyecto */}
            <div className="flex gap-2 dark:text-slate-900 p-1">
              {buscarProjecto.url && (
                <a
                  href={buscarProjecto.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-24 text-xs bg-gray-200 p-1.5 rounded-md text-center flex items-center justify-center mt-2"
                >
                  <i className="pi pi-github mr-1" style={{ color: '#e040a4' }}></i>
                  Ver Código
                </a>
              )}

              {buscarProjecto.url1 && (
                <a
                  href={buscarProjecto.url1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-24 text-xs bg-gray-200 p-1.5 rounded-md text-center flex items-center justify-center mt-2"
                >
                  <i className="pi pi-eye mr-1" style={{ color: '#e040a4' }}></i>
                  Ver Proyecto
                </a>
              )}

            </div>
          </div>
        </div>
      </div>






    </>
  )

}