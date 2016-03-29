'use strict';

import React, { Component, PropTypes } from 'react';
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

import * as phonesActions from 'actions/phones';

function mapStateToProps(state) {
return {
phones: state.phones.phones,
};
}

function mapDispatchToProps(dispatch) {
return bindActionCreators({
...phonesActions,
}, dispatch);
}

class PhonesTable extends Component {
    constructor(props) {
        super(props);
        this.props.getAllPhones();
    }

    render() {
        let phones = this.props.phones;
        return (
            <section>
                <Well>Here is all list of our phones</Well>
                <div>
                    <PhonesAddModal />
                    <Accordion>
                        {
                            phones.sort((left, right) => {return left.mark.toLowerCase() > right.mark.toLowerCase() ? 1 : -1}).map((phone, index) => {
                                const header = `${phone.mark} ${phone.model}; System: ${phone.operatingSystem}; Color: ${phone.color}`;
                                return <Panel bsStyle="success" header={header} eventKey={header} key={index}>
                                    <ListGroup>
                                        <ListGroupItem header="RAM" bsStyle="info">{phone.ram}</ListGroupItem>
                                        <ListGroupItem header="Camera" bsStyle="info">{phone.camera}</ListGroupItem>
                                        <ListGroupItem header="Color" bsStyle="info">{phone.color}</ListGroupItem>
                                        <ListGroupItem header="Number of cores" bsStyle="info">{phone.coresNumber}</ListGroupItem>
                                        <ListGroupItem header="gps" bsStyle="info">{phone.gps}</ListGroupItem>
                                        <ListGroupItem header="wi-fi" bsStyle="info">{phone.wifi}</ListGroupItem>
                                        <ListGroupItem header="diagonal" bsStyle="info">{phone.diagonal}</ListGroupItem>
                                        <ListGroupItem header="Operating system" bsStyle="info">{phone.operatingSystem}</ListGroupItem>
                                        <ListGroupItem header="Price, dollars($)" bsStyle="info">{phone.price}</ListGroupItem>
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

PhonesTable.propTypes = {
    getAllPhones: PropTypes.func.isRequired,
    addPhone: PropTypes.func.isRequired,
    deletePhone: PropTypes.func.isRequired,
    phones: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PhonesTable);