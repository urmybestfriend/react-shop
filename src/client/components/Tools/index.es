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

export default class Tools extends Component {
  render() {
    return (
      <section>
        <div className="container">

          <div className="row">
            <div style={{width: 150, height: 'auto'}}>
              <ResponsiveEmbed a16by9>
                <embed src={reactjs} />
              </ResponsiveEmbed>
            </div>

            <div style={{width: 150, height: 'auto'}}>
              <ResponsiveEmbed a16by9>
                <embed src={redux} />
              </ResponsiveEmbed>
            </div>

            <div style={{width: 150, height: 'auto'}}>
              <ResponsiveEmbed a16by9>
                <embed src={babel} />
              </ResponsiveEmbed>
            </div>

            <div style={{width: 150, height: 'auto'}}>
              <ResponsiveEmbed a16by9>
                <embed src={webpack} />
              </ResponsiveEmbed>
            </div>

            <div style={{width: 150, height: 'auto'}}>
              <ResponsiveEmbed a16by9>
                <embed src={bootstrap} />
              </ResponsiveEmbed>
            </div>

            <div style={{width: 150, height: 'auto'}}>
              <ResponsiveEmbed a16by9>
                <embed src={mocha} />
              </ResponsiveEmbed>
            </div>
          </div>

        </div>
      </section>
    );
  }
}
