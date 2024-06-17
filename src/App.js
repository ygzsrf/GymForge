// App.js

import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Exercise from './components/Exercise';
import FooterSection from './components/FooterSection';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Section from './components/Section';
import CustomScrollbar from './components/CustomScrollbar'; // Import the CustomScrollbar component
import './App.css';

function App() {
  return (
    <div className='App'>
        <Navbar />
        <Home />
        <Exercise />
        <About />
        <Contact />
        <Section />
        <FooterSection />
    </div>
  );
}

export default App;
