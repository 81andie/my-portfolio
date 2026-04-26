import React from 'react';

import { useTranslation } from 'react-i18next';

export const Contacto = () => {

  const { t } = useTranslation();

  return (
    <>
      <form className="mb-20 mr-2 ml-2 mt-32 ">
        <div className="flex flex-col  lg:flex-row md:flex-row">
          <div className="md:w-2/5 lg:w-2/5 h-96 opacity-65 ">
            <img src="https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=600" className="h-96 w-full object-cover rounded-lg"></img>
          </div>

          <div className="md:w-4/5 lg:w-4/5 h-96 md:ml-4 lg:ml-8 lg:mr-8">
            <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center text-zinc-900 font-mono">{t('Contact.contact')}</h2>
            <p className="mb-8 lg:mb-10 font-light text-center text-gray-800 dark:text-gray-100 sm:text-base">{t('Contact.you wants')}</p>
            <p className="mb-8 lg:mb-10 text-2xl font-bold  text-center text-gray-800 dark:text-gray-400">pianistgirl81@gmail.com</p>
          </div>
        </div>
      </form>
    </>
  )
}
