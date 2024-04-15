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
          <h2>{t('certificationsUdemy.august')}</h2>
          <h3>{t('certificationsUdemy.course')}</h3>
          <img src="https://logosmarcas.net/wp-content/uploads/2021/11/Udemy-Logo-650x366.png" className="logo_google" />
          <details>
            <summary>{t('certificationsGoogle.summary')}</summary>
            <li>{t('certificationsUdemy.topics.htmlFundamentals')}</li>
            <li>{t('certificationsUdemy.topics.cssFundamentals')}</li>
            <li>{t('certificationsUdemy.topics.layouts')}</li>
            <li>{t('certificationsUdemy.topics.components')}</li>
            <li>{t('certificationsUdemy.topics.projects')}</li>
          </details>
        </div>

        <div className="card_google2">
          <h2>{t('certificationsFreeCodeCamp.certification_info.title')}</h2>
          <h3>{t('certificationsFreeCodeCamp.certification_info.subtitle')}</h3>
          <img src="https://www.arnoldgelacio.com/images/skills/logo-freecodecamp.png" className="logo_google" />
          <details>
            <summary>{t('certificationsGoogle.summary')} 300h</summary>
            <li>{t('certificationsFreeCodeCamp.certification_info.summary.details.0')}</li>
            <li>{t('certificationsFreeCodeCamp.certification_info.summary.details.1')}</li>
            <li>{t('certificationsFreeCodeCamp.certification_info.summary.details.2')}</li>
            <li>{t('certificationsFreeCodeCamp.certification_info.summary.details.3')}</li>
          </details>

        </div>


      </div>
    </>
  )
}

