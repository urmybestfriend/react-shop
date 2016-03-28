'use strict';

import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

export default class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div>
                <Button className="footer__star-button">
                    <Glyphicon glyph="star" />
                    <a href="https://github.com/yankouskia/Shop">
                        Star it :)
                    </a>
                </Button>
                </div>
            </div>
        );
    }
}
