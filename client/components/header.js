/**
 * Created by Scott on 9/15/2016.
 */
import React, { Component } from 'react';

import Accounts from './accounts';

class Header extends Component {

    render() {
        return (
            <div className="ui secondary pointing menu">
                <a className="item">
                    Menu
                </a>
                <a className="item">
                    New Algo
                </a>
                <a className="item">
                    Algo List
                </a>
                <div className="right menu">
                    <a className="ui item">
                        <Accounts />
                    </a>
                </div>
            </div>
        );
    }
}



export default Header;