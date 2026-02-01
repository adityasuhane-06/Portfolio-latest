import { motion } from 'framer-motion';
import { Database, Cpu, Lock, Layers } from 'lucide-react';

const TechCard = ({ icon: Icon, title, items, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="glass-panel"
    style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}
  >
    <div style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>
      <Icon size={40} />
    </div>
    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{title}</h3>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
      {items.map((item, idx) => (
        <li key={idx} style={{ color: '#ccc', lineHeight: '1.4', fontSize: '0.95rem' }}>
          <span style={{ color: 'var(--accent-gold)', marginRight: '0.5rem', fontWeight: 'bold' }}>▹</span>
          <strong style={{ color: '#fff', display: 'inline-block', marginBottom: '0.2rem' }}>{item.label.replace('✅ ', '')}</strong>
          <div style={{ display: 'block' }}>{item.desc}</div>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function TechStack() {
  return (
    <section id="tech" style={{ padding: '8rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>
          My <span className="text-gradient">Tech Stack</span>
        </h2>
        <p style={{ textAlign: 'center', color: '#888', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
          A specialized toolkit for building decentralized intelligence.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          <TechCard 
            icon={Cpu} 
            title="Protocol & Smart Contracts" 
            delay={0.1}
            items={[
              { label: "Bitcoin & Lightning", desc: <span>Using <strong style={{color: '#fff'}}>LDK</strong> and <strong style={{color: '#fff'}}>Libbitcoin</strong> to build non-custodial Lightning apps and custom scripts.</span> },
              { label: "EVM Smart Contracts", desc: <span><strong style={{color: '#fff'}}>Foundry</strong> & <strong style={{color: '#fff'}}>Hardhat</strong> are my daily drivers for writing secure, gas-optimized Solidity.</span> },
              { label: "Production Debugging", desc: <span><strong style={{color: '#fff'}}>Tenderly</strong> allows me to simulate transactions and trace call stacks in real-time.</span> },
              { label: "Rapid Prototyping", desc: <span><strong style={{color: '#fff'}}>Scaffold-ETH 2</strong> is my go-to for spinning up full-stack hackathon MVPs in hours.</span> }
            ]}
          />
          <TechCard 
            icon={Layers} 
            title="Modern dApp Frontend" 
            delay={0.2}
            items={[
               { label: "Blockchain Interaction", desc: <span><strong style={{color: '#fff'}}>Wagmi + Viem</strong> provide type-safe Ethereum hooks, preventing ABI errors at compile time.</span> },
               { label: "Wallet Management", desc: <span><strong style={{color: '#fff'}}>RainbowKit</strong> offers a polished, zero-config Connect Wallet experience for users.</span> },
               { label: "UI Architecture", desc: <span><strong style={{color: '#fff'}}>React</strong> driven interfaces, using <strong style={{color: '#fff'}}>Tailwind</strong> for rapid aesthetic changes.</span> }
            ]}
          />
          <TechCard 
            icon={Lock} 
            title="Machine Learning Engineering" 
            delay={0.3}
            items={[
               { label: "Core Frameworks", desc: <span><strong style={{color: '#fff'}}>PyTorch</strong> & <strong style={{color: '#fff'}}>TensorFlow</strong> for designing custom neural network architectures.</span> },
               { label: "NLP & Transformers", desc: <span><strong style={{color: '#fff'}}>Hugging Face</strong> library to implement sentiment analysis on crypto-twitter data streams.</span> },
               { label: "Data Pipelines", desc: <span><strong style={{color: '#fff'}}>Pandas</strong> & <strong style={{color: '#fff'}}>NumPy</strong> for cleaning on-chain data (UTXO sets, block headers) before training.</span> }
            ]}
          />
          <TechCard 
            icon={Database} 
            title="The Synergy (AI + Blockchain)" 
            delay={0.4}
            items={[
               { label: "Autonomous Agents", desc: <span>Using <strong style={{color: '#fff'}}>LangChain</strong> to build agents that can plan and execute on-chain swaps via <strong style={{color: '#fff'}}>Viem</strong>.</span> },
               { label: "Predictive DeFi", desc: <span>Training LSTM models on <strong style={{color: '#fff'}}>Historical Gas Prices</strong> to automate transaction timing.</span> },
               { label: "Zero-Knowledge ML", desc: <span>Implementing <strong style={{color: '#fff'}}>ZK-SNARKs</strong> to prove a model ran correctly without revealing the proprietary weights.</span> }
            ]}
          />
        </div>
      </div>
    </section>
  );
}
