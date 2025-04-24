import { useEffect, useState } from 'react';

export default function StatusCard() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://megaxchange-backend.onrender.com/api/status')
      .then(res => res.json())
      .then(data => {
        setStatus(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch status:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading bridge status...</p>;
  if (!status) return <p>Could not load bridge status.</p>;

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1.5rem',
      borderRadius: '10px',
      maxWidth: '500px',
      margin: '2rem auto',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      background: '#fdfdfd'
    }}>
      <h2 style={{ color: '#333', marginBottom: '1rem' }}>🔗 Bridge Status</h2>

      <p><strong>🌐 Network:</strong> {status.network}</p>
      <p><strong>📊 Status:</strong> {status.status}</p>
      <p><strong>⏱️ Last Updated:</strong> {status.updated_at}</p>

      {status.tx_count !== undefined && (
        <p><strong>📈 Transactions Processed:</strong> {status.tx_count}</p>
      )}

      {status.latest_tx && (
        <p>
          <strong>🔁 Latest Tx:</strong>{' '}
          <a href={`https://sepolia.etherscan.io/tx/${status.latest_tx}`} target="_blank" rel="noopener noreferrer">
            {status.latest_tx.slice(0, 10)}... 🔍
          </a>
        </p>
      )}
    </div>
  );
}