    // pages/index.js
    import { useState } from 'react';

    export default function Home() {
      const [txHash, setTxHash] = useState('');
      const [status, setStatus] = useState('');

      const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Checking...');
        try {
          const res = await fetch('https://megaxchange-backend.onrender.com/bridge', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tx_hash: txHash }),
          });
          const data = await res.json();
          setStatus(data.message || 'Bridge simulated successfully!');
        } catch (err) {
          setStatus('Something went wrong! Please try again.');
        }
      };

      return (
        <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
          <h1>MegaXchange 🔁</h1>
          <p>Bridge your Sepolia ETH to MegaETH (testnet mock)</p>
          <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
            <input
              type="text"
              placeholder="Enter Sepolia Tx Hash"
              value={txHash}
              onChange={(e) => setTxHash(e.target.value)}
              style={{ padding: '0.5rem', width: '300px' }}
            />
            <button type="submit" style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
              Submit
            </button>
          </form>
          {status && <p style={{ marginTop: '1rem', color: '#555' }}>{status}</p>}
        </main>
      );
    }