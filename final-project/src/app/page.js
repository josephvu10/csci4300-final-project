'use client'
import React, { useState } from 'react';
import Login from './components/Login';
import './globals.css'
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
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
          <Login onLogin={handleLogin} onCreateAccount={() => console.log('Redirect to sign up')} />
        )}
      </main>
    </div>
  );
};

export default App;