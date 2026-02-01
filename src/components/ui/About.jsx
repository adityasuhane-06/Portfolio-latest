import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" style={{ padding: '8rem 0' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem', 
          alignItems: 'start' 
        }}>
          
          {/* 1. Profile Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel"
            style={{ padding: '2rem', textAlign: 'center', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <div style={{ 
               width: '250px', 
               height: '250px', 
               margin: '0 auto', 
               borderRadius: '50%', 
               overflow: 'hidden', 
               border: '2px solid var(--accent-gold)',
               boxShadow: '0 0 30px rgba(247, 147, 26, 0.2)'
            }}>
              <img src="/My.png" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </motion.div>

          {/* 2. About Me Text Card */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="glass-panel"
             style={{ padding: '2.5rem', height: '100%' }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>About <span className="text-gradient">Me</span></h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#ccc', marginBottom: '1rem' }}>
              I am a developer driven by the philosophy of <strong style={{ color: '#fff' }}>Self-Sovereignty</strong> and the mathematical elegance of <strong style={{ color: '#fff' }}>Decentralized Networks</strong>.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#ccc', marginBottom: '1rem' }}>
              What started as a curiosity about Bitcoin's resilience has evolved into a deep passion for building trustless systems. I believe that <strong style={{ color: 'var(--accent-gold)' }}>Permissionless Innovation</strong> is the key to the future of the web.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#ccc' }}>
              My current focus is the convergence of <strong>Blockchain & AI</strong>—creating autonomous agents that can transact on-chain and leveraging decentralized compute.
            </p>
          </motion.div>

          {/* 3. Education & Achievements Card */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="glass-panel"
             style={{ padding: '2.5rem', height: '100%' }}
          >
             {/* Education Block */}
             <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                   <span style={{ background: 'rgba(77, 77, 255, 0.2)', padding: '0.5rem', borderRadius: '8px' }}>🎓</span> Education
                </h3>
                <div 
                  className="education-card"
                  style={{ 
                    background: 'rgba(255,255,255,0.03)', 
                    padding: '1.5rem', 
                    borderRadius: '12px', 
                    borderLeft: '4px solid var(--accent-blue)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                >
                   <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>B.Tech in CSE (Data Science)</div>
                   <div style={{ color: '#aaa', fontSize: '1rem', marginBottom: '0.8rem' }}>Gyan Ganga Institute of Technology & Sciences</div>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.8rem' }}>
                      <span style={{ color: 'var(--accent-gold)', fontWeight: '500' }}>CGPA: 7.91 / 10.0</span>
                      <span style={{ color: '#888', fontSize: '0.95rem' }}>2022 – 2026</span>
                   </div>
                </div>
             </div>

             {/* Achievements Block */}
             <div>
                <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                   <span style={{ background: 'rgba(247, 147, 26, 0.2)', padding: '0.5rem', borderRadius: '8px' }}>🏆</span> Achievements
                </h3>
                <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                   {[
                     { label: "TCS CodeVita", detail: "Ranked 986 (Top 0.5%)" },
                     { label: "Meta Hacker Cup", detail: "Global Rank 3,179" },
                     { label: "Patent", detail: "Co-authored \"Sign Sarthi\" (Govt Registered)" },
                     { label: "Leadership", detail: "AI/Web3 Lead at GDG Club" }
                   ].map((item, i) => (
                     <li key={i} style={{ 
                       padding: '0.8rem 1rem', 
                       borderRadius: '8px', 
                       background: 'rgba(255,255,255,0.02)',
                       display: 'flex', 
                       alignItems: 'center', 
                       gap: '1rem',
                       transition: 'background 0.2s',
                       fontSize: '1.05rem', color: '#ddd'
                     }}
                     onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                     onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                     >
                        <span style={{ color: 'var(--accent-gold)', fontSize: '1.2rem' }}>▹</span>
                        <span>
                          <strong style={{ color: '#fff', marginRight: '5px' }}>{item.label}:</strong> 
                          {item.detail}
                        </span>
                     </li>
                   ))}
                </ul>
             </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
