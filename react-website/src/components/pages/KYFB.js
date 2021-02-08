import React from 'react';
import '../../App.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export default function KYFB() {
  return  (
    <AwesomeSlider>
      <div class="slides" data-src="././images/kyfb1.png" />
      <div class="slides" data-src="././images/kyfb2.png" />
      <div class="slides" data-src="././images/kyfb3.png" />
      <div class="slides" data-src="././images/kyfb5.png" />
    </AwesomeSlider>
  );
}
