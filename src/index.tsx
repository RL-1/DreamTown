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
import { FooterSearch } from './Footer_search/footerSearch';

ReactDOM.render(
  <Router>
    <Navbar />
    <Slider />
    <News/>
    <Stock/>
    <Banner/>
    <FooterSearch/>
  </Router>,
  document.getElementById('root')
);

