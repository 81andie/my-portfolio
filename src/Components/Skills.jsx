import React from 'react'
import { useTranslation } from 'react-i18next';
import './Skills.css';


export const Skills = () => {
  const { t } = useTranslation();

  const skills = [
    {
      img: "imgSkills/html.png",
      level: "HTML",
      description: t('skills.markupLanguage'),
    },
    {
      img: "imgSkills/css.jpeg",
      level: "CSS",
      description: t('skills.webInterfaceDesign'),
    },
    {
      img: "imgSkills/js.jpg",
      level: "JS",
      description: t('skills.javascriptKnowledge'),
    },
    {
      img: "imgSkills/react.webp",
      level: "REACT.JS",
      description: t('skills.reactExperience'),
    },
    {
      img: "imgSkills/MongoDB.jpg",
      level: "MONGODB",
      description: t('skills.databaseExperience'),
    },
    {
      img: "imgSkills/boostrap.png",
      level: "BOOTSTRAP",
      description: t('skills.bootstrapKnowledge'),
    },
    {
      img: "imgSkills/github.jpg",
      level: "GITHUB",
      description: t('skills.dailyUsage'),
    },
    {
      img: "imgSkills/git.jpg",
      level: "GIT",
      description: t('skills.gitExperience'),
    },
    {
      img: "imgSkills/tailwind.jpg",
      level: "TAILWIND",
      description: t('skills.tailwindExperience'),    
    },

    {
      img: "imgSkills/angular.webp",
      level: "ANGULAR 17,18,19",
      description: t('skills.angularExperience'),    
    },

    {
      img: "imgSkills/leaflet.jpeg",
      level: "LEAFLEAT",
      description: t('skills.leafletExperience'),    
    },
    {
      img: "imgSkills/mapbox.png",
      level: "MAPBOX",
      description: t('skills.mapboxExperience'),    
    },
    {
      img: "imgSkills/mapLibre.jpg",
      level: "MAPLIBRE",
      description: t('skills.maplibreExperience'),    
    },

    {
      img: "imgSkills/openlayers.png",
      level: "OPENLAYERS",
      description: t('skills.openlayersExperience'),    
    },

    {
      img: "imgSkills/primeng.jpeg",
      level: "OPENLAYERS",
      description: t('skills.openlayersExperience'),    
    },

    {
      img: "imgSkills/primeReact-min.jpg",
      level: "PRIMEREACT",
      description: t('skills.primeReactExperience'),    
    },
  ];

  return (
    <>

    
      <div className="contenedor gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300">
        {skills.map((skill, index) => (
          <figure key={index}>
            <img src={skill.img} alt={`skill-${index}`} className="object-contain "/>
            <div className="capa">
              <h2 class="bg-gradient-to-r from-zinc-50">{skill.level}</h2>
              <p class="text-xs font-mono">{skill.description}</p>

            </div>

          </figure>


        ))}





      </div>


    </>
  )
}
