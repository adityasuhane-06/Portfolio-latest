import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero">
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: '4rem', marginBottom: '1rem' }}
        >
          Building the <span className="text-gradient">Future</span> of
          <br />
          Value & Intelligence
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ fontSize: '1.2rem', color: '#a0a0a0', maxWidth: '600px', margin: '0 auto 2rem' }}
        >
          Exploring the convergence of Blockchain, Bitcoin Decentralization and Artificial Intelligence.
        </motion.p>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1 }}
           style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}
        >
          <a href="#about" aria-label="Scroll to About Section">
             <ArrowDown color="#F7931A" size={48} className="animate-bounce" style={{ cursor: 'pointer' }} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
