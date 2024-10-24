'use client'
import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logoContainer}>
        {/* Add your company logo here */}
        <img src="/Images/logo.png" alt="Company Logo" className={styles.logo} />
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/createAccount"> 
            <button className={styles.navButton}>Create Account</button>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/login"> 
            <button className={styles.navButton}>Login</button>
          </Link>
        </li>
        {/* Add more navigation items here */}
      </ul>
    </nav>
  );
};

export default NavBar;
