'use strict';

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from 'actions/exampleActions';
import { Button } from 'react-bootstrap';

function mapStateToProps(state) {
	console.log('!!!!!!!!!! state', state);
  return {
    counter: state.example.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...counterActions,
  }, dispatch);
}

class HomeRoute extends React.Component {
  static propTypes: {[key: string]: Function};

  render() {
  	console.log('!!!!!!!!! props', this.props);
    return (
      <div styleName="container">

      	<Button onClick={this.props.increment}>
      	increment
      	</Button>
      	<Button onClick={this.props.decrement}>
      	decrement
      	</Button>
        <span>{this.props.counter}</span>
      </div>
    );
  }
}

HomeRoute.propTypes = {
  increment: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeRoute);
