'use strict';

import React, { Component } from 'react';
import Header from 'components/Header.react';
import Footer from 'components/Footer.react';

export default class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  };

  render() {
    return (
      <section>
        <Header />
        {this.props.children}
        <Footer />
      </section>
    );
  }
}
