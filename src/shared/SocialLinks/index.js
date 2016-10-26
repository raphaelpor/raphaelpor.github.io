import React from 'react';
import './style.css';

import data from '../../services/data';

function SocialLinks() {
  const list = data.links.map((item, i) =>
    <li key={i}>
      <a
        className={`icon-${item.name.toLowerCase()}`}
        href={item.url}
        title={item.name}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{item.name}</span>
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
