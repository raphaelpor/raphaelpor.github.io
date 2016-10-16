import React from 'react';
import './style.css';

import Avatar from '../../shared/Avatar';
import Intro from './components/Intro';
import SocialLinks from '../../shared/SocialLinks';

function Home() {
  return (
    <div className="Home container">
      <Avatar />
      <Intro />
      <SocialLinks />
    </div>
  );
}

export default Home;
