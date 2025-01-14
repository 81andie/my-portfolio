import React from 'react'
import { useTranslation } from 'react-i18next';
import './Skills.css';


export const Skills = () => {
  const { t } = useTranslation();

  const skills = [
    {
      img: "imgSkills/html.png",
      level: "100%",
      description: t('skills.markupLanguage'),
    },
    {
      img: "imgSkills/css.jpeg",
      level: "100%",
      description: t('skills.webInterfaceDesign'),
    },
    {
      img: "imgSkills/js.jpg",
      level: "70%",
      description: t('skills.javascriptKnowledge'),
    },
    {
      img: "imgSkills/react.webp",
      level: "70%",
      description: t('skills.reactExperience'),
    },
    {
      img: "imgSkills/MongoDB.jpg",
      level: "50%",
      description: t('skills.databaseExperience'),
    },
    {
      img: "imgSkills/boostrap.png",
      level: "100%",
      description: t('skills.bootstrapKnowledge'),
    },
    {
      img: "imgSkills/github.jpg",
      level: "90%",
      description: t('skills.dailyUsage'),
    },
    {
      img: "imgSkills/git.jpg",
      level: "90%",
      description: t('skills.gitExperience'),
    },
    {
      img: "imgSkills/tailwind.jpg",
      level: "80%",
      description: t('skills.tailwindExperience'),
    },
  ];

  return (
    <>

      <h1 className="skills ">{t('header.skills')}</h1>
      <div className="contenedor gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300">
        {skills.map((skill, index) => (
          <figure key={index}>
            <img src={skill.img} alt={`skill-${index}`}/>
            <div className="capa">
              <h2 class="bg-gradient-to-r from-zinc-50">{skill.level}</h2>
              <p>{skill.description}</p>

            </div>

          </figure>


        ))}





      </div>


    </>
  )
}
