import React from 'react'

import { useTranslation } from 'react-i18next';
import { cursos } from './cursos';
import './Certificaciones.css';



export const Cursos = () => {

  const { t } = useTranslation();

   





  return (
    <>

      <div className="container_certificaciones mt-20">

        {t('courses', { returnObjects: true }).map((curso, index) => (
         
          <div className="card_google font-mono" key={index}
          

          >

<div
              style={{
                content: '""',
                opacity: 0.6,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: curso.gradient,
                pointerEvents: 'none'
              }}
            ></div>

            

            <h2>{curso.course}</h2>
            <img
              src={curso.image}

              className="w-32 h-10 object-contain"
              alt="Certificación"
            />
            <details>
              <summary>{curso.summary}</summary>
              {curso.topics && curso.topics.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))

              }

            </details>
          </div>
        ))}

      </div>
    </>
  )
}

