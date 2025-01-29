import React from 'react'
import './Footer.css';
import { useTranslation } from 'react-i18next';

export const Footer = () => {

  const { t } = useTranslation();

  let img = "img/logo2.png";
  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-2">
        <img src={img} className='w-28 h-28' alt="logo-imagen" />

        <div className="icons_social flex flex-row text-3xl justify-center">
          <a href="https://github.com/81andie" target="_blank" rel="noopener noreferrer"><i className="pi pi-github mr-1" style={{ color: '#e040a4' }}></i></a>
          <a href="https://www.linkedin.com/in/andrea-hern%C3%A0ndez-abbab9288/" target="_blank" rel="noopener noreferrer"><i className="pi pi-linkedin" style={{ color: '#e040a4' }}></i></a>
        </div>

        <div className="text-center mb-2">
          <h3 className="text-slate-500"> {t('footer.text')}:<br /> Andrea Hernández <br />©2024 Andrea Hernández | {t('footer.AllReserve')} </h3>
        </div>
      </div>
    </>
  )
}
