/**
 * Created by Scott on 9/15/2016.
 */
import React, { Component } from 'react';

import Accounts from './accounts';

class Header extends Component {
    onAlgoClick(event) {
        event.preventDefault();

        Meteor.call('algos.insert');
    }

    render() {
        return (
            <div className="ui secondary pointing menu">
                <a className="item">
                    Menu
                </a>
                <a className="item" href="#" onClick={this.onAlgoClick.bind(this)}>
                    New Algo
                </a>
                <a className="item">
                    <Accounts />
                </a>
            </div>
        );
    }
}



export default Header;