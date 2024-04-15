import React from 'react'
import { useTranslation } from 'react-i18next';

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <>

      <h1 className="skills">{t('header.skills')}</h1>
      <div className="contenedor">

        <figure>
          <img src="https://miro.medium.com/max/1200/0*2JYJbAv70Asvm2de.png" alt="img-skills"></img>
          <div className="capa">
            <h2>100%</h2>
            <p>{t('skills.markupLanguage')}</p>

          </div>

        </figure>

        <figure>
          <img src="https://th.bing.com/th/id/OIP.xEVLs9u_Z6fr-jKrDpWI6AHaD6?rs=1&pid=ImgDetMain" alt="img-skills"></img>
          <div className="capa">
            <h2>100%</h2>
            <p>{t('skills.webInterfaceDesign')} </p>

          </div>

        </figure>


        <figure>
          <img src="https://blog.faradars.org/wp-content/uploads/2023/01/what-is-JS.jpg" alt="img-skills"></img>
          <div className="capa">
            <h2>70%</h2>
            <p>{t('skills.javascriptKnowledge')}</p>

          </div>

        </figure>



        <figure>
          <img src="https://theomnibuzz.com/wp-content/uploads/2020/12/react-js-1_orig.png" alt="img-skills"></img>
          <div className="capa">
            <h2>70%</h2>
            <p>{t('skills.reactExperience')}</p>

          </div>

        </figure>



        <figure>
          <img src="https://www.filepicker.io/api/file/7vjtVUXBQHyTO4AhJ7mW" alt="img-skills" ></img>
          <div className="capa">
            <h2>50%</h2>
            <p>{t('skills.databaseExperience')}</p>

          </div>

        </figure>

        <figure>
          <img src="https://www.themeinthebox.com/wp-content/uploads/elementor/thumbs/Bootstrap-5-q6cc37pc8ekqe5d3vc9scpfvtcdjqj6ei5n4rcfucw.png" alt="img-skills"></img>
          <div className="capa">
            <h2>100%</h2>
            <p>{t('skills.bootstrapKnowledge')}</p>

          </div>

        </figure>

        <figure>
          <img src="https://th.bing.com/th/id/OIP.piAMkLAjuBhL3mIPbPgROgHaDm?rs=1&pid=ImgDetMain" alt="img-skills" ></img>
          <div className="capa">
            <h2>90%</h2>
            <p>{t('skills.dailyUsage')}</p>

          </div>

        </figure>

        <figure>
          <img src="https://miro.medium.com/max/3840/1*fDwzjCH3qzhosC6DVel4ng.jpeg" alt="img-skills"></img>
          <div className="capa">
            <h2>90%</h2>
            <p>{t('skills.gitExperience')}</p>

          </div>

        </figure>



        <figure>
          <img src="https://freecodestack.com/wp-content/uploads/2022/12/What-is-tailwind-CSS-and-its-features.jpg"></img>
          <div className="capa">
            <h2>80%</h2>
            <p> {t('skills.tailwindExperience')}</p>

          </div>

        </figure>


      </div>


    </>
  )
}
