import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink, useHref } from 'react-router-dom';
import { Chip } from 'primereact/chip';
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
            { src: "img/iPhone 15 Mockup, Perspective.png", title: "SpaceAirTracker", heightClass: "h-auto" },
            { src: "img/cleopatraCosmetics.jpg", title: "Cleopatra Cosmétics", heightClass: "h-48" }
        ],
        [
            { src: "img/macbook-subtle-turn.mp4", title: "Claustrum Aquae", isVideo: true, heightClass: "h-52" },
            { src: "img/mockupHp.png", title: "Harry Potter App", heightClass: "h-auto" }
        ],
        [
            { src: "img/mockupMex1.png", title: "México Guide", heightClass: "h-auto" },
            { src: "img/Mobile App Screen Mockup, Mosaic.png", title: "The Holy Wine", heightClass: "h-48" }
        ],
        [
            { src: "img/mockuptrafic.png", title: "Traffic Valencia", heightClass: "h-52" },
            { src: "img/mockupHp.png", title: "Harry Potter App", heightClass: "h-auto" }
        ]
    ];


    return (

        <>
            <div className="flex flex-col justify-center items-center mt-5">
                {mostrarTexto && <span className="span_maqEscribir overflow-hidden border-r-2 border-blue-400">{t('header.helloWorld')}<br></br>
                </span>}

                {mostrarTexto && <span className="span_maqEscribir1 overflow-hidden border-r-2 border-orange-400">{t('header.Im')}<br></br>
                </span>}

            </div>


            <div className="h-auto mb-20 lg:mb-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ml-10 mr-10">
                    {imageData.map((column, colIndex) => (
                        <div key={colIndex} className="grid gap-4">
                            {column.map((item, itemIndex) => (
                                <figure key={itemIndex} className="max-w-full relative">
                                    {item.isVideo ? (
                                        <iframe
                                            className={`object-cover max-w-full rounded-lg opacity-60 hover:opacity-100 transition-opacity duration-300 ${item.heightClass}`}
                                            src={item.src}
                                            allow="autoplay; fullscreen; picture-in-picture"
                                            title={item.title}
                                        />
                                    ) : (
                                        <img
                                            className={`object-contain w-full bg-zinc-200 rounded-lg opacity-70 hover:opacity-100 transition-opacity duration-300 ${item.heightClass}`}
                                            src={item.src}
                                            alt={item.title}
                                        />
                                    )}
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
