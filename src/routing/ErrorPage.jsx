import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

export const ErrorPage = () => {
  const canvasContainerRef = useRef(null);

  useEffect(() => {
    // Crear la escena
    const scene = new THREE.Scene();

    // Crear la cámara
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

 

    // Crear el renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.autoClear = false;
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasContainerRef.current.appendChild(renderer.domElement);

    // Añadir luz
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Crear geometría de la esfera
    const sphereGeometry = new THREE.SphereGeometry(2.5, 32, 32);
    const texture = new THREE.TextureLoader().load('./img/01.jpg'); // Asegúrate de que esta ruta sea válida
    const sphereMaterial = new THREE.MeshStandardMaterial({ map: texture });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Cargar fuente y añadir texto 3D
    const fontLoader = new FontLoader();
    fontLoader.load(
      './fonts/helvetiker_bold.typeface.json', // Asegúrate de que esta ruta sea válida
      (font) => {
        const textGeometry = new TextGeometry('Error 404', {
          font: font,
          size: 0.5,
          depth: 0.2,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.03,
          bevelSize: 0.02,
          bevelSegments: 5,
        });
        const textMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);

        // Posicionar el texto
        textMesh.position.set(-2, 3, 0); // Ajusta las coordenadas según prefieras
        scene.add(textMesh);
      },
      undefined,
      (error) => {
        console.error('Error al cargar la fuente:', error);
      }
    );

    // Añadir controles de órbita
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Animación
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update();
    };
    animate();

    // Manejo del redimensionamiento
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      controls.dispose();
    };
  }, []);

  return (
    <div
      ref={canvasContainerRef}
      style={{
        width: '100%',
        height: '100vh', // Ajusta este valor según tu diseño
        position: 'relative',
        backgroundImage: 'url(./img/espacio1.avif)', // Asegúrate de que esta ruta sea válida
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></div>
  );
};
