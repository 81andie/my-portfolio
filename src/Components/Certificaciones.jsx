import React from 'react'
import { useTranslation } from 'react-i18next';
import { certifications } from './certifications';



export const Certificaciones = () => {




  const { t } = useTranslation();



  return (
    <>

      <h1 className="certificaciones_title">{t('header.certifications')}</h1>
      <div className="container_certificaciones">

        {certifications.map((cer, index) => (
          <div className="card_google" key={index}
            style={{
              backgroundImage: `url(${cer.backgroundImage})`,

            }}

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

              className="logo_google"
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

