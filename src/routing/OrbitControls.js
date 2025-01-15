import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls as OrbitControlsCore } from 'three/examples/jsm/controls/OrbitControls';

export const OrbitControls = ({ enabled = true }) => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useEffect(() => {
    if (enabled && !controlsRef.current) {
      const controls = new OrbitControlsCore(camera, gl.domElement);
      controlsRef.current = controls;

      // Configuración de los controles
      controls.enableDamping = true;
      controls.dampingFactor = 0.25;
      controls.screenSpacePanning = false;
      controls.maxPolarAngle = Math.PI / 2;
      controls.target.set(0, 0, 0);

      // Aquí ya no marcamos el 'wheel' como passive
      const onWheel = (event) => {
        // Aquí podemos realizar la prevención si es necesario
        event.preventDefault(); // Evita que se haga el desplazamiento por defecto
      };

      // Añadimos el listener sin 'passive'
      controls.domElement.addEventListener('wheel', onWheel);

      // Limpieza cuando el componente se desmonte
      return () => {
        controls.dispose();
        controls.domElement.removeEventListener('wheel', onWheel);
      };
    }
  }, [camera, gl, enabled]);

  return null; // No renderizamos nada
};
