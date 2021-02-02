import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/welcome-1.mp4' autoPlay loop muted />
      <h1>Portfolio</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          View Projects
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
