import React, { useState, useEffect } from 'react';

const Effect = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{
      fontFamily: 'Segoe UI, sans-serif',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <div style={{
        textAlign: 'center',
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
        marginBottom: '30px'
      }}>
        <h1 style={{ fontSize: '3rem', color: '#2c3e50' }}>{count}</h1>
        <button onClick={handleIncrement} style={buttonStyle}>Increment</button>
        <button onClick={handleDecrement} style={buttonStyle}>Decrement</button>
        <button onClick={handleReset} style={buttonStyle}>Reset</button>
      </div>

      <div style={{
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.05)'
      }}>
        <h2 style={{ color: '#34495e' }}>User Data</h2>
        <ol style={{ lineHeight: '1.8' }}>
          {user.map((data) => (
            <li key={data.id} style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
              <strong>ID:</strong> {data.id} <br />
              <strong>Name:</strong> {data.name} <br />
              <strong>Email:</strong> {data.email} <br />
              <strong>City:</strong> {data.address.city} <br />
              <strong>Latitude:</strong> {data.address.geo.lat} <br />
              <strong>Longitude:</strong> {data.address.geo.lng}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '1rem',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#3498db',
  color: '#fff',
  cursor: 'pointer',
  transition: 'background 0.3s ease'
};

export default Effect;
