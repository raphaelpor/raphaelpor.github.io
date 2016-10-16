import React from 'react';
import './style.css';

import data from '../../../../services/data';

function Intro() {
  return (
    <div className="Intro">
      <h1>{data.name}</h1>
      <small>test</small>
    </div>
  );
}

export default Intro;
