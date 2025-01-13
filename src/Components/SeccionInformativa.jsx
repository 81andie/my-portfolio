import React from 'react'
import './SeccionInformativa.css';
import { useTranslation } from 'react-i18next';



export const SeccionInformativa = () => {

    const { t } = useTranslation();

    return (

        <>

            <div className="ml-2 mr-2 seccionInformacion w-full justify-center flex flex-col md:flex-row lg:flex-row h-auto mt-10 mb-20 gap-4 font-mono">

                <div className='icon_section text-center text-sm'>

                    <span><i className="pi pi-thumbs-up" style={{ color: '#e040a4' }}></i></span>
                    <h1 className="titsec_Informacion text-xl">{t('sectionInformation.professionalism.title')}</h1>
                    <p className="parrsec_Informacion">{t('sectionInformation.professionalism.description')}</p>

                </div>

                <div className='icon_section text-center'>

                    <span><i className="pi pi-question" style={{ color: '#e040a4' }}></i></span>
                    <h1 className="titsec_Informacion">{t('sectionInformation.advice.title')}</h1>
                    <p className="parrsec_Informacion">{t('sectionInformation.advice.description')}</p>

                </div>

                <div className='icon_section text-center'>
                    <span><i className="pi pi-tablet" style={{ color: '#e040a4' }}></i></span>
                    <h1 className="titsec_Informacion">{t('sectionInformation.devices.title')}</h1>
                    <p className="parrsec_Informacion"> {t('sectionInformation.devices.description')}</p>
                </div>

        </div>


         

               

        </>
    )
}
