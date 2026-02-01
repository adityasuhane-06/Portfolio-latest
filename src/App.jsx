import { Canvas } from '@react-three/fiber';
import Scene from './components/3d/Scene';
import Hero from './components/ui/Hero';
import About from './components/ui/About';
import TechStack from './components/ui/TechStack';
import BlockchainDeepDive from './components/ui/BlockchainDeepDive';
import BitcoinAI from './components/ui/BitcoinAI';
import Contribute from './components/ui/Contribute';
import Projects from './components/ui/Projects';
import './index.css';

function App() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: 'var(--bg-color)' }}>
      {/* 3D Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <Scene />
        </Canvas>
      </div>

      {/* UI Overlay */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <TechStack />
        <BlockchainDeepDive />
        <BitcoinAI />
        <Contribute />
        <Projects />
      </main>
    </div>
  );
}

export default App;
