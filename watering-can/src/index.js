import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
<<<<<<< HEAD
<Router>
    <App />
</Router>, document.getElementById('root'));
=======
<BrowserRouter>
<App />
</BrowserRouter>

, document.getElementById('root'));
>>>>>>> master

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
