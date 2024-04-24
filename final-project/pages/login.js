import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = ({ onLogin = username => console.log('Default login attempt:', username), onCreateAccount }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility


  const handleLogin = () => {
    // Simulated login logic, replace with actual authentication logic
    if (username === 'admin' && password === 'password') {
      onLogin(username);
      setLoggedInUser(username);
      router.push('/authenticated'); // Redirect to authenticated page
    } else {
      alert('Invalid username or password.');
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  return (
    <>
      <header className={styles.header}>
      <img src="Images/logo2.png" alt="Company Logo" className="logo" />
      </header>
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
                // type="password" 
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
            <p>Don't have an account? <a className={styles.signUpLink} onClick={onCreateAccount}>Sign up for SoundPalette</a></p>
          {/* <button className={`${styles.loginButton} ${styles.createAccountBtn}`} onClick={onCreateAccount}>Create Account</button> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
