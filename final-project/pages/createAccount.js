import { useRouter } from 'next/router';
import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/login.module.css';

const CreateAccount = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleCreateAccount = () => {
    if (username.trim() !== '' && password.trim() !== '' && password === confirmPassword) {
      axios.post('/api/create-account', { username, password, email })
        .then(response => {
          const userData = response.data;
          onLogin(userData.username);
        })
        .catch(error => {
          console.error('Error creating account:', error);
          alert('Error creating account. Please try again.');
        });
    } else {
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
      } else {
        alert('Please enter a username, password, and confirm password.');
      }
    }
  };

  const handleGoToHome = () => {
    // Redirect to the index page (home)
    router.push('/');
  };

  return (
    <div className={styles.loginContainer}>
      <header>
        <div className={styles.header}>
          <h2>Create Account</h2>
          <button className={styles.homeButton} onClick={handleGoToHome}>Home</button>
        </div>
      </header>
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
        <label className={styles.label}>Confirm Password:</label>
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          className={styles.inputField}
        />
        <label className={styles.label}>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className={styles.inputField}
        />
        <button className={styles.loginButton} onClick={handleCreateAccount}>Create Account</button>
      </div>
    </div>
  );
};

export default CreateAccount;
