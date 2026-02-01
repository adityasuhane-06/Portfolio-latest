import { motion } from 'framer-motion';
import { Brain, Network } from 'lucide-react';

export default function BitcoinAI() {
  return (
    <section id="bitcoin-ai" style={{ padding: '8rem 0' }}>
      <div className="container">
        <div className="glass-panel" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
          
          <div style={{ 
            position: 'absolute', 
            top: '-20%', 
            right: '-10%', 
            width: '300px', 
            height: '300px', 
            background: 'radial-gradient(circle, rgba(77,77,255,0.2) 0%, rgba(0,0,0,0) 70%)',
            borderRadius: '50%'
          }} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
               <Brain size={48} color="#4D4DFF" />
               <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>+</span>
               <Network size={48} color="#F7931A" />
            </div>

            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>
              The <span style={{ color: '#4D4DFF' }}>AI</span> & <span style={{ color: '#F7931A' }}>Bitcoin</span> Convergence
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <h3 style={{ marginBottom: '1rem', color: '#fff' }}>Verified Intelligence</h3>
                <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                  Using Bitcoin's immutable ledger to cryptographically sign and verify AI models, creating an audit trail for dataset integrity and model weights.
                </p>
              </div>
              <div>
                <h3 style={{ marginBottom: '1rem', color: '#fff' }}>Decentralized Compute</h3>
                <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                  Incentivizing distributed machine learning training tasks via Lightning Network micro-payments, democratizing access to high-performance computing.
                </p>
              </div>
            </div>
            
             <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <a href="#projects" style={{ textDecoration: 'none' }}>
                  <button style={{
                    padding: '1rem 2rem',
                    fontSize: '1.1rem',
                    background: 'linear-gradient(90deg, #F7931A 0%, #4D4DFF 100%)',
                    border: 'none',
                    borderRadius: '30px',
                    color: 'white',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(77, 77, 255, 0.4)',
                    transition: 'transform 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    Explore My Work
                  </button>
                </a>
             </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
