export const projects = [
  {
    title: "Traffic Valéncia",
    description:
      "Traffic Valencia se ha desarrollado con JS, geocaliza todas las cámaras de tráfico de la área metropolitana de Valéncia, pudiendo ver a tiempo real lo que graban las cámaras.",
    
    description1:"Los datos para la geolocalización de las cámaras, los aporta el portal de datos abiertos del Ayuntamiento de Valéncia. Contiene también una pequeña libreria 'leaflet-control-geocoder', para poder geolocalizar algún destino en concreto",
      
    
    
      images: [
        "./imgProjects/traffic.jpg",
        "./imgProjects/traffic6.jpg",
      "./imgProjects/traffic1.jpg",
      "./imgProjects/traffic5.jpg",
     
      "./imgProjects/traffic3.jpg",
      "./imgProjects/traffic4.jpg",
     
      
      

    ],
    technologies: [
      {
        name: "html",
        icon: "./imgtec/html.jpg",
      },
      {
        name: "JavaScript",
        icon: "./imgtec/js.jpg",
      },
      {
        name: "Tailwind CSS",
        icon: "./imgtec/tailwind.avif",
      },

      {
        name: "Leaflet",
        icon: "./imgtec/leaflet.jpg",
      },
     
    ],

    url:[
      "https://github.com/81andie/TraficoValencia"
    ],

    url1:[
      "https://81andie.github.io/TraficoValencia/Index.html"
    ]

  },
  
  
  
  
  {
    title: "México Guide",
    description:
      "México Guide, es una guia interactiva con la geolocalización aportados por el Instituto de Geografía de la Unam(México), aprovechando la plataforma IDEA lleva la renderización por capas, de diferentes metadatos.",
      
      description1: "La renderización por capas, diferencia, los destinos turísticos más emblemáticos, yacimientos Mayas,Tesoros Arqueológicos y Patrimonio de la Unesco, aportando una descripción y fotos de los lugares a partir de la utilización de la Api de Google",
    
      images: [
      "./imgProjects/mex1.jpg",
      "./imgProjects/mex2.jpg",
      "./imgProjects/mex3.jpg",
      "./imgProjects/mex7.jpg",
      "./imgProjects/mex9.jpg",
      "./imgProjects/mex8.jpg",
      

    ],
    technologies: [

      {
        name: "Html",
        icon: "./imgtec/html.jpg",
      },

      {
        name: "JavaScript",
        icon: "./imgtec/js.jpg",
      },
      {
        name: "Tailwind CSS",
        icon: "./imgtec/tailwind.avif",
      },
     
     

      {
        name: "MapLibre",
        icon: "./imgtec/maplibre.jpg",
      },

      {
        name: "Google APIs",
        icon: "./imgtec/googleApi.jpg",
      },
     
    ],

    url:[
      "https://github.com/81andie/TurismoMexico"
    ],

    url1:[
      "https://81andie.github.io/TurismoMexico/home.html"
    ]

  },

  {
    title: "Cleopatra Cosmétics",
    description:
      "Cleopatra Cosmétics, es un e-comerce especializado en productos cosméticos de lujo, el diseño limpio y senzillo, permite ver de forma muy clara sus principales funcionalidades, guiando al cliente por sus diferentes procesos de compra, la pasarela de compra esta lista para poder conectarla a una base de datos, a parte que se geolocaliza la tienda física utilizando React Leaflet",
    images: [
      "./imgProjects/cleo1.jpg",
      "./imgProjects/cleo2.jpg",
      "./imgProjects/cleo3.jpg",
      "./imgProjects/cleo6.jpg",
      
    ],
    technologies: [
      {
        name: "React",
        icon: "./imgtec/reactjs.jpg",
      },
      {
        name: "i18next",
        icon: "./imgtec/inext.jpg",
      },
      {
        name: "PrimeReact",
        icon: "./imgtec/primereact.jpg",
      },

      {
        name: "PrimeFlex",
        icon: "./imgtec/PrimeFlexLogo.jpg",
      },
      {
        name: "React Leaflet",
        icon: "./imgtec/reactLeaflet.jpg",
      },
    ],

    url:[
      "https://github.com/81andie/cosmetics"
    ],

    url1:[
      "https://81andie.github.io/cosmetics/"
    ]
  },



    {
      title: "Harry Potter App",
      description:
        "Harry Potter es una web, dónde encontrarás toda la información sobre Harry Potter, los datos están recogidos de la Api, HP-API, permitiendo la renderización de los principales personajes, profesores, estudiantes y todos los hechizos relacionados con el Universo Potter",
      images: [
        "./imgProjects/hp1.jpg",
        "./imgProjects/hp3.jpg",
        "./imgProjects/hp5.jpg",
        "./imgProjects/hp2.jpg",
        
      ],
      technologies: [
        {
          name: "Angular",
          icon: "./imgtec/angular.jpg",
        },
        {
          name: "Tailwind CSS",
          icon: "./imgtec/tailwind.avif",
        },
        
        {
          name: "PrimeNG",
          icon: "./imgtec/primeng.jpg",
        },

        {
          name: "Transloco",
          icon: "./imgtec/transloco.svg",
        },
      ],

      url:[
        "https://github.com/81andie/hpApp"
      ],

      url1:[
        "https://81andie.github.io/hpApp/"
      ]
    },


    {
      title: "SpaceAirTracker",
      description:
        "SpaceAirTracker es un rastreador de vuelos nacionales e internacionales, que permite, geolocalizar el vuelo, y de cada uno, poder saber su velocidad, ICAO, latitud y país de origen, permite tambien rastrear los vuelos a partir de su ciudad de origen",
      images: [
        "./imgProjects/Space1.jpg",
        "./imgProjects/space6.jpg",
        "./imgProjects/space2.jpg",
        "./imgProjects/space3.jpg",
        "./imgProjects/space4.jpg",
        "./imgProjects/space5.jpg",
       
        
      ],
      technologies: [
        {
          name: "Angular",
          icon: "./imgtec/angular.jpg",
        },
        {
          name: "Boostrap",
          icon: "./imgtec/boostraap.jpg",
        },
        
        {
          name: "Transloco",
          icon: "./imgtec/transloco.svg",
        },
      ],

      url:[
        "https://github.com/81andie/SpaceAir"
      ],

      url1:[
        "https://81andie.github.io/SpaceAir/"
      ]
    },


    {
      title: "Claustrum Aqvae",
      description:
        "Claustrum Aqvae, està desarrollada en Angular 17  es una web que mide el estado de los pantanos de Cataluña. Para el mapa interactivo e animaciones, he utilizado la libraria de Mapbox, combinada con la api Mapbox Places, para solventar la geolocalización de todos los pantanos de la Comunidad de Cataluña. Permite una busqueda por dia, de cualquier pantano, emitiendo los datos de medición del embalse consultado.",
     
      description1: "Para el estilo he utilizado la libreria Tailwind. Para mostrar los datos he utilizado el portal 'Dades Obertes de Catalunya'",
        images: [
        "./imgProjects/aqvae1.webp",
        "./imgProjects/aqvae2.webp",
        "./imgProjects/aqvae8.jpg",
        "./imgProjects/aqvae3.jpg",
        "./imgProjects/aqvae4.webp",
        "./imgProjects/aqvae5.webp"


        
    
        
      ],
      technologies: [
        {
          name: "Angular",
          icon: "./imgtec/angular.jpg",
        },
        {
          name: "Tailwind CSS",
          icon: "./imgtec/tailwind.avif",
        },
        
        
        {
          name: "Ngx-translate/core",
          icon: "./imgtec/translate.jpg",
        },
      ],

      url:[
        "https://github.com/81andie/Aqvae"
      ],

      url1:[
        "https://81andie.github.io/Aqvae/"
      ]
    },

    {
      title: "The Holy Winesprueba",
      description:
        "The Holy Wine, està desarrollada con la última versión de Angular, Angular 19, utilizando todas las novedades en las nuevas directivas del framework, para el estilo he utilizado la libreria Angular Material y para el diseño he utilizado Tailwind.",
        
        description1:"Se puede hacer busquedas por vino, lugar, tiene más de 10000 entradas. Tiene una sección explicando las diferentes variedades de uvas de la base de datos y es posible conocer los catadores de algunos vinos más exclusivos, escaneando el código qr que se adjunta en las cards.",
     
     
        images: [
     
        "./imgProjects/holy6.jpg",
        "./imgProjects/holy4.jpg",
        "./imgProjects/holy3.jpg",
        "./imgProjects/holy5.jpg",
        "./imgProjects/holyWine8.jpg",
        "./imgProjects/holy1.jpg",
      
      
        
       
     
       
        
      ],
      technologies: [
        {
          name: "Angular",
          icon: "./imgtec/angular.jpg",
        },
        {
          name: "Tailwind CSS",
          icon: "./imgtec/tailwind.avif",
        },
        {
          name: "Angular Material",
          icon: "./imgtec/angularMaterial.jpeg",
        },
        
     
      ],

      url:[
        "https://github.com/81andie/holyWine"
      ],

      url1:[
        "https://81andie.github.io/holyWine/"
      ]
    }

   

  ];