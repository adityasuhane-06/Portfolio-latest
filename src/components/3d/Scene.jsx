import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import BitcoinModel from './BitcoinModel';

function NeuralNetworkParticles({ count = 100 }) {
  const points = useRef();

  return (
    <points ref={points}>
      <sphereGeometry args={[10, 32, 32]} />
      <pointsMaterial size={0.05} color="#4D4DFF" transparent opacity={0.6} />
    </points>
  );
}

export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4D4DFF" />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Moved to the right to avoid affecting text center/left */}
        <BitcoinModel position={[5, 0, -2]} />
      </Float>

       <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Placeholder for "AI" node representation */}
         <mesh position={[-5, 2, -5]}>
            <icosahedronGeometry args={[1.5, 0]} />
            <meshStandardMaterial color="#4D4DFF" wireframe />
         </mesh>
      </Float>

      {/* Background Grid for depth */}
      <gridHelper args={[50, 50, 0x111111, 0x050510]} position={[0, -5, 0]} />
      
      {/* Connecting Lines (Simulating Block-Chain) */}
      <mesh position={[0, 0, -10]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[40, 0.1, 0.1]} />
        <meshBasicMaterial color="#1a1a1a" />
      </mesh>

      <NeuralNetworkParticles />
    </>
  );
}
