import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList'
import Loader from '../../components/Loader'

class Series extends Component {
    // Storing data on this component
    state  = {
        series: [],
        seriesName: '',
        isFectching: false
      }
      // Runs before component renders on the screen
    componentDidMount() {
        
    }
    // When an event happends run the code, from the input tag
    onSeriesInputChange = e => {
        this.setState({seriesName: e.target.value, isFetching: true})
        // Pulls different types of tv series with the token Vikings
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        // gets the response and converts it to json
        .then((response) => response.json())
        // gets the json and sets it as our array we declared  in state
        .then(json => this.setState({ series: json, isFetching:false}));
    }
    // Displays on the screen
    render() {
        const { series, seriesName, isFetching} = this.state;
        return (
            <div> 
                {/*Prints out the length of the array in the state
                The length of series array - {this.state.series.length}
                */}
                
                <div>
                    <input value={seriesName} type="text" onChange={this.onSeriesInputChange}/>
                </div>
                { 
                    // Looks if there is no input
                    !isFetching && series.length === 0 && seriesName.trim() === ''
                    &&
                    <p>Please enter series name into the input</p>
                }
                {
                    // Displays if there is no tv series found in the response
                    !isFetching && series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>No Tv series have been found with this name</p>
                }
                {
                    // Waiting for a response from the API
                    isFetching && <Loader />
                }
                {
                    // Finished getting a response, displaying output
                    !isFetching && <SeriesList list={this.state.series}/>
                }
            </div>
        )
    }
}

export default Series;