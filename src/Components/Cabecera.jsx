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
            { hrefDemo: "https://81andie.github.io/SpaceAir/", href2Github: "https:/github.com/81andie/SpaceAir/", src: "img/iPhone 15 Mockup, Perspective.png", title: "SpaceAirTracker", heightClass: "h-auto", id: 5 },
            { src: "img/cleopatraCosmetics.jpg", title: "Cleopatra Cosmétics", heightClass: "h-44", id: 3 },

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

     return (
        <>
            {/* TEXTO */}
            <div className="flex flex-col justify-center items-center mt-5">
                {mostrarTexto && (
                    <span className="span_maqEscribir border-r-2 border-blue-400">
                        {t('header.helloWorld')}<br />
                    </span>
                )}

                {mostrarTexto && (
                    <span className="span_maqEscribir1 border-r-2 border-orange-400">
                        {t('header.Im')}<br />
                    </span>
                )}
            </div>

            {/* GRID */}
            <div className="h-auto mb-20 lg:mb-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ml-10 mr-10">

                    {imageData.map((column, colIndex) => (
                        <div key={colIndex} className="grid gap-4">

                            {column.map((item) => (
                                <figure key={item.id} className="relative group">

                                    {/* IMAGEN → DEMO */}
                                    {item.hrefDemo ? (
                                        <a href={item.hrefDemo} target="_blank" rel="noopener noreferrer">
                                            {item.isVideo ? (
                                                <iframe
                                                    className={`w-full rounded-lg opacity-70 group-hover:opacity-100 ${item.heightClass}`}
                                                    src={item.src}
                                                    title={item.title}
                                                />
                                            ) : (
                                                <img
                                                    className={`w-full bg-zinc-200 rounded-lg opacity-70 group-hover:opacity-100 ${item.heightClass}`}
                                                    src={item.src}
                                                    alt={item.title}
                                                />
                                            )}
                                        </a>
                                    ) : (
                                        item.isVideo ? (
                                            <iframe
                                                className={`w-full rounded-lg ${item.heightClass}`}
                                                src={item.src}
                                                title={item.title}
                                            />
                                        ) : (
                                            <img
                                                className={`w-full bg-zinc-200 rounded-lg ${item.heightClass}`}
                                                src={item.src}
                                                alt={item.title}
                                            />
                                        )
                                    )}

                                    {/* BOTONES */}
                                    <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition">

                                        {item.hrefDemo && (
                                            <a href={item.hrefDemo} target="_blank" rel="noopener noreferrer" className="w-1/3 p-2 bg-zinc-300/30 text-center">
                                                👁
                                            </a>
                                        )}

                                        {item.href2Github && (
                                            <a href={item.href2Github} target="_blank" rel="noopener noreferrer" className="w-1/3 p-2 bg-zinc-400/40 text-center">
                                                💻
                                            </a>
                                        )}

                                        <NavLink to={`/proyectos/${item.id}`} className="w-1/3 p-2 bg-zinc-500/50 text-center">
                                            ℹ️
                                        </NavLink>

                                    </div>

                                    {/* TITULO */}
                                    <figcaption className="span_maqEscribir2 overflow-hidden rounded-md top-1 w-full z-90 absolute bg-gradient-to-r from-zinc-50 text-zinc-700 font-semibold px-5 py-2 text-xs">
                                        {item.title}
                                    </figcaption>

                                </figure>
                            ))}

                        </div>
                    ))}

                </div>
            </div>

            {/* BLOG */}
            <div className='flex justify-center mb-20'>
                <a href="https://fiori-tvv1.vercel.app/#/inicio" className="conoceme">
                    Visita mi Blog
                </a>
            </div>
        </>
    );




   
}
