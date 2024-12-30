import React from 'react'
import { useState, useEffect } from 'react';
import { useHref } from 'react-router-dom';
import { Chip } from 'primereact/chip';
import { useTranslation } from 'react-i18next';
import './Cabecera.css';



export const Cabecera = () => {

    const { t } = useTranslation();
    /* const base_image_url = useHref('/');   
   

    let gift =`${base_image_url}/img/mobile4.webp`;
    let gift1 = `${base_image_url}/img/mobile (5).gif`;
    let gift2 = `${base_image_url}/img/mobile (6).gif`;*/

    let gift = "/img/mobile4.webp";
    let gift1 = "/img/mobile (5).gif";
    let gift2 = "/img/mobile (6).gif";

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
 
            <div className="flex flex-col justify-center items-center">
                {mostrarTexto && <span className="span_maqEscribir overflow-hidden border-r-2 border-blue-400">{t('header.helloWorld')}<br></br>
                </span>}

                {mostrarTexto && <span className="span_maqEscribir1 overflow-hidden border-r-2 border-orange-400">{t('header.Im')}<br></br>
                </span>}

            </div>


            <div className="h-auto mb-40">
                

<div class="grid grid-cols-2 md:grid-cols-4 gap-4 ml-10 mr-10">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg bg-zinc-200" src="img/iPhone 15 Mockup, Perspective.png" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="img/mockDrop_Thunderbolt display on a table.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="public\img\mockDrop_Apple Pencil close by (5).jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
        </div>
    </div>
</div>

            </div>



            <div className='botones_cabecera'>

                <button className="conoceme">{t('header.contact')} <i className="pi pi-user" style={{ color: 'white' }}> </i></button>

            </div>


        </>

    )
}
