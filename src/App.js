import React, { Component } from 'react';

import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import ContactDetails from './pages/ContactDetails'
import StatisticsPage from './pages/StatisticsPage'
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="app">
        <HomePage />
        <ContactPage />
        <ContactDetails />
        <StatisticsPage />
      </section>
    )
  }
}

export default App;
