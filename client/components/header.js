/**
 * Created by Scott on 9/15/2016.
 */
import React, { Component } from 'react';
import Accounts from './accounts';
import { Link } from 'react-router';

class Header extends Component {
    onAlgoClick(event) {
        event.preventDefault();

        Meteor.call('algos.insert');
    }

    render() {
        return (
            <div className="ui secondary pointing menu">
                <Link to="/" className="item">
                    Quick Algo
                </Link>
                <a className="item" href="#" onClick={this.onAlgoClick.bind(this)}>
                    Create New
                </a>
                <a className="item">
                    <Accounts />
                </a>
            </div>
        );
    }
}



export default Header;