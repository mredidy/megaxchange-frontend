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
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <h3>Bridge Status</h3>
      <p><strong>Network:</strong> {status.network}</p>
      <p><strong>Status:</strong> {status.status}</p>
      <p><strong>Last Updated:</strong> {status.updated_at}</p>
    </div>
  );
}
