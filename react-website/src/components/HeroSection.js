import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/welcome-1.mp4' autoPlay loop muted />
      <h1>Hey I am Nish</h1>
      <p>A Passionate Full stack developer</p>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroSection;
