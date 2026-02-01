import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hash, GitCommit, Box, Cpu, X, ArrowRight } from 'lucide-react';
import { SHA256Diagram, BlockDiagram, UTXODiagram } from './TechnicalDiagrams';

// --- Data Content ---
const articles = {
  "sha256": {
    title: "SHA-256 & Mining",
    icon: Hash,
    what: "SHA-256 (Secure Hash Algorithm 256-bit) is a member of the SHA-2 cryptographic family, designed by the NSA. It creates a deterministic, fixed-size 256-bit (32-byte) output from any size input. The 'Avalanche Effect' ensures that changing a single bit of input changes roughly 50% of the output bits, making it impossible to predict inputs.",
    how: "In Bitcoin, Double-SHA256 (Hash(Hash(x))) is used for the Proof-of-Work system. Miners must find a 'Nonce' such that the hash of the block header is numerically lower than the current network 'Target'. This provides a probabilistic proof that energy was expended.",
    stack_example: "In my Lightning Network projects, I use Libbitcoin's `hash_256` function to generate HTLC preimages for atomic swaps.",
    Diagram: SHA256Diagram,
    usecases: [
      "Proof of Work: Converting electricity into ledger security via thermodynamic difficulty.",
      "Integrity: Validating transaction data via checksums.",
      "Merkle Trees: Compressing millions of transactions into a single 32-byte root hash for lightweight verification (SPV)."
    ]
  },
  "block": {
    title: "Block Structure",
    icon: Box,
    what: "A Block is a container data structure that links to a previous block, forming the chain. It segregates the 'Header' (metadata for mining) from the contents (transactions). The introduction of SegWit (BIP141) further split the structure to separate witness (signature) data from the base transaction data.",
    how: "Miners construct optimal blocks by selecting high-fee transactions from the Mempool. They prioritize maximizing revenue while staying within the 4,000,000 Weight Unit limit. The header is the only part hashed during mining.",
    stack_example: "Using LDK's `BlockNotifier`, I implemented a custom chain listener that filters block headers for specific channel close transactions.",
    Diagram: BlockDiagram,
    usecases: [
      "Time-Stamping: The blockchain acts as a decentralized clock server.",
      "Immutability: A change in any historical transaction invalidates that block's Merkle Root, invalidating the header hash, breaking the entire chain forward.",
      "Settlement: 6 confirmations (approx 1 hour) is considered probabilistically impossible to reverse."
    ]
  },
  "consensus": {
    title: "Consensus Rules",
    icon: GitCommit,
    what: "Nakamoto Consensus is a probabilistic consensus mechanism. It solves the Byzantine Generals Problem in an open network by combining Proof-of-Work (Sybil Resistance) with the Longest Chain Rule (Fork Choice Rule).",
    how: "Every node independently validates every block against protocol rules. Examples: No inflation beyond 50 BTC halving schedule, no double spends, correct script execution. If a block violates one rule, it is rejected instantly, protecting the network from malicious miners.",
    stack_example: "I use Hardhat to fork the mainnet state and simulate 'Deep Reorgs' to test how my frontend handles transaction reversals.",
    Explanation: (
      <div style={{ background: '#111', padding: '1.5rem', borderRadius: '8px', border: '1px dashed #333' }}>
        <p style={{color: '#fff', marginBottom: '0.5rem'}}><strong>Fork Choice Rule:</strong></p>
        <p style={{color: '#aaa', fontSize: '0.9rem'}}>Nodes always follow the chain with the most cumulative <em>Work</em> (Difficulty), not just the longest length (Height). This prevents an attacker from creating a long chain of low-difficulty blocks.</p>
      </div>
    ),
    usecases: [
      "Decentralization: No central server dictates the truth; the math dictates the truth.",
      "Censorship Resistance: Miners are free to include any valid transaction.",
      "Sybil Resistance: One-CPU-One-Vote (originally), preventing cheap ID spam attacks."
    ]
  },
  "utxo": {
    title: "UTXO Model",
    icon: Cpu,
    what: "Bitcoin uses the Unspent Transaction Output (UTXO) model. There are no 'accounts' or 'balances' in the protocol layer. There is only a global directed acyclic graph (DAG) of transaction outputs that have not yet been spent.",
    how: "A transaction unlocks input UTXOs using digital signatures (ScriptSig) and locks them into new output UTXOs (ScriptPubKey). The difference between Input Sum and Output Sum becomes the Miner Fee. Full nodes maintain the 'UTXO Set' in RAM/LevelDB for fast verification.",
    stack_example: "When opening a Lightning Channel, I leverage LDK's `CoinSelection` interface to automatically pick the optimal UTXO set to minimize fees.",
    Diagram: UTXODiagram,
    usecases: [
      "Parallelism: Multiple UTXOs can be spent independently, unlike precise nonces in Ethereum.",
      "Privacy: CoinJoin and mixing are possible because inputs/outputs are not tied to a static identity.",
      "Statelessness: A node only needs the current UTXO set to validate a block, not the entire history."
    ]
  }
};

const ArticleModal = ({ id, onClose }) => {
  const content = articles[id];
  
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!content) return null;
  const Diagram = content.Diagram;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        background: 'rgba(5, 5, 16, 0.95)', backdropFilter: 'blur(20px)',
        zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center',
        padding: '2rem'
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        style={{
          background: '#0a0a16', border: '1px solid var(--accent-gold)',
          borderRadius: '16px', maxWidth: '1000px', width: '100%', maxHeight: '90vh',
          overflowY: 'auto', padding: '0', position: 'relative',
          boxShadow: '0 0 100px rgba(247, 147, 26, 0.2)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close Button */}
        <div style={{
          position: 'sticky', top: 0, left: 0, right: 0,
          background: 'rgba(10, 10, 22, 0.95)', borderBottom: '1px solid #333',
          padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          backdropFilter: 'blur(10px)', zIndex: 10
        }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <content.icon size={32} color="var(--accent-gold)" />
              <h2 style={{ fontSize: '1.5rem', margin: 0, color: '#fff' }}>{content.title}</h2>
           </div>
           
           <button 
            onClick={onClose}
            style={{ 
              background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', 
              width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', cursor: 'pointer', transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,0,0,0.5)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div style={{ padding: '3rem' }}>
          
           {/* Row 1: Text Content */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '3rem', alignItems: 'start' }}>
              <div>
                <h3 style={{ color: 'var(--accent-blue)', marginBottom: '0.8rem', fontSize: '1.2rem' }}>Technical Definition</h3>
                <p style={{ lineHeight: '1.7', color: '#e0e0e0', fontSize: '1.05rem' }}>{content.what}</p>
                
                {/* Stack Usage Block */}
                 <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(247, 147, 26, 0.05)', borderLeft: '4px solid var(--accent-gold)', borderRadius: '0 8px 8px 0' }}>
                   <h4 style={{ color: 'var(--accent-gold)', margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>⚡</span> Project Implementation
                   </h4>
                   <p style={{ margin: 0, color: '#fff', fontSize: '0.95rem', fontStyle: 'italic' }}>
                     "{content.stack_example}"
                   </p>
                 </div>
              </div>
              <div>
                <h3 style={{ color: 'var(--accent-blue)', marginBottom: '0.8rem', fontSize: '1.2rem' }}>Bitcoin Implementation</h3>
                <p style={{ lineHeight: '1.7', color: '#e0e0e0', fontSize: '1.05rem' }}>{content.how}</p>
              </div>
          </div>

          {/* Row 2: Diagram (Full Width) */}
          <div style={{ marginBottom: '3rem' }}>
             <h3 style={{ color: '#fff', marginBottom: '1.5rem', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1.1rem' }}>Architecture Diagram</h3>
             <div style={{ background: '#020205', padding: '2rem', borderRadius: '12px', border: '1px solid #222', display: 'flex', justifyContent: 'center', minHeight: '300px' }}>
               {Diagram ? <div style={{width: '100%', maxWidth: '100%'}}><Diagram /></div> : content.Explanation}
            </div>
          </div>

          {/* Row 3: Use Cases */}
          <div>
            <h3 style={{ color: 'var(--accent-blue)', marginBottom: '1rem', fontSize: '1.2rem' }}>Engineering Use Cases</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            {content.usecases.map((uc, i) => (
               <div key={i} style={{ display: 'flex', gap: '1rem', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '8px', alignItems: 'center' }}>
                 <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold', fontSize: '1.2rem' }}>0{i+1}.</span>
                 <span style={{ color: '#ddd' }}>{uc}</span>
               </div>
            ))}
            </div>
          </div>

        </div>

      </motion.div>
    </motion.div>
  );
};

const DetailCard = ({ id, icon: Icon, title, points, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05, borderColor: 'var(--accent-gold)' }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-panel"
    style={{ padding: '2rem', cursor: 'pointer', transition: 'border-color 0.3s' }}
    onClick={() => onClick(id)}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Icon size={32} color="var(--accent-gold)" />
        <h3 style={{ fontSize: '1.4rem' }}>{title}</h3>
      </div>
      <ArrowRight size={20} color="#666" />
    </div>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#ccc', lineHeight: '1.7' }}>
      {points.map((point, index) => (
        <li key={index} style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.5rem' }}>
          <span style={{ color: 'var(--accent-blue)' }}>▹</span>
          {point}
        </li>
      ))}
    </ul>
    <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--accent-gold)', textAlign: 'right', fontWeight: 'bold' }}>
      Read Article &rarr;
    </p>
  </motion.div>
);

export default function BlockchainDeepDive() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section id="deep-dive" style={{ padding: '10rem 0 4rem' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>
          Technical <span className="text-gradient">Articles</span>
        </h2>
        <p style={{ textAlign: 'center', color: '#888', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
          Click on any card to explore the architecture and engineering details.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem' 
        }}>
          <DetailCard 
            id="sha256"
            icon={Hash}
            title="SHA-256 & Mining"
            points={[
              "Double SHA-256 hashing for block headers.",
              "Difficulty adjustment (2016 blocks).",
            ]}
            onClick={setSelectedId}
          />
          <DetailCard 
            id="block"
            icon={Box}
            title="Block Structure"
            points={[
              "Header fields: Version, MerkleRoot, Nonce.",
              "SegWit Witness Data separation.",
            ]}
            onClick={setSelectedId}
          />
          <DetailCard 
            id="consensus"
            icon={GitCommit}
            title="Consensus Rules"
            points={[
              "Nakamoto Consensus (Longest Chain).",
              "Sybil Resistance via Proof of Work.",
            ]}
            onClick={setSelectedId}
          />
          <DetailCard 
            id="utxo"
            icon={Cpu}
            title="UTXO Model"
            points={[
              "Unspent Transaction Output management.",
              "Input/Output linkage (TxID + vout).",
            ]}
            onClick={setSelectedId}
          />
        </div>

        <AnimatePresence>
          {selectedId && <ArticleModal id={selectedId} onClose={() => setSelectedId(null)} />}
        </AnimatePresence>

      </div>
    </section>
  );
}
