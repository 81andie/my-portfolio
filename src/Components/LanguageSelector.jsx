// LanguageSelector.js
import React from 'react';
import './LanguageSelector.css';

import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')} className="boton_lenguaje text-base text-white p-2 ml-2 mt-2 rounded font-bold">English</button>
      <button onClick={() => changeLanguage('es')} className="boton_lenguaje text-base text-white p-2 ml-2 mt-2 rounded font-bold">Español</button>
      <button onClick={() => changeLanguage('ca')}className="boton_lenguaje text-base text-white p-2 ml-2 mt-2 rounded font-bold">Català</button>
    </div>
  );
}

export default LanguageSelector;
