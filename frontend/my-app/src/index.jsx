import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import 'normalize.css'
import App from './pages/app/App';

const routes = (
    < BrowserRouter >
        <Switch>
            <Route exact path='/app' component={App} />
        </Switch>
    </BrowserRouter >
);




ReactDOM.render(routes, document.getElementById('root'));


