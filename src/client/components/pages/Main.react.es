'use strict';

import React from 'react';
import {
	Input,
	Button,
	Grid,
	Row,
	Col,
	Accordion,
	Panel
} from 'react-bootstrap';

export default class MainPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Grid>
					<Row className="show-grid">
						<Col xsOffset={3}>
							<Input type="text" placeholder="Search..."/>
						</Col>
						<Col xsOffset={9}>
							<Button bsStyle="success" type="submit">Submit</Button>
						</Col>
					</Row>
				</Grid>

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
		);
	}
}