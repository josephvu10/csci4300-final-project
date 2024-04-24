'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/login.module.css';
import { useRouter } from 'next/router';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { username, password });
      const { data } = response;
      onLogin(data.username); // Pass the username to the parent component or update global state
      router.push('/authenticated'); // Redirect to authenticated page
    } catch (error) {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <header>
          <div className={styles.header}>
            <h2>Login</h2>
            <button className={styles.homeButton} onClick={() => router.push('/')}>Home</button>
          </div>
        </header>
        <div className={styles.loginContent}>
          <div className={styles.loginForm}>
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
            <p>Don't have an account? <Link href="/createAccount" passHref><div className={styles.createAccountLink}>Create Account</div></Link></p>
            {error && <p className={styles.errorMsg}>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
