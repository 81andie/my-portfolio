import React from 'react'

import { useTranslation } from 'react-i18next';
import { certifications } from './certifications';
import './Certificaciones.css';



export const Certificaciones = () => {

  const { t } = useTranslation();

  return (
    <>

      <div className="container_certificaciones mt-24">
        {t('certifications1', { returnObjects: true }).map((cer, index) => (

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
                background: cer.gradient,
                pointerEvents: 'none'
              }}
            ></div>

            <h2>{cer.course}</h2>
            <img
              src={cer.image}

              className="w-32 h-10 object-contain"
              alt="Certificación"
            />

          
            <details>
              <summary>{cer.summary}</summary>
              {cer.topics && cer.topics.map((topic, i) => (
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

