import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro'

class App extends Component {
  state  = {
    series: []
  }

  componentDidMount() {
    /*
    //loads after com renders, waits 2 seconds and updates later
    const series = ["Vikings", "Game of Thrones"];
    setTimeout(() => {
      this.setState({ series });
    }, 2000);
     */
    
    // Pulls different types of tv series with the token Vikings
    fetch('http://api.tvmaze.com/search/shows?q=Vikings')
    // gets the response and converts it to json
    .then((response) => response.json())
    // gets the json and sets it as our array we declared  in state
    .then(json => this.setState({ series: json}));
  }
  render() {
    // The below gets rendered on the page
    return (
      <div className="App">
        <header className="App-header">
          <h1>This is the title of this app</h1>
        </header>
        {/*message gets sent to the other component and functions */}
        <Intro message="Here you can find all of your most loved Series"/>
        {/*Prints out the length of the array in the state*/}
        The length of series array - {this.state.series.length}
      </div>
    );
  }
}

export default App;
