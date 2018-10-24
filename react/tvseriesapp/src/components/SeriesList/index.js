import React from 'react';
import './index.css';
import { Link } from 'react-router-dom'

const SeriesListItem = ({ series }) =>(
    <li >
        <Link to={`/series/${series.show.id}`}>
        {series.show.name}
        </Link>
        
    </li>
)
const SeriesList = (props) => {
    return (
        <div>
            <ul className="series-list">
                {/*Gets the array from the other component and displays in the function */}
                {/*key is uniqe for rendered objects */}
                {props.list.map(series => (
                    <SeriesListItem series={series} key={series.show.id} />
                ))}
            </ul>
        </div>
    )
}

export default SeriesList;