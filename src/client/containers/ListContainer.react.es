'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Items from 'components/Items.react';
import AddItem from 'components/AddItem.react';
import Tools from 'components/Tools';

/* actions */
import * as actionCreators from 'actions/items';


@connect(
    state => state.items,
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export default class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <Tools/>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">
                            <h2>
                                Shop contains technologies:
                            </h2>
                            <Items {...this.props} />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">
                            <AddItem {...this.props} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
