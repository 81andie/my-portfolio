import React from 'react'
import { projects } from './ProyectosData';

export const Proyectos = () => {


  return (
    <>
      <div className="flex flex-col justify-center ml-2 mr-2  px-1 dark:text-slate-200">
        {projects.map((project, index) => (

          
          <div
            key={index}
            className="flex flex-col md:flex-row lg:flex-row justify-center rounded-lg mb-10"
          >
          
            <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-1 mt-5 p-1">
              {project.images.map((image, i) => (
                <img
                  key={i}
                  className="h-auto object-cover max-w-full md:w-52 lg:w-52 rounded-lg "
                  src={image}
                  alt={`Project ${project.title} - Image ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex flex-col p-1 mt-5">
              <p className="text-xl font-mono ">Titulo:</p>
              <p className="text-3xl p-1 mt-2 mb-2">{project.title}</p>
              <p className="text-xl font-mono p-1">Lenguajes y frameworks:</p>
              <div className="flex flex-row gap-1 p-1 rounded-sm">
                {project.technologies.map((tech, i) => (
                  <img
                    key={i}
                    className="h-8 w-auto  p-1 bg-blue-200 rounded-sm"
                    src={tech.icon}
                    alt={tech.name}
                    title={tech.name}
                  />
                ))}
              </div>
              <p className="text-md w-96 mt-4 ">{project.description}</p>
              <p className="text-md w-96 mt-4 ">{project.description1}</p>
              <div className="flex gap-2 dark:text-slate-900 p-1">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-24 text-xs bg-gray-200 p-1.5 rounded-md text-center flex items-center justify-center mt-2"
                  >
                    <i className="pi pi-github mr-1 " style={{ color: '#e040a4' }}></i>
                    Ver Código
                  </a>

                )}

                {project.url1 && (
                  <a
                    href={project.url1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-24 text-xs bg-gray-200 p-1.5 rounded-md text-center flex items-center justify-center mt-2"
                  >
                    <i className="pi pi-eye mr-1" style={{ color: '#e040a4' }}></i>
                    Ver proyecto
                  </a>


                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
