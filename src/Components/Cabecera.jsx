import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';







import './Cabecera.css';



export const Cabecera = () => {

   
    const { t } = useTranslation();


    const [mostrarTexto, setMostrarTexto] = useState(false);


    useEffect(() => {
        const timer =
            setTimeout(() => {
                setMostrarTexto(true);
            }, 100);

        return () => clearTimeout(timer)
    }, []);

    const imageData = [
        [
            { src: "img/iPhone 15 Mockup, Perspective.png", title: "SpaceAirTracker", heightClass: "h-auto", id: 5 },
            { src: "img/cleopatraCosmetics.jpg", title: "Cleopatra Cosmétics", heightClass: "h-44", id: 3 }
        ],
        [
            /*{ src: "img/macbook-subtle-turn.mp4", title: "Claustrum Aquae", isVideo: true, heightClass: "h-52", id: 6 },*/
            
            { src: "img/Mobile App Screen Mockup, Mosaic.png", title: "The Holy Wine", heightClass: "h-44", id: 7 },
            { src: "imgProjects/harry3.png", title: "Harry Potter App", heightClass: "h-92", id: 4 }
        ],
        [
          
            { src: "img/mockupMex1.png", title: "México Guide", heightClass: "h-44 md:h-36 lg:h-46 2xl:h-72", id: 2 },
            { src: "img/macbook-subtle-turn.mp4", title: "Claustrum Aquae", isVideo: true, heightClass: "h-auto 2xl:h-96", id: 6 },
            { src: "imgProjects/thunder1.jpg", title: "ThunderAI", heightClass: "md:h-28 lg:h-52 2xl:h-96", id: 8 }
        ],
        [
           
            { src: "imgProjects/angBitacora1.jpg", title: "Bitácora Map", heightClass: "h-auto", id: 9 },
            { src: "img/mockuptrafic.png", title: "Traffic Valencia", heightClass: "h-56 md:h-52 lg:h-64 2xl:h-96", id: 1 },
        
        ]
    ];
2



    return (

        <>

            <div className="flex flex-col justify-center items-center mt-5">
                {mostrarTexto && <span className="span_maqEscribir overflow-hidden border-r-2  border-blue-400">{t('header.helloWorld')}<br></br>
                </span>}

                {mostrarTexto && <span className="span_maqEscribir1 overflow-hidden border-r-2 border-orange-400">{t('header.Im')}<br></br>
                </span>}

            </div>


            <div className="h-auto mb-20 lg:mb-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ml-10 mr-10">
                    {imageData.map((column, colIndex) => (
                        <div key={colIndex} className="grid gap-4">
                            {column.map((item, itemIndex) => (
                                <figure key={itemIndex} className="max-w-full relative">

                                    <NavLink to={`/proyectos/${item.id}`}>

                                        {item.isVideo ? (
                                            <div className="relative">
                                                <iframe
                                                    className={`object-cover w-full rounded-lg opacity-60 hover:opacity-100 transition-opacity duration-300 ${item.heightClass}`}
                                                    src={item.src}
                                                    allow="autoplay; fullscreen; picture-in-picture"
                                                    title={item.title}
                                                />
                                                <div className="absolute inset-0 z-10"></div>
                                            </div>

                                        ) : (
                                            <img
                                                className={`object-contain w-full bg-zinc-200 rounded-lg opacity-70 hover:opacity-100 transition-opacity duration-300 ${item.heightClass}`}
                                                src={item.src}
                                                alt={item.title}
                                            />
                                        )}
                                    </NavLink>
                                    <figcaption className="span_maqEscribir2 overflow-hidden rounded-md top-1 w-full z-90 absolute bg-gradient-to-r from-zinc-50 text-zinc-700 font-semibold px-5 py-2 text-xs">
                                        {item.title}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    ))}

                </div>

            </div>



            <div className='flex justify-center mb-20'>

                <NavLink to="/contacto" className="conoceme">{t('header.contact')} <i className="pi pi-user" style={{ color: 'white' }}> </i></NavLink>

            </div>



        </>

    )
}
