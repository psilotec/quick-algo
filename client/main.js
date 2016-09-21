/**
 * Created by Scott on 9/15/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import AlgosMain from './components/algos/algos_main';
import AlgosList from './components/algos/algos_list';
import { Algos } from '../imports/collections/algos';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={AlgosList} />
            <Route path="algos/:algoId" component={AlgosMain} />
        </Route>
    </Router>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.render-target'));
});