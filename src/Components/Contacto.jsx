import React from 'react';

import { useTranslation } from 'react-i18next';

export const Contacto = () => {

  const { t } = useTranslation();


  return (

    <>
      <form className="mb-20 mr-2 ml-2 mt-32">
        <div className="flex flex-col  lg:flex-row md:flex-row">
          <div className="md:w-2/5 lg:w-2/5 h-96 opacity-65 ">
            <img src="https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=600" className="h-96 w-full object-cover rounded-lg"></img>
          </div>

          <div className="md:w-4/5 lg:w-4/5 h-96 md:ml-4 lg:ml-8 lg:mr-8">
          <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center text-zinc-700 font-mono">{t('Contact.contact')}</h2>
          <p className="mb-8 lg:mb-10 font-light text-center text-gray-500 dark:text-gray-400 sm:text-base">{t('Contact.you wants')}</p>
          <div className="flex flex-row gap-2">
          <div className="flex flex-col w-full ">
              <label htmlFor="email" className="block mb-1 text-xs font-medium text-gray-900 ">{t('Contact.email')}</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  p-2.5 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light " placeholder="example@gmail.com" required/>
          </div>
          <div className="flex flex-col w-full">
          <label htmlFor="name" className="block mb-1 text-xs font-medium text-gray-900 ">{t('Contact.name')}</label>
          <input type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  p-2.5 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light " placeholder={t('Contact.NameEmail')} required/>
          </div>

          </div>
          <div className="w-full ">
          <textarea id="message" rows="4" className="mt-4  block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={t('Contact.you want')}></textarea>
          <button type="submit" className=" bg-zinc-900 text-white p-1 rounded-sm mt-2 w-28 h-10">{t('Contact.Submit')}</button>
          </div>
         
         
         
          </div>

        </div>

      </form>







    </>
  )
}
