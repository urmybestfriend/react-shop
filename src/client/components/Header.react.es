'use strict';

import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Input, Button, PageHeader } from 'react-bootstrap';
import { Link } from 'react-router'

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>                
                            <Link to="/">
                                Go to Main page
                            </Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavDropdown eventKey={3} title="Menu" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>
                                <Link to="/phones">
                                    Go to Phones
                                </Link>
                            </MenuItem>
                            <MenuItem eventKey={3.2}>
                                <Link to="/computers">
                                    Go to Computers
                                </Link>
                            </MenuItem>                  
                            <MenuItem eventKey={3.3}>
                                <Link to="/list" activeClassName="active">
                                    Go to List of technologies
                                </Link>
                            </MenuItem>
                            <MenuItem eventKey={3.4}>
                                <Link to="/home" activeClassName="active">
                                    Go Home
                                </Link>
                            </MenuItem>
                            <MenuItem eventKey={3.5}>
                                <Link to="/example" activeClassName="active">
                                    Simplest example of redux lifecycle
                                </Link>
                            </MenuItem>
                            <MenuItem divider />
                        </NavDropdown>
                    </Nav>
                    <Navbar.Form pullRight>
                        <Input type="text" placeholder="Search..." className="header__search-input"/>
                        <Button bsStyle="success" type="submit">Search</Button>
                    </Navbar.Form>
                </Navbar>
            </div>
        );
    }
}