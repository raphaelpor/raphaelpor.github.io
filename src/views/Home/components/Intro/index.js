import React from 'react';
import './style.css';

import data from '../../../../services/data';

function Intro() {
  return (
    <div className="Intro">
      <h1>{data.name}</h1>
      <small>{data.role} @ {data.company}</small>
    </div>
  );
}

export default Intro;
