import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// A functino to get the date
const getCurrentDate = () => {
    const date = new Date();
    return date.toDateString();
}
// Displays text on the home page
const greeting = <h1> Hello World! Current date: {getCurrentDate()}</h1>;

ReactDOM.render(greeting, document.getElementById('root'));

serviceWorker.unregister();