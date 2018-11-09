import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import {Router, Route} from 'react-router';
// import {createBrowserHistory} from 'history';

// const browserHistory = createBrowserHistory();

ReactDOM.render(
    <App></App>
    // <Router history={browserHistory}>
    //     <Route path="/" component={App}>
    //     </Route>
    //     {/* <Route path="/book">

    //     </Route> */}
    // </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
