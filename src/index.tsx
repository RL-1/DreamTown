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
import { FooterSearch } from './components/Footer_search/footerSearch';
import { Footer } from './components/Footer/Footer';

ReactDOM.render(
  <Router>
    <Navbar />
    <Slider />
    <News/>
    <Stock/>
    <Banner/>
    <FooterSearch/>
    <Footer/>
  </Router>,
  document.getElementById('root')
);

