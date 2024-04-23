import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NavBar from '../comps/NavBar';
import SearchBar from '../comps/SearchBar';
import styles from '../styles/Home.module.css';

const AuthenticatedPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ['s1.jpg', 's2.jpg', 's3.jpg'];
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear local storage, reset state, etc.
    router.push('/'); // Redirect to the index page after logout
  };

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
        <img src="/Images/welcomeBanner.jpg" alt="banner" />
      </div>

      <div className={styles.slideshow}>
        {images.map((image, index) => (
          <img
            key={index}
            src={`/Images/${image}`}
            alt={`Slide ${index + 1}`}
            className={`${styles.slide} ${
              currentSlide === index ? styles.active : ''
            }`}
            style={{ animationDelay: `${index * 5}s` }}
          />
        ))}
      </div>

      <button className={styles.logoutBtn} onClick={handleLogout}>
        Logout
      </button>
    </main>
  );
};

export default AuthenticatedPage;
