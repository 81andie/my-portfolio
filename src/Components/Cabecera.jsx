import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Cabecera.css';

export const Cabecera = () => {

    const { t } = useTranslation();
    const [mostrarTexto, setMostrarTexto] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMostrarTexto(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const imageData = [
        [
            {
                hrefDemo: "https://81andie.github.io/SpaceAir/map",
                href2Github: "https://github.com/81andie/SpaceAir",
                src: "img/iPhone 15 Mockup, Perspective.png",
                title: "SpaceAirTracker",
                className: "md:h-auto lg:h-96",
                id: 5
            },
            {
                hrefDemo: "https://81andie.github.io/cosmetics/",
                href2Github: "https://github.com/81andie/cosmetics",
                src: "img/cleopatraCosmetics.jpg",
                title: "Cleopatra Cosmétics",
                className: "md:h-60",
                id: 3
            },
        ],


        [
            {
                hrefDemo: "https://81andie.github.io/holyWine/",
                href2Github: "https://github.com/81andie/holyWine",
                src: "img/Mobile App Screen Mockup, Mosaic.png",
                title: "The Holy Wine",
                className: "md:h-60",
                id: 7
            },
            {
                hrefDemo: "https://potter-app-three.vercel.app/#/inicio",
                href2Github: "https://github.com/81andie/hpApp",
                src: "imgProjects/harry3.png",
                title: "Harry Potter App",
                className: "md:h-92 lg:h-96",
                id: 4
            }
        ],
        [
            {
                hrefDemo: "https://github.com/81andie/TurismoMexico/deployments/github-pages",
                href2Github: "https://github.com/81andie/TurismoMexico",
                src: "img/mockupMex1.png",
                title: "México Guide",
                className: "md:h-64 lg:h-40",
                id: 2
            },
            {
                hrefDemo: "https://81andie.github.io/Aqvae/",
                href2Github: "https://github.com/81andie/Aqvae",
                src: "img/macbook-subtle-turn.mp4",
                title: "Claustrum Aquae",
                isVideo: true,
                className: "md:h-72 lg:h-56 2xl:h-96",
                id: 6
            },
            {
                hrefDemo: "https://81andie.github.io/thunderIA/",
                href2Github: "https://github.com/81andie/thunderIA",
                src: "imgProjects/thunder1.jpg",
                title: "ThunderAI",
                className: "md:h-72 lg:h-52 2xl:h-96",
                id: 8
            }
        ],
        [
            {
                hrefDemo: "https://81andie.github.io/AngBitacoraMap/",
                href2Github: "https://github.com/81andie/AngBitacoraMap",
                src: "imgProjects/angBitacora1.jpg",
                title: "Bitácora Map",
                className: "md:h-52 lg:h-42 2xl:h-92",
                id: 9
            },
            {
                hrefDemo: "https://81andie.github.io/got/",
                href2Github: "https://github.com/81andie/got",
                src: "img/gotLeaflet.png",
                title: "GeoGotApp",
                className: "md:h-52 lg:h-40 2xl:h-92",
                id: 1
            },

            {
                hrefDemo: "https://81andie.github.io/gotmap/",
                href2Github: "https://github.com/81andie/gotmap",
                src: "img/gotmaplibre1.jpg",
                title: "GeoGotApp",
                className: "md:h-52 lg:h-28 2xl:h-72",
                id: 10
            },
            {
                hrefDemo: "https://81andie.github.io/gotopen/",
                href2Github: "https://github.com/81andie/gotopen",
                src: "img/openlayersGot.png",
                title: "GeoGotApp",
                className: "md:h-52 lg:h-28 2xl:h-72",
                id: 11
            }
        ]
    ];

    return (
        <>
            {/* TEXTO */}
            <div className="flex flex-col text-center justify-center items-center mt-5 title">
                {mostrarTexto && (
                    <span>
                        {t('header.helloWorld')}<br />
                    </span>
                )}

                {mostrarTexto && (
                    <p className="border-orange-400 title">
                        {t('header.Im')}<br />
                    </p>
                )}
            </div>


            <div className="h-auto mb-20 lg:mb-2">
                <div className="grid grid-cols-1   
                sm:grid-cols-2 md:grid-cols-2
                lg:grid-cols-4 gap-4
                ml-4 mr-4 md:ml-4 md:mr-4">

                    {imageData.map((column, colIndex) => (
                        <div key={colIndex} className="grid gap-4 w-full h-full">

                            {column.map((item) => (
                                <figure key={item.id} className="relative group w-full h-full">

                                    {/* IMAGEN / VIDEO */}
                                    <a href={item.hrefDemo} target="_blank" rel="noopener noreferrer">

                                        {item.isVideo ? (
                                            <iframe
                                                className={`
                                                    w-full  aspect-video
                                                    ${item.className}
                                                    border-4 border-x-fuchsia-500 border-y-blue-200 rounded-lg
                                                `}
                                                src={item.src}
                                                title={item.title}
                                            />
                                        ) : (
                                            <img
                                                className={`
                                                    w-full
                                                    aspect-[4/5]  object-cover
                                                    ${item.className} md:object-contain
                                                    border-4 border-x-fuchsia-500 border-y-blue-200 rounded-lg
                                                `}
                                                src={item.src}
                                                alt={item.title}
                                            />
                                        )}

                                    </a>

                                    {/* BOTONES */}
                                    <div className="absolute inset-0 flex items-end transition pointer-events-none rounded-lg ">
                                        <div className="pointer-events-auto w-full flex justify-center ">

                                            {item.hrefDemo && (
                                                <a href={item.hrefDemo} target="_blank" rel="noopener noreferrer" className="w-1/3 p-2 bg-fuchsia-900 text-center sm:opacity-95 md:opacity-0 md:group-hover:opacity-95 lg:opacity-0 lg:group-hover:opacity-95">
                                                    <i className="pi pi-eye text-xl text-white  "></i>
                                                </a>
                                            )}

                                            {item.href2Github && (
                                                <a href={item.href2Github} target="_blank" rel="noopener noreferrer" className="w-1/3 p-2 bg-fuchsia-700 text-center sm:opacity-95 md:opacity-0  md:group-hover:opacity-95 lg:opacity-0 lg:group-hover:opacity-95">
                                                    <i className="pi pi-github text-xl text-white"></i>
                                                </a>
                                            )}

                                            <NavLink to={`/proyectos/${item.id}`} className="w-1/3 p-2 bg-fuchsia-500 text-center sm:opacity-95   md:opacity-0 lg:opacity-0 lg:group-hover:opacity-95 md:group-hover:opacity-95">
                                                <i className="pi pi-info text-xl text-white"></i>
                                            </NavLink>

                                        </div>
                                    </div>

                                    {/* TITULO */}
                                    <figcaption className="ml-1 span_maqEscribir2 overflow-hidden rounded-md top-1 w-full absolute bg-gradient-to-r from-zinc-50 text-zinc-700 font-semibold px-5 py-2 text-xs">
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
};