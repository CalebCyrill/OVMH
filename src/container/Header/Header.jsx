import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Header.css';

const Header = () => (
  <div className="app__header app_wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="OVMH Working title"/>
      <h1 className="app__header-h1">Title1</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
  

);

export default Header;
