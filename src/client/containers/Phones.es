import React, { Component } from 'react';
import {
  Accordion,
  Panel,
  Well,
  ListGroupItem,
  ListGroup
} from 'react-bootstrap';
import PhonesAddModal from 'components/Modals/AddPhoneModal.react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/* actions */
import * as actionCreators from 'actions/phones';

// @connect(
//   state => state.phones,
//   dispatch => bindActionCreators(actionCreators, dispatch)
// )
export default class PhonesTable extends Component {
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
      <section>
        <div className="container">
        	<PhonesAddModal/>
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
      </section>
    );
  }
}
