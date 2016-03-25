import React, { Component } from 'react';
import { Link } from 'react-router';

export class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-5 col-sm-3 col-md-3 col-lg-3 logo">
            <Link to="/">
              Redux Easy Boilerplate
            </Link>
          </div>

          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <nav>
              <Link to="/home" activeClassName="active">
                Home
              </Link>
              <Link to="/list" activeClassName="active">
                Redux
              </Link>
            </nav>
          </div>

          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 hidden-xs text-right">
            <a href="https://github.com/anorudes/redux-easy-boilerplate">
              Fork me on GitHub
            </a>
          </div>
        </div>
      </div>
    );
  }
}
