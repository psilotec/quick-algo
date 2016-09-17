/**
 * Created by Scott on 9/16/2016.
 */
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Algos } from '../../../imports/collections/algos';

class AlgosList extends Component {
    onAlgoRemove(algo) {
        Meteor.call('algos.remove', algo);
    }

    renderList() {
        return this.props.algos.map(algo => {
            return (
                <div className="item" key={algo._id}>
                    Algo {algo._id}
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