import React from 'react'
import { useTranslation } from 'react-i18next';

export const Certificaciones = () => {
  const { t } = useTranslation();

  return (
    <>

      <h1 className="certificaciones_title">{t('header.certifications')}</h1>
      <div className="container_certificaciones">

        <div className="card_google">
          <h2>{t('certificationsGoogle.june')}</h2>
          <h3>{t('certificationsGoogle.course')} <br /> {t('certificationsGoogle.coursetitle')}</h3>
          <img src="https://www.emprendedorinteligente.com/wp-content/uploads/2019/11/header-activate-logo-lg-1024x286.png" className="logo_google" />
          <details>
            <summary>{t('certificationsGoogle.summary')}</summary>
            <li>{t('certificationsGoogle.topics.history')}</li>
            <li>{t('certificationsGoogle.topics.functioning')}</li>
            <li>{t('certificationsGoogle.topics.writing')}</li>
            <li>{t('certificationsGoogle.topics.publication')}</li>
            <li>{t('certificationsGoogle.topics.page')}</li>
          </details>

        </div>

        <div className="card_google1">
          <h2>{t('certificationsGoogle1.july')}</h2>
          <h3>{t('certificationsGoogle1.course')} <br /> {t('certificationsGoogle1.coursetitle')}</h3>
          <img src="https://www.emprendedorinteligente.com/wp-content/uploads/2019/11/header-activate-logo-lg-1024x286.png" className="logo_google" />
          <details>
            <summary>{t('certificationsGoogle.summary')}</summary>
            <li>{t('certificationsGoogle1.topics.presentationDefinition')}</li>
            <li>{t('certificationsGoogle1.topics.elementsPresentationDefinition')}</li>
            <li>{t('certificationsGoogle1.topics.webSuccessAchievement')}</li>
            <li>{t('certificationsGoogle1.topics.webLayout')}</li>
          </details>

        </div>

        <div className="card_google3">
          <h2>Agosto 2023</h2>
          <h3>Build Responsive Real World <br /> Websites with HTML AND CSS<br /> (Udemy)</h3>
          <img src="https://logosmarcas.net/wp-content/uploads/2021/11/Udemy-Logo-650x366.png" className="logo_google" />
          <details>
            <summary>{t('certificationsGoogle.summary')}</summary>
            <li>Fundamentos html</li>
            <li>Fundamentos CSS</li>
            <li>Layouts</li>
            <li>Componentes</li>
            <li>Proyectos</li>
          </details>
        </div>

        <div className="card_google2">
          <h2>Setiembre 2023</h2>
          <h3>Responsive Web Design <br /> Developer Certification</h3>
          <img src="https://www.arnoldgelacio.com/images/skills/logo-freecodecamp.png" className="logo_google" />
          <details>
            <summary>{t('certificationsGoogle.summary')} 300h</summary>
            <li>Build a Survey Form</li>
            <li>Build a tribute page</li>
            <li>Build a Technical Documentation Page</li>
            <li>Build a Personal Portfolio Page</li>
          </details>

        </div>


      </div>
    </>
  )
}

