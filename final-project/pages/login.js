'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import LinkedLogo from "../comps/LinkedLogo";
import axios from 'axios'; // Import Axios

const Login = ({ onLogin = username => console.log('Default login attempt:', username), onCreateAccount }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [error, setError] = useState(null); // State to store error message

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { username, password });
      const { data } = response;
      onLogin(data.username); // Pass the username to the parent component or update global state
      // router.push('/authenticated'); // Redirect to authenticated page
      setLoggedInUser(data.username); // Update loggedInUser state instead of redirecting
    } catch (error) {
      setError('Invalid username or password.');
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    const handleGoToHome = () => {
      // Redirect to the index page (home)
      router.push('/');
    };
  return (
    <>
      <LinkedLogo />

      <div className={styles.loginContainer}>
        {loggedInUser ? (
          <div className={styles.card}>
            <p>Welcome, {loggedInUser}!</p>
            <button className={styles.logoutBtn} onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className={styles.card}>
            <h2> Log in to SoundPalette </h2>
            <hr className={styles.divisionLine} />
            {error && <p className={styles.error}>{error}</p>} {/* Display error message */}
            <div className={styles.inputContainer}>
              <label className={styles.label}>Username</label>
              <input 
                type="text" 
                placeholder="Username"
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Password</label>
              <div className={styles.passwordInputWrapper}>
                <input 
                  type={showPassword ? "text" : "password"} // Toggle between text and password type
                  placeholder="Password"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className={styles.inputField}
                />
                <div className={styles.togglePassword} onClick={togglePasswordVisibility}>
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </div>
              </div>
            </div>
            <button className={styles.loginButton} onClick={handleLogin}>Log In</button>
            <hr className={styles.divisionLine} />
            <p>Don't have an account? 
  <Link href="/createAccount">
    <span className={styles.signUpLink}>Sign up for SoundPalette</span>
  </Link>
</p>

          </div>
        )}
      </div>
    </>
  );
};

export default Login;
