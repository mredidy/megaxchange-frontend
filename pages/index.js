import { useState } from "react";

export default function Home() {
  const [address, setAddress] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://megaxchange-backend.onrender.com/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address }),
    });
    const data = await res.json();
    setResult(JSON.stringify(data, null, 2));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>MegaXchange Test</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter ETH address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ padding: "0.5rem", marginRight: "0.5rem" }}
        />
        <button type="submit">Check</button>
      </form>
      {result && (
        <pre style={{ marginTop: "1rem", background: "#eee", padding: "1rem" }}>
          {result}
        </pre>
      )}
    </div>
  );
}