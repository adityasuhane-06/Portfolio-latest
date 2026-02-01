import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Code, Database, Eye, MessageSquare } from 'lucide-react';

const projects = [
  {
    id: "social-dapp",
    name: "Social Media DApp",
    desc: "A decentralized platform for censorship-resistant content sharing using Ethereum smart contracts.",
    tags: ["Solidity", "Hardhat", "React", "Web3"],
    link: "https://github.com/adityasuhane-06/Social-Media-dapp",
    icon: Github
  },
  {
    id: "samarth",
    name: "Project Samarth",
    desc: "Intelligent Agricultural Data Q&A System powered by AI to assist farmers with real-time insights.",
    tags: ["AI/LLM", "RAG", "Python", "React"],
    link: "https://project-samarth-beta.vercel.app/",
    icon: Database
  },
  {
    id: "vibepage",
    name: "VibePage",
    desc: "High-performance full-stack blogging platform optimized for low latency (<200ms p95) and concurrency.",
    tags: ["MERN Stack", "Redis", "JWT", "Systems"],
    link: "https://github.com/adityasuhane-06/VibePage",
    icon: Code
  },
  {
    id: "behavior",
    name: "Behavior Scope",
    desc: "Multimodal analysis system for clinical assessment tracking eye contact, stuttering, and behavioral regulation.",
    tags: ["Python", "Computer Vision", "ML", "Audio"],
    link: "https://github.com/adityasuhane-06/Behavior-Scope",
    icon: Eye
  }
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ x: 10, borderColor: 'var(--accent-gold)', backgroundColor: 'rgba(247, 147, 26, 0.03)' }}
    className="glass-panel"
    style={{ 
      padding: '2.5rem', 
      display: 'flex', 
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '2rem',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      background: '#020202',
      cursor: 'pointer',
      transition: 'all 0.3s ease-out'
    }}
    onClick={() => window.open(project.link, '_blank')}
  >
    {/* Left: Icon & Info */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flex: 1 }}>
      <div style={{ 
          background: 'rgba(247, 147, 26, 0.1)', 
          padding: '1.2rem', 
          borderRadius: '12px',
          border: '1px solid rgba(247, 147, 26, 0.2)',
          display: 'flex', justifyContent: 'center', alignItems: 'center'
      }}>
        <project.icon size={40} color="var(--accent-gold)" />
      </div>
      
      <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '0.4rem', color: '#fff' }}>{project.name}</h3>
          <p style={{ color: '#888', fontSize: '1rem', margin: 0 }}>{project.desc}</p>
      </div>
    </div>

    {/* Middle: Tags (Desktop only/Responsive) */}
    <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', maxWidth: '30%', justifyContent: 'flex-end' }}>
      {project.tags.map((tag, i) => (
        <span key={i} style={{ 
          fontSize: '0.8rem', 
          background: 'transparent', 
          padding: '0.5rem 1rem', 
          borderRadius: '100px',
          color: '#ccc',
          border: '1px solid #333',
          fontFamily: 'monospace'
        }}>
          {tag}
        </span>
      ))}
    </div>

    {/* Right: Arrow */}
    <div style={{ 
        background: '#fff', 
        borderRadius: '50%', 
        width: '3.5rem', height: '3.5rem', 
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0
    }}>
        <ArrowUpRight size={24} color="#000" />
    </div>

  </motion.div>
);

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '10rem 0 8rem' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Featured <span style={{ color: 'var(--accent-gold)' }}>Projects</span>
          </h2>
          <p style={{ color: '#666', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Engineering solutions across Decentralized Systems, AI, and Full-Stack Architecture.
          </p>
        </motion.div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          gap: '1.5rem' 
        }}>
          {projects.map((p, index) => (
            <ProjectCard key={p.id} project={p} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
