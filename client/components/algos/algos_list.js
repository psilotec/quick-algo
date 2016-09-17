/**
 * Created by Scott on 9/16/2016.
 */
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Algos } from '../../../imports/collections/algos';

class AlgosList extends Component {
    render() {
        console.log(this.props.algos);
        return (
            <div>Algos List</div>
        );
    }
}

export default createContainer(() => {
    Meteor.subscribe('algos');

    return { algos: Algos.find({}).fetch() };
}, AlgosList);