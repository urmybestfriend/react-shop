import React from 'react';
import {AppBar} from 'material-ui';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Input, Button } from 'react-bootstrap';
import { Router, Route, Link, browserHistory } from 'react-router'

export default class HeaderContainer extends React.Component {
    render() {
        return (
            <Navbar inverse>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">Main</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<NavItem eventKey={1} href="#">About</NavItem>
						<NavItem eventKey={2} href="#">F.A.Q.</NavItem>
						<NavDropdown eventKey={3} title="Find" id="basic-nav-dropdown">
							<MenuItem eventKey={3.1}><Link to='/phones'>Phones</Link></MenuItem>
							<MenuItem eventKey={3.2}>Computer</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={3.3}>Something else ...</MenuItem>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
        );
    }
}
