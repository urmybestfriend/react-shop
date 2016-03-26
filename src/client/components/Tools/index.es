'use strict';

import React, { Component } from 'react';
import { Image, ResponsiveEmbed } from 'react-bootstrap';

/* images */
const reactjs = require('./files/reactjs.png');
const redux = require('./files/redux.png');
const babel = require('./files/babel.png');
const webpack = require('./files/webpack.png');
const bootstrap = require('./files/bootstrap.png');
const mocha = require('./files/mocha.png');

export class Tools extends Component {
  render() {
    return (
      <section>
        <div className="container">

          <div className="row">
            <div>
              <h2>
                Project contains
              </h2>
            </div>
          </div>

          <div className="row">
            <div style={{width: 150, height: 'auto'}}>
              <ResponsiveEmbed a16by9>
                <embed src={reactjs} />
              </ResponsiveEmbed>
              <h4>
                React
              </h4>
            </div>

            <div style={{width: 150, height: 'auto'}}>
              <ResponsiveEmbed a16by9>
                <embed src={redux} />
              </ResponsiveEmbed>
              <h4>
                Redux
              </h4>
            </div>

            <div style={{width: 150, height: 'auto'}}>
              <ResponsiveEmbed a16by9>
                <embed src={babel} />
              </ResponsiveEmbed>
              <h4>
                Babel
              </h4>
            </div>

            <div style={{width: 150, height: 'auto'}}>
              <ResponsiveEmbed a16by9>
                <embed src={webpack} />
              </ResponsiveEmbed>
              <h4>
                Webpack
              </h4>
            </div>

            <div style={{width: 150, height: 'auto'}}>
              <ResponsiveEmbed a16by9>
                <embed src={bootstrap} />
              </ResponsiveEmbed>
              <h4>
                Bootstrap
              </h4>
            </div>

            <div style={{width: 150, height: 'auto'}}>
              <ResponsiveEmbed a16by9>
                <embed src={mocha} />
              </ResponsiveEmbed>
              <h4>
                Mocha
              </h4>
            </div>
          </div>

        </div>
      </section>
    );
  }
}
