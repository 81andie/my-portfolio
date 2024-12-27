import React from 'react'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';


export const Header = () => {

  let img = "img/logo2.png";
  const { t } = useTranslation();

  return (
    <>
      <div className="header flex flex-col justify-center items-center">
        <div className="flex mb-2 justify-start">
          <img src={img} className='h-auto mb-12 mt-5 w-28 md:' alt="logo-imagen" />
          <div className="flex flex-col p-1 h-8 no-underline list-none ml-0 font-light not-italic">
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
