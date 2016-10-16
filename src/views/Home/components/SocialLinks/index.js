import React from 'react';
import './style.css';

import data from '../../../../services/data';

function SocialLinks() {
  const list = data.links.map(item =>
    <li>
      <a
        href={item.url}
        title={item.name}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.name}
      </a>
    </li>
  );

  return (
    <ul className="SocialLinks">
      {list}
    </ul>
  );
}

export default SocialLinks;
