import React from 'react';

import { AboutUs, FindUs, Footer, Gallery, Header, Intro } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Intro />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
