import React from 'react';
import '../../App.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export default function FoodLabel() {
  return  (
    <AwesomeSlider>
      <div data-src="././images/lb-1.png" />
      <div data-src="././images/lb-2.png" />
      <div data-src="././images/lb-3.png" />
      <div data-src="././images/lb-4.png" />
      <div data-src="././images/lb-5.png" />
    </AwesomeSlider>
  );
}
