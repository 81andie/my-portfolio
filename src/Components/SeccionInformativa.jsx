import React from 'react'
import { useTranslation } from 'react-i18next';


export const SeccionInformativa = () => {

    const { t } = useTranslation();

    return (

        <>

            <div className="seccionInformacion">

                <div className='icon_section'>

                    <span><i className="pi pi-thumbs-up" style={{ color: 'rgba(35, 158, 224, 0.63)' }}></i></span>
                    <h1 className="titsec_Informacion">{t('sectionInformation.professionalism.title')}</h1>
                    <p className="parrsec_Informacion">{t('sectionInformation.professionalism.description')}</p>

                </div>

                <div className='icon_section'>

                    <span><i className="pi pi-question" style={{ color: 'rgba(35, 158, 224, 0.63)' }}></i></span>
                    <h1 className="titsec_Informacion">{t('sectionInformation.advice.title')}</h1>
                    <p className="parrsec_Informacion">{t('sectionInformation.advice.description')}</p>

                </div>

                <div className='icon_section'>

                    <span><i className="pi pi-tablet" style={{ color: 'rgba(35, 158, 224, 0.63)' }}></i></span>
                    <h1 className="titsec_Informacion">{t('sectionInformation.devices.title')}</h1>
                    <p className="parrsec_Informacion"> {t('sectionInformation.devices.description')}</p>
                </div>

        </div>


         

               

        </>
    )
}
