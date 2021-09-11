import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './components/Navbar/navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Slider } from './components/Slider/Slider';
import { News } from './components/News/News';

ReactDOM.render(
  <Router>
    <Navbar />
    <Slider />
    <News/>
  </Router>,
  document.getElementById('root')
);

