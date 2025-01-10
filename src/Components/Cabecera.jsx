import React from 'react'
import { useState, useEffect } from 'react';
import { useHref } from 'react-router-dom';
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


    return (

        <>
            <div className="flex flex-col justify-center items-center mt-10">
                {mostrarTexto && <span className="span_maqEscribir overflow-hidden border-r-2 border-blue-400">{t('header.helloWorld')}<br></br>
                </span>}

                {mostrarTexto && <span className="span_maqEscribir1 overflow-hidden border-r-2 border-orange-400">{t('header.Im')}<br></br>
                </span>}

            </div>


            <div className="h-auto mb-20">

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 ml-10 mr-10">
                    <div class="grid gap-4">
                        <figure class="max-w-full relative">
                            <img class="h-auto max-w-full rounded-lg opacity-70  hover:opacity-100 transition-opacity duration-300 bg-zinc-200" src="img/iPhone 15 Mockup, Perspective.png" alt="" />
                            <figcaption class="span_maqEscribir2 overflow-hidden rounded-md top-1 w-full z-90 absolute bg-gradient-to-r from-zinc-50  text-zinc-700 font-semibold  px-5 py-2 text-xs ">SpaceAirTracker</figcaption>
                        </figure>

                        <figure class="max-w-full relative">
                            <img class="h-48 object-cover max-w-full  opacity-60 hover:opacity-100 rounded-lg" src="img/cleopatraCosmetics.jpg" alt="" />
                            <figcaption class="span_maqEscribir2 overflow-hidden rounded-md top-0  w-full z-90 absolute bg-gradient-to-r from-zinc-50  text-zinc-700 font-semibold  px-5 py-2 text-xs">Cleopatra Cosmétics</figcaption>
                        </figure>
                       
                    </div>
                    <div class="grid gap-4">
                        <figure class="max-w-full relative">
                            <iframe class="h-52 object-cover max-w-full rounded-lg  opacity-60  hover:opacity-100 transition-opacity duration-300" src="img/macbook-subtle-turn.mp4" allow="autoplay; fullscreen; picture-in-picture" alt="" />
                            <figcaption class="span_maqEscribir2 overflow-hidden rounded-md top-1  w-full z-90 absolute bg-gradient-to-r from-zinc-50 text-zinc-700 font-semibold  px-5 py-2 text-xs">Claustrum Aquae</figcaption>
                        </figure>
                      

                        <figure class="max-w-full relative">
                            <img class="h-auto max-w-full rounded-lg opacity-60 bg-zinc-200 hover:opacity-100 transition-opacity duration-300" src="img/mockupHp.png" alt="" />
                            <figcaption class="span_maqEscribir2 overflow-hidden rounded-md top-0  w-full z-90 absolute bg-gradient-to-r from-zinc-50 text-zinc-700 font-semibold  px-5 py-2 text-xs">Harry Potter App</figcaption>
                        </figure>
                       
                       
                    </div>
                    <div class="grid gap-4">
                    <figure class="max-w-full relative">
                            <img class="h-auto max-w-full rounded-lg opacity-60  hover:opacity-100 transition-opacity duration-300" src="img/mockupMex1.png" alt="" />
                            <figcaption class="span_maqEscribir2 overflow-hidden rounded-md top-0 w-full z-90 absolute bg-gradient-to-r from-zinc-50 text-zinc-700 font-semibold  px-5 py-2 text-xs">México Guide</figcaption>
                        </figure>
                   
                        <figure class="max-w-full relative">
                            <img class="h-48 object-cover bg-zinc-200 opacity-50  hover:opacity-100 transition-opacity duration-300 max-w-full rounded-lg" src="img/Mobile App Screen Mockup, Mosaic.png" alt="" />
                            <figcaption class="span_maqEscribir2 overflow-hidden rounded-md top-1  w-full left-0 z-90 absolute bg-gradient-to-r from-zinc-50  text-zinc-700 font-semibold  px-5 py-2 text-xs">The Holy Wine</figcaption>
                        </figure>

                      
                    </div>
                    <div class="grid gap-4">
                    <figure class="max-w-full relative">
                            <img class="h-52 object-cover max-w-full rounded-lg opacity-70  hover:opacity-100 transition-opacity duration-300 bg-zinc-200" src="img/mockuptrafic.png" alt="" />
                            <figcaption class="span_maqEscribir2 overflow-hidden rounded-md top-1 w-full z-90 absolute bg-gradient-to-r from-zinc-50  text-zinc-700 font-semibold  px-5 py-2 text-xs ">Traffic Valencia</figcaption>
                        </figure>
                        <figure class="max-w-full relative">
                            <img class="h-auto max-w-full rounded-lg opacity-60 bg-zinc-200 hover:opacity-100 transition-opacity duration-300" src="img/mockupHp.png" alt="" />
                            <figcaption class="span_maqEscribir2 overflow-hidden rounded-md top-0  w-full z-90 absolute bg-gradient-to-r from-zinc-50 text-zinc-700 font-semibold  px-5 py-2 text-xs">Harry Potter App</figcaption>
                        </figure>
                      
                       
                    </div>
                </div>

            </div>



            <div className='botones_cabecera'>

                <button className="conoceme">{t('header.contact')} <i className="pi pi-user" style={{ color: 'white' }}> </i></button>

            </div>


        </>

    )
}
