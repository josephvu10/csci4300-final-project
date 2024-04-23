'use client'
import Image from "next/image";
import styles from "./page.module.css"; 
import SearchBar from "./components/search/page";
import NavigationBar from "./components/navBar/page";
import { useState, useEffect } from 'react';

export default function Home() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ['s1.jpg', 's2.jpg', 's3.jpg']; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
      <main>
      <NavigationBar />
      <SearchBar />
      <div className={styles.welcomeBanner}>
        <div className={styles.welcomeTextContainer}> 
        <div className={styles.welcomeText}>
                        <h1> Welcome to SoundPalette! </h1>
                        <p> Where playlists paint your mood... </p>
                    </div>
        </div>
        <img src="Images/welcomeBanner.jpg" alt="banner"/>
      </div>

      <div className={styles.slideshow}>
          {images.map((image, index) => (
            <img
              key={index}
              src={`Images/${image}`}
              alt={`Slide ${index + 1}`}
              className={`${styles.slide} ${currentSlide === index ? styles.active : ''}`}
              style={{ animationDelay: `${index * 5}s` }}
            />
          ))}
        </div>
      </main>
  );
}
