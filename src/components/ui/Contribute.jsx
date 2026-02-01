import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Zap, Box, Code2, ArrowUpRight, X, Cpu, Globe, Layers } from 'lucide-react';

const organizations = {
  "bdk": {
    name: "Bitcoin Dev Kit",
    id: "bdk",
    icon: Code2,
    tagline: "The standard for modern Bitcoin wallet development.",
    description: "BDK is a library designed to be the core foundation for Bitcoin wallets. It abstracts away the complexity of UTXO management, coin selection, and descriptor parsing, allowing developers to focus on UX.",
    tech_stack: ["Rust", "Kotlin (Mobile)", "Swift (Mobile)", "Python"],
    architecture: {
      "Core Pattern": "Descriptor-based Wallets. It strictly follows Output Descriptors to define how to derive addresses and sign transactions.",
      "Key Modules": [
        "`bdk_chain`: Chain data indexing and synchronization.",
        "`bdk_wallet`: Coin selection (Branch & Bound) and transaction building."
      ]
    },
    focus_areas: [
      "Taproot Support: Implementing full TR descriptor compatibility.",
      "Hardware Integration: Standardizing HWI (Hardware Wallet Interface) communication.",
      "Compact Block Filters (BIP158): Enhancing light client privacy."
    ]
  },
  "lnd": {
    name: "Lightning Labs",
    id: "lnd",
    icon: Zap,
    tagline: "Scaling Bitcoin to billions with the Lightning Network.",
    description: "Lightning Labs maintains LND (Lightning Network Daemon), the most widely used LN implementation. They are also pioneering assets on Bitcoin via the Taproot Assets protocol.",
    tech_stack: ["Go (Golang)", "gRPC", "Protobuf", "BoltDB/Postgres"],
    architecture: {
      "Core Pattern": "Modular Subsystems (Peer, Gossiper, Switch). LND runs as a collection of concurrent services communicating via channels.",
      "Key Modules": [
        "`htlcswitch`: The central packet forwarding engine.",
        "`contractcourt`: Handles on-chain claim resolution (arbitrator)."
      ]
    },
    focus_areas: [
      "Taproot Assets: Issuing stablecoins on Bitcoin functionality.",
      "Loop & Pool: Non-custodial liquidity marketplaces.",
      "Watchtowers: Automated breach protection."
    ]
  },
  "core": {
    name: "Bitcoin Core",
    id: "core",
    icon: Box,
    tagline: "The reference implementation of the Bitcoin Protocol.",
    description: "Bitcoin Core defines the consensus rules. It is the most security-critical software in the ecosystem. Contributing here means working on the bedrock of the entire digital asset economy.",
    tech_stack: ["C++17", "Python (Functional Tests)", "Automake"],
    architecture: {
      "Core Pattern": "Monolithic Kernel with separating Interfaces. The `libbitcoinkernel` project is decoupling validation logic from P2P/Wallet.",
      "Key Modules": [
        "`validation.cpp`: ConnectBlock / CheckBlock (The Heart).",
        "`net_processing.cpp`: P2P message handling and anti-DoS."
      ]
    },
    focus_areas: [
      "Stratum V2: Encrypted mining protocols.",
      "AssumeUTXO: Faster initial block download (IBD).",
      "Erlay: Bandwidth-efficient transaction relay using set reconciliation."
    ]
  },
  "spiral": {
    name: "Spiral (LDK)",
    id: "spiral",
    icon: Github,
    tagline: "Building the Lightning Development Kit for flexibility.",
    description: "Spiral (formerly Square Crypto) builds LDK, a flexible Lightning implementation that lets you bring your own chain data, networking, and storage. It's designed for custom integrations.",
    tech_stack: ["Rust", "C bindings", "Swift", "Java", "Flutter"],
    architecture: {
      "Core Pattern": "Event-Driven State Machine. LDK does not manage IO; it emits events (e.g., 'BroadcastTx') that the host app must handle.",
      "Key Modules": [
        "`ChannelManager`: State machine for channel updates.",
        "`ChainMonitor`: Tracks blockchain state for penalty transactions."
      ]
    },
    focus_areas: [
      "Async Payments: Paying offline nodes.",
      "BOLT 12: Offers and recurring payments.",
      "VLS (Validating Lightning Signer): Separating keys from the node logic."
    ]
  }
};

const OrgModal = ({ id, onClose }) => {
  const org = organizations[id];
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  if (!org) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        background: 'rgba(5, 5, 20, 0.96)', backdropFilter: 'blur(15px)',
        zIndex: 10000, display: 'flex', justifyContent: 'center', alignItems: 'center',
        padding: '2rem'
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 40 }}
        style={{
          background: '#0a0a16', border: '1px solid var(--accent-gold)',
          borderRadius: '16px', maxWidth: '800px', width: '100%', maxHeight: '90vh',
          overflowY: 'auto', padding: '0', position: 'relative',
          boxShadow: '0 0 80px rgba(77, 77, 255, 0.15)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
           position: 'sticky', top: 0, background: '#0e0e1a', zIndex: 10,
           padding: '2rem', borderBottom: '1px solid #333',
           display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
             <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '10px' }}>
                <org.icon size={36} color="var(--accent-gold)" />
             </div>
             <div>
                <h2 style={{ fontSize: '1.8rem', margin: 0, color: '#fff' }}>{org.name}</h2>
                <p style={{ margin: 0, color: '#888', fontSize: '0.9rem' }}>{org.tagline}</p>
             </div>
           </div>
           <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
             <X size={32} />
           </button>
        </div>

        {/* Content */}
        <div style={{ padding: '2rem' }}>
          
          <div style={{ marginBottom: '2.5rem' }}>
             <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-blue)', marginBottom: '1rem' }}>
               <Globe size={20} /> Mission & Scope
             </h3>
             <p style={{ lineHeight: '1.7', color: '#ddd', fontSize: '1.05rem' }}>{org.description}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
             
             {/* Tech Stack */}
             <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid #222' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#fff', margin: '0 0 1rem 0' }}>
                   <Cpu size={18} color="var(--accent-gold)" /> Tech Stack
                </h4>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  {org.tech_stack.map(t => (
                    <span key={t} style={{ background: '#000', padding: '0.4rem 0.8rem', borderRadius: '4px', color: '#aaa', fontSize: '0.9rem', border: '1px solid #333' }}>
                      {t}
                    </span>
                  ))}
                </div>
             </div>

             {/* Architecture */}
             <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid #222' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#fff', margin: '0 0 1rem 0' }}>
                   <Layers size={18} color="var(--accent-gold)" /> Architecture
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#ccc', marginBottom: '0.8rem' }}>
                   <strong style={{ color: '#fff' }}>Pattern:</strong> {org.architecture["Core Pattern"]}
                </p>
                <div style={{ background: '#000', padding: '0.8rem', borderRadius: '6px' }}>
                   {org.architecture["Key Modules"].map((m, i) => (
                      <div key={i} style={{ fontFamily: 'monospace', color: 'var(--accent-blue)', fontSize: '0.85rem', marginBottom: '0.4rem' }}>{m}</div>
                   ))}
                </div>
             </div>
          </div>

          {/* Focus Areas */}
          <div>
            <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Target Contribution Areas</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
               {org.focus_areas.map((area, i) => (
                 <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '0.8rem', color: '#ccc', lineHeight: '1.5' }}>
                    <span style={{ color: 'var(--accent-gold)', marginTop: '4px' }}>▹</span>
                    {area}
                 </li>
               ))}
            </ul>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};

const OrgCard = ({ id, onClick }) => {
  const org = organizations[id];
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
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
        background: '#020202', // Pure blackish
        cursor: 'pointer',
        transition: 'all 0.3s ease-out'
      }}
      onClick={() => onClick(id)}
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
          <org.icon size={40} color="var(--accent-gold)" />
        </div>
        
        <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.4rem', color: '#fff' }}>{org.name}</h3>
            <p style={{ color: '#888', fontSize: '1rem', margin: 0 }}>{org.tagline}</p>
        </div>
      </div>

      {/* Middle: Tags (Desktop only/Responsive) */}
      <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', maxWidth: '30%', justifyContent: 'flex-end' }}>
        {org.tech_stack.slice(0, 3).map((tag, i) => (
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
}

export default function Contribute() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section id="contribute" style={{ padding: '10rem 0 8rem' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Future <span style={{ color: 'var(--accent-gold)' }}>Contributions</span>
          </h2>
          <p style={{ color: '#999', fontSize: '1.1rem', fontWeight: '500', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            Upon acquiring in-depth protocol knowledge and securing mentorship, I aspire to dedicate my engineering efforts to these foundational open-source repositories.
          </p>
        </motion.div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          gap: '1.5rem' 
        }}>
          <OrgCard id="bdk" onClick={setSelectedId} />
          <OrgCard id="lnd" onClick={setSelectedId} />
          <OrgCard id="core" onClick={setSelectedId} />
          <OrgCard id="spiral" onClick={setSelectedId} />
        </div>

        <AnimatePresence>
          {selectedId && <OrgModal id={selectedId} onClose={() => setSelectedId(null)} />}
        </AnimatePresence>

      </div>
    </section>
  );
}
