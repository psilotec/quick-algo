/**
 * Created by Scott on 9/16/2016.
 */
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Algos } from '../../../imports/collections/algos';
import { Link } from 'react-router';

class AlgosList extends Component {
    onAlgoRemove(algo) {
        Meteor.call('algos.remove', algo);
    }

    renderList() {
        return this.props.algos.map(algo => {
            const url = `/algos/${algo._id}`;

            return (
                <div className="item" key={algo._id}>
                    <Link to={url}>Algo {algo._id}</Link>
                    <div className="right floated content">
                        <div
                            className="ui red button"
                            onClick={() => this.onAlgoRemove(algo)}>
                            Remove
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        console.log(this.props.algos);
        return (
            <div className="ui middle aligned divided list">
                {this.renderList()}
            </div>
        );
    }
}

export default createContainer(() => {
    Meteor.subscribe('algos');

    return { algos: Algos.find({}).fetch() };
}, AlgosList);