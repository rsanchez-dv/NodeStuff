import React from 'react';
import loaderSrc from '../../assets/loader.gif'

const Loader = props => (
    <div>
        <img 
        style={{width: 75}}
        
        src={ loaderSrc }
        alt="Loading Icon"
        />
    </div>
);

export default Loader;