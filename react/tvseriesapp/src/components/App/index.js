import React, { Component } from 'react';
import './App.css';
import Main from '../Main'

class App extends Component {
  render() {
    // The below gets rendered on the page
    return (
      <div className="App">
        <header className="App-header">
          <h1>TV Series Finder</h1>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
