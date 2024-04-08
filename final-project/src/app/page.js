/* 'use client'
import React, { useState } from 'react';
import Login from './components/Login';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div>
      <header>
        <h1>Sound Palette</h1>
        {loggedInUser && (
    <button className="logout-btn" onClick={handleLogout}>Logout</button>
  )}
      </header>
      <main>
        {loggedInUser ? (
          <p>Welcome, {loggedInUser}!</p>
        ) : (
          <Login onLogin={handleLogin} onCreateAccount={() => console.log('Redirect to sign up')} />
        )}
      </main>
    </div>
  );
};

export default App;
*/

'use client'
import Image from "next/image";
import styles from "./page.module.css"; 
import SearchBar from "./components/SearchBar";
import NavigationBar from "./components/NavBar";
import NavBar from "./components/NavBar";
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
        <div className={styles.welcomeTextContainer}> {/* Add className for text container */}
        <div className={styles.welcomeText}>
                        <h1> Welcome to SoundPalette! </h1>
                        <p> Company slogan... </p>
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
