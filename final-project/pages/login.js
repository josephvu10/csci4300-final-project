import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/login.module.css';

const Login = ({ onLogin = username => console.log('Default login attempt:', username), onCreateAccount }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

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

  const handleGoToHome = () => {
    router.push('/');
  };

  return (
    <div className={styles.loginContainer}>
      <header>
        <div className={styles.header}>
          <h2>Login</h2>
          <button className={styles.homeButton} onClick={handleGoToHome}>Home</button>
        </div>
      </header>
      <div>
        {loggedInUser ? (
          <>
            <p>Welcome, {loggedInUser}!</p>
            <button className={styles.logoutBtn} onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <div>
            <label className={styles.label}>Username:</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              className={styles.inputField}
            />
            <label className={styles.label}>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className={styles.inputField}
            />
            <button className={styles.loginButton} onClick={handleLogin}>Login</button>
            <p>Don't have an account?</p>
            <button className={`${styles.loginButton} ${styles.createAccountBtn}`} onClick={onCreateAccount}>Create Account</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
