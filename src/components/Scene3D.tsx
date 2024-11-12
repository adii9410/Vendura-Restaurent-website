import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

function Plate() {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[2, 2, 0.1, 32]} />
      <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.1} />
    </mesh>
  );
}

function Food() {
  return (
    <mesh position={[0, 0.5, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#ff9f43" metalness={0.3} roughness={0.7} />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="h-screen w-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[5, 5, 5]} />
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <Plate />
          <Food />
        </Suspense>
      </Canvas>
    </div>
  );
}