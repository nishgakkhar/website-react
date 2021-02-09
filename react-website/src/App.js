import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import AboutMe from './components/pages/AboutMe';
import FoodLabel from './components/pages/FoodLabel';
import KYFB from './components/pages/KYFB';
import HackerRank from './components/pages/HackerRank';
import VerdantU from './components/pages/VerdantU';
import Connect from './components/pages/ContactMe';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/foodLabel' component={FoodLabel} />
          <Route path='/aboutMe' component={AboutMe} />
          <Route path='/kyfb' component={KYFB} />
          <Route path='/hackerRank' component={HackerRank} />
          <Route path='/verdantU' component={VerdantU} />
          <Route path='/connect' component={Connect} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
