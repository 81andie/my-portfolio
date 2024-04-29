import React from 'react'
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


export const ErrorPage = () => {
    const canvasContainerRef = useRef(null);
    const sphereRef = useRef(null);

    useEffect(() => {
        // Creamos una escena, una cámara y un renderer
        const scene = new THREE.Scene();
        // scene.background = new THREE.Color(0xffffff); // Cambiamos el color de fondo de la escena a blanco

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.3, 2000);
        const renderer = new THREE.WebGLRenderer({ alpha: true }); // Habilitamos el fondo transparente
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Agregamos una luz ambiente intensa para iluminar mejor la esfera
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        // Creamos una geometría para la esfera
        const geometry = new THREE.SphereGeometry(2.5, 25, 25); // Aumentamos el radio para hacer la esfera más grande

        // Cargamos la textura de imagen desde la carpeta public
        const texture = new THREE.TextureLoader().load('/img/01.jpg');

        // Creamos un material básico con la textura cargada
        const material = new THREE.MeshBasicMaterial({ map: texture });

        // Creamos la esfera y le asignamos la geometría y el material
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
        sphereRef.current = sphere;

        // Posicionamos la cámara
        camera.position.z = 10;

        // Creamos controles de órbita para permitir al usuario mover la cámara alrededor de la esfera
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.rotateSpeed = 0.35;




        // Función para animar la escena
        const animate = () => {
            requestAnimationFrame(animate);
            // Rotamos la esfera sobre su eje vertical (Y)
            sphereRef.current.rotateY(0.005);
            // Modificamos la posición de la esfera para simular el efecto de flotar
            sphereRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.5;
            renderer.render(scene, camera);
            controls.update(); // Actualizamos los controles en cada fotograma de animación
        };
        animate();

        // Añadimos el renderer al contenedor en el DOM
        canvasContainerRef.current.appendChild(renderer.domElement);

        // Manejamos el evento resize para actualizar el tamaño del renderer
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Limpiamos los listeners en el cleanup de useEffect
        return () => {
            window.removeEventListener('resize', handleResize);
            controls.dispose(); // Liberamos los recursos de los controles de órbita al salir
        };
    }, []);
  return (

    
  <>


            <div

                ref={canvasContainerRef}
                style={{

                    position: 'absolute',
                    className: 'canvasimg',
                    backgroundSize: 'cover',
                    left: 0,
                    marginTop: '20px',
                    zIndex: 1, // Aseguramos que el fondo esté detrás de la escena WebGL
                    backgroundImage: 'url(/img/espacio1.avif)', // Establecemos la imagen de fondo
                   
                    
                }}
                />

<div className="title">
                <h1 className='Error_title'>Error 404</h1>
                <img src="img/Ovni retro.png" className="ovni" />
                <h3 className="parr_404">Houston lo sentimos pero ha ocurrido algo desconocido,<br /> la página que intentas acceder parece ser que no existe, por favor vuelve a inicio, pero si quieres<br /> puedes jugar un rato mientras solucionamos este problema</h3>

                <button className="play">PLAY</button>
            </div>


  </>
  )
}
