'use client'
import React, { useState } from 'react';
import SearchBar from "../search/page";
import NavigationBar from "../navBar/page";
import './Login.css';

const Login = ({ onLogin, onCreateAccount }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim() !== '') {
      onLogin(username);
      setLoggedInUser(username);
    } else {
      alert('Please enter a username.');
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div>
      <header>
        <h1>Sound Palette</h1>
        {loggedInUser && (
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        )}
      </header>
      <main>
        {loggedInUser ? (
          <p>Welcome, {loggedInUser}!</p>
        ) : (
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
        )}
      </main>
    </div>
  );
};

export default Login;
