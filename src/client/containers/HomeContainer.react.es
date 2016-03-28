'use strict';

import React, { Component } from 'react';
import {
	Accordion,
	Panel
} from 'react-bootstrap';

import { TopImage } from 'components/TopImage';

export default class Home extends Component {
	render() {
		return (
			<section>
				<div>
					<Accordion>         
						<Panel bsStyle="success" header="What can you find here?" eventKey="1">
							All you want :)
						</Panel>
						<Panel bsStyle="danger" header="Why our shop?" eventKey="2">
							Best personal, the lowest prices
						</Panel>
						<Panel bsStyle="primary" header="Developing" eventKey="3">
							Best programmers
						</Panel>
					</Accordion>
				</div>
				<TopImage />
			</section>
		);
	}
}
