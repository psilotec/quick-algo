/**
 * Created by Scott on 9/15/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import { Algos } from '../imports/collections/algos';

Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.render-target'));
});