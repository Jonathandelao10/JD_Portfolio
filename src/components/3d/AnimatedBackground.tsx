import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  
  const particles = useMemo(() => {
    const temp = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const t = Math.random() * Math.PI * 2;
      const u = Math.random() * Math.PI;
      const r = Math.random() * 30 + 10;
      
      temp[i * 3] = r * Math.sin(u) * Math.cos(t);
      temp[i * 3 + 1] = r * Math.sin(u) * Math.sin(t);
      temp[i * 3 + 2] = r * Math.cos(u);
    }
    return temp;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.1;
    if (ref.current) {
      ref.current.rotation.x = t;
      ref.current.rotation.y = t * 0.5;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function WaveGrid() {
  const ref = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      const position = ref.current.geometry.attributes.position;
      const array = position.array as Float32Array;
      
      for (let i = 0; i < array.length; i += 3) {
        const x = array[i];
        const z = array[i + 2];
        array[i + 1] = Math.sin(x * 0.5 + t) * Math.cos(z * 0.5 + t) * 0.5;
      }
      
      position.needsUpdate = true;
    }
  });

  return (
    <mesh ref={ref} position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[50, 50, 50, 50]} />
      <meshBasicMaterial
        color="#3b82f6"
        wireframe
        transparent
        opacity={0.1}
      />
    </mesh>
  );
}

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ParticleField />
        <WaveGrid />
      </Canvas>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
    </div>
  );
};

export default AnimatedBackground;