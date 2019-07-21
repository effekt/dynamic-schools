import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/styles.css';
import App from './pages/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Routes from './pages/Routes';

ReactDOM.render(
    <BrowserRouter>
        <App />
        <Routes />
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
