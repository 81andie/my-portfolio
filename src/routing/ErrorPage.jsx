import React, { useRef, useEffect } from 'react';
import { Canvas,useLoader} from '@react-three/fiber';
import { OrbitControls } from './OrbitControls';
import { TextureLoader } from 'three';

export const ErrorPage = () => {

  const texture = useLoader(TextureLoader, './img/moon02.jpg'); // Cambia el path con la ruta de tu imagen

  

  return (
    <>
   
    <div className="w-full h-96 sky">
      <Canvas className="w-full h-80">
        <mesh>
          <sphereGeometry args={[2, 80, 80]} />
          <meshBasicMaterial map={texture} />
        </mesh>
     
        <OrbitControls/>
        <directionalLight position={[4, 2, 3]} />
      </Canvas>
    </div>
    <div className=" flex justify-center mt-5 ">
        <h1 className="text-2xl text-cyan-800 font-light text-center mb-20">Lo sentimos, no encontramos<br></br> la página, te has perdido<br></br> Vuelve a <strong>Inicio</strong></h1>
        <img src="./img/Ovni retro.png" className="w-48 h-48 ovni "/>
        
    </div>
    </>
  );
};

