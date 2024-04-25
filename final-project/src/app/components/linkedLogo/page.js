'use client';
import React from "react";
import { useRouter } from 'next/router';
import styles from "./linkedLogo.module.css";  

const handleGoToHome = () => {
    // Redirect to the index page (home)
    router.push('/');
  };

const linkedLogo = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.homeLink} onClick={handleGoToHome}>
  <img src="/Images/logo2.png" alt="Company logo" className={styles.logo} />
  </a>
      </header>
  );
};


export default linkedLogo;