
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './Header';
import Page from './Page';
import Footer from './Footer';

// import React, {Component} from 'react';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="Header">
      {<Header/>}
      </header>
      <main className='Page'>
        {<Page/>}
      </main>
      <footer className='Footer'>
        {<Footer/>}
      </footer>
    </div>
    </Router>
  );
}

export default App;
