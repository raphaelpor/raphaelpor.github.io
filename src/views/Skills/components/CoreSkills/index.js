import React from 'react';
import './style.css';

import data from '../../../../services/data';

function CoreSkills() {
  const coreSkills = data.coreSkills.map((item, i) =>
    <h3 key={i}>{item}</h3>
  );

  return (
    <div className="CoreSkills">
      {coreSkills}
    </div>
  );
}

export default CoreSkills;
