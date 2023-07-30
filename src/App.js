import React, { Component } from 'react';
import './App.css';
import Portfolio from './components/Portfolio/Portfolio';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import SkillsList from './components/SkillsList/SkillsList';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Portfolio />
        <SkillsList />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
