import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Home from './views/Home';
import Skills from './views/Skills';

function App() {
  return (
    <div>
      <Home />
      <Skills />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
