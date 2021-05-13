import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Router>
        <Nav />
      </Router>
    </div>
  );
}

export default App;
