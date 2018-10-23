import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
/* 
// A function to get the date
const getCurrentDate = () => {
    const date = new Date();
    return date.toDateString();
}
// Displays text on the home page
const greeting = <h1> Hello World! Current date: {getCurrentDate()}</h1>;
// Renders greeting on the page.
ReactDOM.render(greeting, document.getElementById('root'));
*/
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();