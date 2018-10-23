import React from 'react';
// the message comes from another component.
const Intro = (props) => (
    <p className="App-intro">
        {props.message}
    </p>
  );

export default Intro;