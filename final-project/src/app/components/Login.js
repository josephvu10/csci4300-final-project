'use client'
import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin, onCreateAccount }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(username);
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
      <div>
        <p>Don't have an account?</p>
        <button onClick={onCreateAccount}>Create Account</button>
      </div>
    </div>
  );
};

export default Login;

