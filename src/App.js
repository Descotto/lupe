


import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';

import React from 'react';
import './App.css';
import About from './About';
import Home from './Home';
import Contact from './Contact';

require('dotenv').config()

function App() {
  console.log(process.env.REACT_APP_SERVER_URL)
  return (
    <div className="App">
      <h1>Lupe's site</h1>

      <Router>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
