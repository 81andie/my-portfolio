import React from 'react'
import { useState, useEffect } from 'react';


export const Cabecera = () => {
    let gift = "img/mobile (4).gif";
    let gift1 = "img/mobile (5).gif";
    let gift2 = "img/mobile (6).gif"

    const [mostrarTexto, setMostrarTexto] = useState(false);


    useEffect(() => {
        const timer =
            setTimeout(() => {
                setMostrarTexto(true);
            }, 1000);

        return () => clearTimeout(timer)
    }, []);







    return (

        <>

            <div className="titulo_nombre">
                <h3 className="titulo_cabecera">Andrea Hernández</h3>
            </div>

            <div className="header_decoracion">
                {mostrarTexto && <span className="span_maqEscribir">Hello World, I'm a Web Developer Frontend
               </span>}

               

            </div>

            <div className="grid_fotos">
                <div className="item">
                    <img src={gift} className="imagenes_centradas" alt="imagenes-mobil" />
                </div>

                <div className="item">
                    <img src={gift2} className="imagenes_centradas" alt="imagenes-mobil1" />
                </div>

                <div className="item">
                    <img src={gift1} className="imagenes_centradas" alt="imagenes-mobil" />
                </div>


            </div>

            <div className="grid_fotos1">
                <div className="item">
                    <img src={gift2} className="imagenes_centradas" alt="imagenes-mobil1" />
                </div>

                <div className="item">
                    <img src={gift} className="imagenes_centradas" alt="imagenes-mobil" />
                </div>

                <div className="item">
                    <img src={gift2} className="imagenes_centradas" alt="imagenes-mobil1" />
                </div>



            </div>



            <div className='botones_cabecera'>

                <button className="conoceme">Contacto<i className="pi pi-user" style={{ color: 'white' }}></i></button>

            </div>





        </>

    )
}
