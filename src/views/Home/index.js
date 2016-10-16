import React from 'react';
import './style.css';

import Avatar from '../../shared/Avatar';
import Intro from './components/Intro';

function Home() {
  return (
    <div className="Home">
      <Avatar />
      <Intro />
    </div>
  );
}

export default Home;
