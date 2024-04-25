'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import LinkedLogo from "../LinkedLogo/page";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import styles from './createAccount.module.css';

const CreateAccount = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);


  const handleCreateAccount = () => {
    if (email.trim() !== '' && password.trim() !== '' && password === confirmPassword) {
      // Make a POST request to the backend API endpoint
      axios.post('/api/signup', { email, password}) // Remove username from request payload
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
        alert('Please enter an email, password, and confirm password.');
      }
    }
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
    <header className={styles.header}>
      <a href="/" className={styles.homeLink} onClick={handleGoToHome}>
  <img src="/Images/logo2.png" alt="Company logo" className={styles.logo} />
  </a>
      </header>
      
    <div className={styles.createAccountContainer}>
    <h2> Sign up to start <br /> creating </h2>
    <hr className={styles.divisionLine} />
        <label className={styles.label}>Email </label>
        <input
          type="email"
          value={email}
          placeholder="name@domain.com"
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
        />
        <label className={styles.label}>Password </label>
        <div className={styles.passwordInputWrapper}>
        <input
          // type="password"
          type={showPassword ? "text" : "password"}
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
        />
        <div className={styles.togglePassword} onClick={togglePasswordVisibility}>
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </div>
              </div>
        <label className={styles.label}>Confirm Password </label>
        <div className={styles.passwordInputWrapper}>
        <input
          // type="password"
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={styles.inputField}
        />
        <div className={styles.togglePassword} onClick={togglePasswordVisibility}>
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </div>
              </div>
        <Link href='/components/song'> 
        <button className={styles.loginButton} onClick={handleCreateAccount}>Create Account</button>
        </Link> 
        <hr className={styles.divisionLine} />
        <p>Already have an account?
        <Link href='/components/login'> 
    <span className={styles.loginLink}> Log in here</span>
  </Link>
</p>
    </div>
    </>
  );
};

export default CreateAccount;