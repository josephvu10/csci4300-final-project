import React from "react";
import styles from "../styles/LinkedLogo.module.css";  

const handleGoToHome = () => {
    // Redirect to the index page (home)
    router.push('/');
  };

const LinkedLogo = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.homeLink} onClick={handleGoToHome}>
  <img src="Images/logo2.png" alt="Company logo" className={styles.logo} />
  </a>
      </header>
  );
};


export default LinkedLogo;