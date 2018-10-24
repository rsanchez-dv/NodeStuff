import React, { Component } from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component {
    state = {
        show: null
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        // Pulls different types of tv series with the token Vikings
        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
        // gets the response and converts it to json
        .then((response) => response.json())
        // gets the json and sets it as our array we declared  in state
        .then(json => this.setState({ show: json }));
    }
    render() {
        const { show } = this.state;
        console.log(show)
        return (
            <div>
                { show ===  null && <Loader /> }
                {
                    show !== null
                    &&
                    <div>
                        <p>{show.name}</p>
                        <p>Premiered - {show.premiered}</p>
                        <p>Rating - {show.rating.average}</p>
                        <p>Episodes - {show._embedded.episodes.length}</p>
                        <p>
                            <img alt="Picture of Movie" src={show.image.medium}/>
                        </p>
                    </div>
                }
            </div>
        )
    }
}
export default SingleSeries;