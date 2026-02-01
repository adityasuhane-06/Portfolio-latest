import { motion } from 'framer-motion';

export const SHA256Diagram = () => (
<svg viewBox="0 0 800 300" style={{ width: '100%', height: 'auto', background: '#050510', borderRadius: '8px' }}>
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <path d="M0,0 L0,6 L9,3 z" fill="#F7931A" />
    </marker>
  </defs>
  
  {/* Input */}
  <g transform="translate(50, 100)">
    <rect width="120" height="60" rx="4" fill="#1a1a2e" stroke="#4D4DFF" strokeWidth="2" />
    <text x="60" y="35" textAnchor="middle" fill="#fff" fontSize="14">Message (M)</text>
  </g>

  {/* Padding */}
  <path d="M170,130 L220,130" stroke="#F7931A" strokeWidth="2" markerEnd="url(#arrow)" />
  
  <g transform="translate(220, 80)">
    <rect width="140" height="100" rx="4" fill="#1a1a2e" stroke="#F7931A" strokeWidth="2" />
    <text x="70" y="30" textAnchor="middle" fill="#F7931A" fontSize="14">Padding</text>
    <text x="70" y="55" textAnchor="middle" fill="#aaa" fontSize="12">M + 1 + 00..0 + L</text>
    <text x="70" y="80" textAnchor="middle" fill="#aaa" fontSize="12">Multiple of 512 bits</text>
  </g>

  {/* Chaining */}
  <path d="M360,130 L410,130" stroke="#F7931A" strokeWidth="2" markerEnd="url(#arrow)" />

  {/* Compression */}
  <g transform="translate(410, 50)">
    <rect width="180" height="160" rx="8" fill="#111" stroke="#fff" strokeWidth="2" strokeDasharray="5,5" />
    <text x="90" y="30" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">Compression</text>
    <text x="90" y="60" textAnchor="middle" fill="#4D4DFF" fontSize="12">64 Rounds</text>
    <text x="90" y="90" textAnchor="middle" fill="#ccc" fontSize="12">Σ0, Σ1, Maj, Ch</text>
    <text x="90" y="120" textAnchor="middle" fill="#ccc" fontSize="12">Working Variables (A-H)</text>
  </g>

  {/* Output */}
  <path d="M590,130 L640,130" stroke="#F7931A" strokeWidth="2" markerEnd="url(#arrow)" />

  <g transform="translate(640, 100)">
    <rect width="120" height="60" rx="4" fill="#F7931A" stroke="#fff" strokeWidth="2" />
    <text x="60" y="25" textAnchor="middle" fill="#000" fontSize="14" fontWeight="bold">Digest</text>
    <text x="60" y="45" textAnchor="middle" fill="#000" fontSize="12">256-bit Hash</text>
  </g>
</svg>
);

export const BlockDiagram = () => (
<svg viewBox="0 0 800 350" style={{ width: '100%', height: 'auto', background: '#050510', borderRadius: '8px' }}>
  <defs>
    <marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <path d="M0,0 L0,6 L9,3 z" fill="#4D4DFF" />
    </marker>
    <marker id="arrowGold" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <path d="M0,0 L0,6 L9,3 z" fill="#F7931A" />
    </marker>
  </defs>

  {/* Block N-1 (Ghost) */}
  <g transform="translate(50, 50)" opacity="0.5">
      <rect width="180" height="100" fill="#111" stroke="#444" strokeWidth="2" strokeDasharray="5,5" />
      <text x="90" y="55" textAnchor="middle" fill="#666" fontSize="14">Block #100</text>
      <text x="90" y="75" textAnchor="middle" fill="#444" fontSize="10">PrevHash: 00...a1</text>
  </g>

  {/* Connection Arrow */}
  <path d="M230,100 L280,100" stroke="#F7931A" strokeWidth="3" markerEnd="url(#arrowGold)" />

  {/* Block N (Main) */}
  <g transform="translate(280, 20)">
    {/* Header */}
    <rect width="240" height="160" fill="#1a1a2e" stroke="#F7931A" strokeWidth="3" />
    <text x="120" y="25" textAnchor="middle" fill="#F7931A" fontSize="16" fontWeight="bold">Block #101 Header</text>
    
    <text x="20" y="55" fill="#fff" fontSize="12">Version</text>
    <text x="20" y="75" fill="#F7931A" fontWeight="bold" fontSize="12">PrevHash (Link)</text>
    <text x="20" y="95" fill="#fff" fontSize="12">MerkleRoot</text>
    <text x="20" y="115" fill="#fff" fontSize="12">Time</text>
    <text x="20" y="135" fill="#fff" fontSize="12">Bits (Difficulty)</text>
    <text x="20" y="155" fill="#4D4DFF" fontSize="12">Nonce</text>
  </g>

  {/* Transactions (Body) */}
  <g transform="translate(280, 200)">
    <rect width="240" height="120" fill="#111" stroke="#4D4DFF" strokeWidth="2" />
    <text x="120" y="25" textAnchor="middle" fill="#4D4DFF" fontSize="14" fontWeight="bold">Transactions</text>
    
    <rect x="20" y="40" width="200" height="20" fill="#222" rx="2" />
    <text x="120" y="55" textAnchor="middle" fill="#aaa" fontSize="10">Coinbase (Reward)</text>

    <rect x="20" y="70" width="200" height="20" fill="#222" rx="2" />
    <text x="120" y="85" textAnchor="middle" fill="#aaa" fontSize="10">Tx: Alice → Bob</text>

    <rect x="20" y="100" width="200" height="20" fill="#222" rx="2" />
    <text x="120" y="115" textAnchor="middle" fill="#aaa" fontSize="10">...</text>
  </g>

    {/* Merkle Link Arrow */}
   <path d="M400,200 L400,180" stroke="#fff" strokeWidth="1" strokeDasharray="4,4" markerEnd="url(#arrow2)" />


  {/* Block N+1 (Ghost) */}
  <path d="M520,100 L570,100" stroke="#F7931A" strokeWidth="3" markerEnd="url(#arrowGold)" />
  <g transform="translate(570, 50)" opacity="0.5">
      <rect width="180" height="100" fill="#111" stroke="#444" strokeWidth="2" strokeDasharray="5,5" />
      <text x="90" y="55" textAnchor="middle" fill="#666" fontSize="14">Block #102</text>
       <text x="90" y="75" textAnchor="middle" fill="#444" fontSize="10">PrevHash: 00...b2</text>
  </g>

</svg>
);

export const UTXODiagram = () => (
    <svg viewBox="0 0 800 300" style={{ width: '100%', height: 'auto', background: '#050510', borderRadius: '8px' }}>
      <defs>
        <marker id="arrow3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#fff" />
        </marker>
      </defs>
    
    {/* Tx 1 */}
    <g transform="translate(50, 100)">
        <rect width="150" height="100" rx="8" fill="#222" stroke="#444" strokeWidth="2" />
        <text x="75" y="30" textAnchor="middle" fill="#fff" fontWeight="bold">Tx A</text>
        <rect x="10" y="50" width="130" height="30" fill="#4D4DFF" rx="4"/>
         <text x="75" y="70" textAnchor="middle" fill="#fff" fontSize="12">Output 0 (10 BTC)</text>
    </g>

    <path d="M200,150 L300,150" stroke="#fff" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow3)" />

    {/* Tx 2 */}
    <g transform="translate(300, 80)">
        <rect width="200" height="140" rx="8" fill="#1a1a2e" stroke="#F7931A" strokeWidth="3" />
        <text x="100" y="30" textAnchor="middle" fill="#F7931A" fontWeight="bold">Tx B</text>
        
        {/* Input */}
        <text x="100" y="55" textAnchor="middle" fill="#aaa" fontSize="12">Input: Ref TxA:0</text>
        
        {/* Outputs */}
        <rect x="20" y="70" width="160" height="25" fill="#222" rx="4"/>
         <text x="100" y="87" textAnchor="middle" fill="#fff" fontSize="12">Output 0 (6 BTC) → Bob</text>

        <rect x="20" y="105" width="160" height="25" fill="#222" rx="4"/>
         <text x="100" y="122" textAnchor="middle" fill="#fff" fontSize="12">Output 1 (3.9 BTC) → Change</text>
    </g>
</svg>
);
