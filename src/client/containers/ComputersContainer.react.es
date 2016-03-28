'use strict';

import React, { Component, PropTypes } from 'react';
import {
    Accordion,
    Panel,
    Well,
    ListGroupItem,
    ListGroup
} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as computersActions from 'actions/computers';

function mapStateToProps(state) {
    return {
        computers: state.computers.computers,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...computersActions,
    }, dispatch);
}

class ComputersTable extends Component {
    constructor(props) {
        super(props);
        this.props.getAllComputers();
    }

    render() {
        let computers = this.props.computers;
        return (
            <section>
                <Well>Here is all list of our computers</Well>
                <div>
                    <Accordion>
                    {
                        computers.map((computer, index) => {
                            const header = `${computer.mark} - ${computer.model}`;
                            return <Panel bsStyle="success" header={header} eventKey={header} key={index}>
                                <ListGroup>
                                    <ListGroupItem header="Color" bsStyle="info">{computer.color}</ListGroupItem>
                                    <ListGroupItem header="wi-fi" bsStyle="info">{computer.wifi}</ListGroupItem>
                                    <ListGroupItem header="Is Laptop ?" bsStyle="info">{computer.isLaptop ? 'Yes' : 'No'}</ListGroupItem>
                                    <ListGroupItem header="Diagonal of monitor" bsStyle="info">{computer.diagonal}</ListGroupItem>
                                    <ListGroupItem header="Number of cores" bsStyle="info">{computer.coresNumber}</ListGroupItem>
                                    <ListGroupItem header="Number of USB2 ports" bsStyle="info">{computer.usb2}</ListGroupItem>
                                    <ListGroupItem header="Number of USB3 ports" bsStyle="info">{computer.usb3}</ListGroupItem>
                                    <ListGroupItem header="RAM" bsStyle="info">{computer.ram}</ListGroupItem>
                                    <ListGroupItem header="Memory" bsStyle="info">{computer.memory}</ListGroupItem>
                                    <ListGroupItem header="Type of videocard" bsStyle="info">{computer.videocard}</ListGroupItem>
                                    <ListGroupItem header="Video Memory" bsStyle="info">{computer.videomemory}</ListGroupItem>
                                    <ListGroupItem header="Operating System" bsStyle="info">{computer.operatingSystem}</ListGroupItem>
                                    <ListGroupItem header="Price" bsStyle="info">{computer.price}</ListGroupItem>
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

ComputersTable.propTypes = {
    getAllComputers: PropTypes.func.isRequired,
    computers: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ComputersTable);