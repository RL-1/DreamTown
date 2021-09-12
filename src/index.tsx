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
import { Stock } from './components/Stock/Stock';
import { Banner } from './components/Banner/banner';

ReactDOM.render(
  <Router>
    <Navbar />
    <Slider />
    <News/>
    <Stock/>
    <Banner/>
  </Router>,
  document.getElementById('root')
);

