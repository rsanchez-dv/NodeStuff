import React, { Component } from 'react';
import './App.css';
import Series from '../../containers/Series'

class App extends Component {
  render() {
    // The below gets rendered on the page
    return (
      <div className="App">
        <header className="App-header">
          <h1>This is the title of this app</h1>
        </header>
        <Series />
      </div>
    );
  }
}

export default App;
