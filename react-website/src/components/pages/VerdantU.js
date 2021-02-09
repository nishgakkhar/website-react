import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'react-awesome-slider/dist/styles.css';
import Footer from '../Footer';

export default function FoodLabel() {
  return  (
    <div>
    <div className="verdantU">
    <Link to="/app-release.apk" target="_blank" download>
      <i class="fa fa-android"></i>
      <h1>Download Android App</h1>
    </Link>
    </div>
    <Footer/>
    </div>
  );
}
