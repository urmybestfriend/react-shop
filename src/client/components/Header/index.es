import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Input, Button } from 'react-bootstrap';
import { Link } from 'react-router'

export class Header extends React.Component {
    render() {
        return (
          <div className="container">
              <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Main</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <Link to="/">
                Go to Main page
              </Link>
              <Link to="/phones">
                Go to Phones
              </Link>
              <Link to="/home" activeClassName="active">
                Go to Home
              </Link>
              <Link to="/list" activeClassName="active">
                Go to List of technologies
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
        );
    }
}