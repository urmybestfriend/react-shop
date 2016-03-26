'use strict';

import React from 'react';
import {
    Button,
    Modal,
    Input
} from 'react-bootstrap';

export default class BaseModal extends React.Component {
    constructor(props) {
        super(props);
        this.showModal = false;
    }

    close = async () => {
        console.log('close modal add phone');
        this.showModal = false;
        this.forceUpdate();
    }

    open = () => {
        this.showModal = true;
        this.forceUpdate();
    }

    render() {

        return (
            <div>

                <Button
                    bsStyle="primary"
                    onClick={this.open}
                    >
                    Add new phone
                </Button>

                <Modal show={this.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Please add data about new phone</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Please, type fill information</h4>
                        <Input type="text" ref="mark" placeholder="mark"/>
                        <Input type="text" ref="model" placeholder="model"/>
                        <Input type="text" ref="color" placeholder="color"/>
                        <Input type="text" ref="wifi" placeholder="wifi"/>
                        <hr/>
                        <Input type="number" ref="width" placeholder="width"/>
                        <Input type="number" ref="height" placeholder="height"/>
                        <Input type="number" ref="coresNumber" placeholder="coresNumber"/>
                        <Input type="number" ref="ram" placeholder="ram"/>
                        <Input type="number" ref="memory" placeholder="memory"/>
                        <Input type="number" ref="camera" placeholder="camera"/>
                        <Input type="checkbox" label="Has gps" ref="gps"/>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Save phone</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}