/**
 * Created by Scott on 9/15/2016.
 */
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div class="ui secondary pointing menu">
                <a class="item">
                    Home
                </a>
                <a class="item">
                    Messages
                </a>
                <a class="item active">
                    Friends
                </a>
                <div class="right menu">
                    <a class="ui item">
                        Logout
                    </a>
                </div>
            </div>
        );
    }
}