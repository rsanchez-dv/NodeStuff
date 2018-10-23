import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const greeting = React.createElement('h1', {}, 'Hello world');

ReactDOM.render(greeting, document.getElementById('root'));

serviceWorker.unregister();
