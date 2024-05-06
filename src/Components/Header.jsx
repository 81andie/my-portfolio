import React from 'react'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';






export const Header = () => {

  let img = "img/logo2.png";

  const { t } = useTranslation();




  return (
    <>


      <div className="header">

        <div className="logo_container">


          <img src={img} className='logo_header' alt="logo-imagen" />

          <div className="navbar">
            <NavLink to="/inicio" className="enlaces_navbar"> {t('header.home')}</NavLink>

            <details>
              <summary className="enlaces_navbar">{t('header.KnowMe')}</summary>
              <NavLink to="/sobremi" className="enlaces">{t('header.aboutMe')}</NavLink>
              <NavLink to="/queofrezco" className="enlaces"> {t('header.whatdoIoffer')}</NavLink>
            </details>


            <details>
              <summary className="enlaces_navbar">{t('header.training')}</summary>
              <NavLink to="/skills" className="enlaces">{t('header.skills')}</NavLink>
              <NavLink to="/certificaciones" className="enlaces"> {t('header.certifications')}</NavLink>
            </details>

            <NavLink to="/contacto" className="enlaces_navbar">{t('header.contact')}</NavLink>

          </div>

        </div>


      </div>

    </>
  )
}
