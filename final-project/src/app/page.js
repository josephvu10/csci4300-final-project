'use client'
import Image from "next/image";
import styles from "./page.module.css"; 
import SearchBar from "./components/search/page";
import NavigationBar from "./components/navBar/page";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {

  const [currentSlide, setCurrentSlide] = useState(Array(6).fill(0));
  const images = [
    ['cover1.png', 'cover2.png', 'cover3.png'],
    ['cover4.png', 'cover5.png', 'cover6.png'],
    ['cover7.png', 'cover8.png', 'cover9.png'],
    ['cover10.png', 'cover11.png', 'cover12.png'],
    ['cover13.png', 'cover14.png', 'cover15.png'],
    ['cover16.png', 'cover17.png', 'cover18.png'],
  ]; 

  return (
    <div className={styles.hpContainer}>
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href='/components/createAccount'>
            <button className={styles.navButton}>Create Account</button>
          </Link>
        </li>
        <li className={styles.navItem2}>
          <Link href='/components/login'> 
            <button className={styles.navButton}>Login</button>
          </Link>
        </li>
      </ul>
    </nav>
    
    <div className={styles.welcomeBanner}>
      <div className={styles.welcomeTextContainer}> 
        <div className={styles.welcomeText}>
          <h1> Welcome to <br /> SoundPalette </h1>
          <p> Where playlists paint your mood </p>
        </div>
      </div>
      <div className={styles.overlay}></div>
      <img src="Images/HPBanner.gif" alt="banner" className={styles.bannerImage} />
    </div>
    <div className={styles.searchBarContainer}>
      <SearchBar />
    </div>
  </div>

);
};
