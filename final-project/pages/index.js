'use client'
import Image from "next/image";
import styles from "../styles/Home.module.css"; 
import SearchBar from "../comps/SearchBar";
import NavBar from "../comps/NavBar";
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
      <NavBar />
      <SearchBar />
      <div className={styles.welcomeBanner}>
        <div className={styles.welcomeTextContainer}> 
          <div className={styles.welcomeText}>
            <h1>Welcome to SoundPalette!</h1>
            <p>Where playlists paint your mood...</p>
          </div>
        </div>
        <Image
          src="/Images/welcomeBanner.jpg"
          alt="banner"
          width={800} // Adjust width as needed
          height={400} // Adjust height as needed
        />
      </div>

      <div className={styles.slideshow}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={`/Images/${image}`}
            alt={`Slide ${index + 1}`}
            width={800} // Adjust width as needed
            height={400} // Adjust height as needed
            className={`${styles.slide} ${currentSlide === index ? styles.active : ''}`}
            style={{ animationDelay: `${index * 5}s` }}
          />
        ))}
      </div>
    </main>
  );
}
