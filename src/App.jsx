import { useEffect } from 'react';
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
  // Handle URL path-based navigation to sections
  useEffect(() => {
    const path = window.location.pathname.toLowerCase().replace(/^\//, '').replace(/-/g, ' ');
    
    const sectionMap = {
      'technical articles': 'technical-articles',
      'about': 'about',
      'tech stack': 'tech-stack',
      'bitcoin ai': 'bitcoin-ai',
      'contribute': 'contribute',
      'projects': 'projects',
    };
    
    const sectionId = sectionMap[path];
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); // Delay to ensure components are mounted
    }
  }, []);

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
        <section id="about"><About /></section>
        <section id="tech-stack"><TechStack /></section>
        <section id="technical-articles"><BlockchainDeepDive /></section>
        <section id="bitcoin-ai"><BitcoinAI /></section>
        <section id="contribute"><Contribute /></section>
        <section id="projects"><Projects /></section>
      </main>
    </div>
  );
}

export default App;
