// import React from 'react';
// import '../../App.css';
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';

// export default function Projects() {
//   return  (
//     <AwesomeSlider>
//       <div data-src="././images/lb-1.png" />
//       <div data-src="././images/lb-2.png" />
//       <div data-src="././images/lb-3.png" />
//       <div data-src="././images/lb-4.png" />
//       <div data-src="././images/lb-5.png" />
//     </AwesomeSlider>
//   );
// }

import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Footer from '../Footer';

function Cards() {
  return (
    <div>
    <div className='cards'>
      <h1>Work journey</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./images/food-label.jpeg'
              text='Label Buster is a step-by-step guide to help you identify the information you need to create a food label that meets Australian requirements.'
              label='Food label'
              path='/foodLabel'
            />
            <CardItem
              src='./images/KYFB.jpeg'
              text=' The Know Your Food Business self-assessment tool is provided for small to medium food businesses. This tool can help you to assess whether you meet the requirements of the Food Act 2006 and the Australia New Zealand Food Standards Code. '
              label='Know your food business'
              path='/kyfb'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./images/verdantU.jpeg'
              text='An app to record carbon emission from food items. It helps an individual to monitor their share in carbon emission'
              label='Verdant U'
              path='/verdantU'
            />
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Cards;
