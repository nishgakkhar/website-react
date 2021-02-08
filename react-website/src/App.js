import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import HireMe from './components/pages/HireMe';
import FoodLabel from './components/pages/FoodLabel';
import KYFB from './components/pages/KYFB';
import HackerRank from './components/pages/HackerRank';
import VerdantU from './components/pages/VerdantU';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/foodLabel' component={FoodLabel} />
          <Route path='/hire-me' component={HireMe} />
          <Route path='/kyfb' component={KYFB} />
          <Route path='/hackerRank' component={HackerRank} />
          <Route path='/verdantU' component={VerdantU} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
