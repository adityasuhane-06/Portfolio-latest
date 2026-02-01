import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

export default function BitcoinModel({ position = [0, 0, 0] }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <group position={position} ref={meshRef}>
      {/* Coin Edge (cylinder) */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2, 2, 0.2, 64]} />
        <meshStandardMaterial color="#F7931A" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Face Detail (Circles) */}
      <mesh position={[0, 0, 0.11]} rotation={[0, 0, 0]}>
         <cylinderGeometry args={[1.9, 1.9, 0.05, 64]} />
         <meshStandardMaterial color="#E08214" metalness={0.6} roughness={0.3} />
      </mesh>
       <mesh position={[0, 0, -0.11]} rotation={[0, 0, 0]}>
         <cylinderGeometry args={[1.9, 1.9, 0.05, 64]} />
         <meshStandardMaterial color="#E08214" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Symbol (Text) */}
      <Text
        position={[0, 0, 0.15]}
        fontSize={2.5}
        color="#ffffff"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
        anchorX="center"
        anchorY="middle"
      >
        ₿
      </Text>
       <Text
        position={[0, 0, -0.15]}
        rotation={[0, Math.PI, 0]}
        fontSize={2.5}
        color="#ffffff"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
        anchorX="center"
        anchorY="middle"
      >
        ₿
      </Text>
    </group>
  );
}
