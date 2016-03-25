'use strict';

import React from 'react';
import {
	Accordion,
	Panel,
	Well,
	ListGroupItem,
	ListGroup
} from 'react-bootstrap';

export default class PhonesTable extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const phones = [
			{
				mark: 'iPhone',
				model: '6s',
				ram: 2,
				camera: 8,
				color: 'grey'
			}, {
				mark: 'Samsung',
				model: 'Galaxy S3',
				ram: 2,
				camera: 7,
				color: 'black'
			}, {
				mark: 'HTC',
				model: 'g5',
				ram: 4,
				camera: 18,
				color: 'red'
			}
		];
		return (
			<div>
				<Well>It is moch! Later here will be real list of phones</Well>
				<Accordion>
				{
					phones.map((phone, index) => {
						const header = `${phone.mark} - ${phone.model}`;
						return <Panel bsStyle="success" header={header} eventKey={header} key={index}>
							<ListGroup>
								<ListGroupItem header="RAM" bsStyle="info">{phone.ram}</ListGroupItem>
								<ListGroupItem header="Camera" bsStyle="info">{phone.camera}</ListGroupItem>
								<ListGroupItem header="Color" bsStyle="info">{phone.color}</ListGroupItem>
							</ListGroup>
						</Panel>
					})
				}					
				</Accordion>
			</div>
		);
	}
}