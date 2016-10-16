import React from 'react';
import './style.css';

import Avatar from '../../shared/Avatar';
import Intro from './components/Intro';
import SocialLinks from './components/SocialLinks';

function Home() {
  return (
    <div className="Home">
      <Avatar />
      <Intro />
      <SocialLinks />
    </div>
  );
}

export default Home;
