import React, { useRef, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from './OrbitControls';
import { TextureLoader } from 'three';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';



export const ErrorPage = () => {

  const texture = useLoader(TextureLoader, './img/moon02.jpg'); // Cambia el path con la ruta de tu imagen
  const { t } = useTranslation();


  return (
    <>

      <div className="w-full h-96 sky">
        <Canvas className="w-full h-80">
          <mesh>
            <sphereGeometry args={[2, 80, 80]} />
            <meshBasicMaterial map={texture} />
          </mesh>

          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[4, 2, 3]} />
        </Canvas>
      </div>
      <div className=" flex justify-center mt-5 ">
        <h1 className="text-2xl text-cyan-800 font-light text-center mb-20">{t('errorPage.text')}<br></br><NavLink to="/inicio" className="enlaces_navbar"> <NavLink to="/inicio" className="enlaces_navbar"> {t('header.home')}</NavLink></NavLink></h1>
        <img src="./img/Ovni retro.png" className="w-48 h-48 ovni " />

      </div>
    </>
  );
};

