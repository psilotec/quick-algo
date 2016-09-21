/**
 * Created by Scott on 9/15/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import { Algos } from '../imports/collections/algos';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        </Route>
    </Router>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.render-target'));
});