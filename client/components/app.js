/**
 * Created by Scott on 9/15/2016.
 */
import React from 'react';
import Header from './header';
import AlgosList from './algos/algos_list';

export default (props) => {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    );
};