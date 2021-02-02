import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Work journey</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./images/food-label.jpeg'
              text='Food label'
              label='Food label'
              path='/foodLabel'
            />
            <CardItem
              src='./images/KYFB.jpeg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Know your food business'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./images/hackerRank.jpeg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='HackerRank analysis'
              path='/projects'
            />
            <CardItem
              src='./images/verdantU.jpeg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Verdant U'
              path='/projects'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
