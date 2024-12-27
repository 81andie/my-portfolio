import React from 'react'
import { useState, useEffect } from 'react';
import { useHref } from 'react-router-dom';
import { Chip } from 'primereact/chip';
import { useTranslation } from 'react-i18next';


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



            <div className="header">
                {mostrarTexto && <span className="span_maqEscribir">{t('header.helloWorld')}<br></br>
                </span>}

                {mostrarTexto && <span className="span_maqEscribir1">{t('header.Im')}<br></br>
                </span>}


            </div>

            <div className="grid_fotos">
                <div className="item">
                    <img src={gift} className="imagenes_centradas" loading="lazy" alt="imagenes-mobil" />
                    <div className="card flex flex-wrap gap-2">
                        <Chip label="REACT"
                            className="custom-chip"
                            image="/logo192.png"
                            style={{
                                backgroundColor: '#CCF9FB',
                                fontWeight: 'bolder',
                                width: '84px',
                                color: '#418C90',
                                borderRadius: '23px',
                                padding: '0.1rem',
                                marginRight: '15px',
                                marginBottom: '12px',
                                marginLeft: '6px'
                            }} />

                        <Chip label="HTML"
                            className="custom-chip"
                            image="img/5352-html5_102567.png"
                            style={{
                                backgroundColor: '#FDEACE',
                                width: '82px',
                                color: 'orange',
                                fontWeight: 'bolder',
                                borderRadius: '23px',
                                padding: '0.1rem',
                                marginRight: '15px',
                                marginBottom: '12px'
                            }} />

                        <Chip label="CSS"
                            className="custom-chip"
                            image="/img/file_type_css_icon_130661.png"
                            style={{
                                backgroundColor: '#7ABCFA',
                                width: '66px',
                                color: '#155A9A',
                                borderRadius: '23px',
                                fontWeight: 'bolder',
                                padding: '0.1rem',
                                marginRight: '15px',
                                marginBottom: '12px'
                            }} />

                    </div>



                </div>

                <div className="item">
                    <img src={gift2} className="imagenes_centradas" loading="lazy" alt="imagenes-mobil1" />

                    <div className="card flex flex-wrap gap-2">


                        <Chip label="HTML"
                            className="custom-chip"
                            image="img/5352-html5_102567.png"
                            style={{
                                backgroundColor: '#FDEACE',
                                width: '82px',
                                color: 'orange',
                                fontWeight: 'bolder',
                                borderRadius: '23px',
                                padding: '0.1rem',
                                marginRight: '15px',
                                marginBottom: '12px'
                            }} />

                        <Chip label="CSS"
                            className="custom-chip"
                            image="/img/file_type_css_icon_130661.png"
                            style={{
                                backgroundColor: '#7ABCFA',
                                width: '66px',
                                color: '#155A9A',
                                borderRadius: '23px',
                                fontWeight: 'bolder',
                                padding: '0.1rem',
                                marginRight: '15px',
                                marginBottom: '12px'
                            }} />

                    </div>

                </div>

                <div className="item">
                    <img src={gift1} className="imagenes_centradas" loading="lazy" alt="imagenes-mobil" />

                    <div className="card flex flex-wrap gap-2">


                        <Chip label="HTML"
                            className="custom-chip"
                            image="img/5352-html5_102567.png"
                            style={{
                                backgroundColor: '#FDEACE',
                                width: '82px',
                                color: 'orange',
                                fontWeight: 'bolder',
                                borderRadius: '23px',
                                padding: '0.1rem',
                                marginRight: '15px',
                                marginBottom: '12px'
                            }} />

                        <Chip label="CSS"
                            className="custom-chip"
                            image="/img/file_type_css_icon_130661.png"
                            style={{
                                backgroundColor: '#7ABCFA',
                                width: '66px',
                                color: '#155A9A',
                                borderRadius: '23px',
                                fontWeight: 'bolder',
                                padding: '0.1rem',
                                marginRight: '15px',
                                marginBottom: '12px'
                            }} />

                    </div>

                </div>


            </div>

            <div className="grid_fotos1">
                <div className="item">
                    <img src={gift2} loading="lazy" className="imagenes_centradas" alt="imagenes-mobil1" />
                    <div className="card flex flex-wrap gap-2">


                        <Chip label="HTML"
                            className="custom-chip"
                            image="img/5352-html5_102567.png"
                            style={{
                                backgroundColor: '#FDEACE',
                                width: '82px',
                                color: 'orange',
                                fontWeight: 'bolder',
                                borderRadius: '23px',
                                padding: '0.1rem',
                                marginRight: '15px',
                                marginBottom: '12px'
                            }} />

                        <Chip label="CSS"
                            className="custom-chip"
                            image="/img/file_type_css_icon_130661.png"
                            style={{
                                backgroundColor: '#7ABCFA',
                                width: '66px',
                                color: '#155A9A',
                                borderRadius: '23px',
                                fontWeight: 'bolder',
                                padding: '0.1rem',
                                marginRight: '15px',
                                marginBottom: '12px'
                            }} />

                    </div>
                </div>

                <div className="item">
                    <img src={gift} className="imagenes_centradas" loading="lazy" alt="imagenes-mobil" />
                    <div className="card flex flex-wrap gap-2">


                        <Chip label="HTML"
                            className="custom-chip"
                            image="img/5352-html5_102567.png"
                            style={{
                                backgroundColor: '#FDEACE',
                                width: '82px',
                                color: 'orange',
                                fontWeight: 'bolder',
                                borderRadius: '23px',
                                padding: '0.1rem',
                                marginRight: '15px',
                                marginBottom: '12px'
                            }} />

                        <Chip label="CSS"
                            className="custom-chip"
                            image="/img/file_type_css_icon_130661.png"
                            style={{
                                backgroundColor: '#7ABCFA',
                                width: '66px',
                                color: '#155A9A',
                                borderRadius: '23px',
                                fontWeight: 'bolder',
                                padding: '0.1rem',
                                marginRight: '15px',
                                marginBottom: '12px'
                            }} />

                    </div>
                </div>

                <div className="item">
                    <img src={gift2} className="imagenes_centradas" loading="lazy" alt="imagenes-mobil1" />
                    <div className="card flex flex-wrap gap-1">


                        <Chip label="HTML"
                            className="custom-chip"
                            image="img/5352-html5_102567.png"
                            style={{
                                backgroundColor: '#FDEACE',
                                width: '82px',
                                color: 'orange',
                                fontWeight: 'bolder',
                                borderRadius: '23px',
                                padding: '0.1rem',
                                marginRight: '15px',
                                marginBottom: '12px'
                            }} />

                        <Chip label="CSS"
                            className="custom-chip"
                            image="/img/file_type_css_icon_130661.png"
                            style={{
                                backgroundColor: '#7ABCFA',
                                width: '66px',
                                color: '#155A9A',
                                borderRadius: '23px',
                                fontWeight: 'bolder',
                                padding: '0.1rem',
                                marginRight: '15px',
                                marginBottom: '12px'
                            }} />

                    </div>
                </div>

            </div>



            <div className='botones_cabecera'>

                <button className="conoceme">{t('header.contact')} <i className="pi pi-user" style={{ color: 'white' }}> </i></button>

            </div>


        </>

    )
}
