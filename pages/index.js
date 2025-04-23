// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [txHash, setTxHash] = useState('');
  const [message, setMessage] = useState('');

  const handleBridge = async () => {
    setMessage('Bridging...');
    try {
      const res = await fetch('https://megaxchange-backend.onrender.com/bridge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tx_hash: txHash }),
      });
      const data = await res.json();
      if (res.ok) setMessage(data.message || 'Success!');
      else setMessage(data.detail || 'Something went wrong');
    } catch (err) {
      setMessage('Error connecting to backend');
    }
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>MegaXchange</h1>
      <input
        type="text"
        placeholder="Enter Sepolia tx hash"
        value={txHash}
        onChange={(e) => setTxHash(e.target.value)}
        style={{ padding: 10, width: '300px', marginRight: 10 }}
      />
      <button onClick={handleBridge}>Bridge to MegaETH</button>
      <p>{message}</p>
    </main>
  );
}