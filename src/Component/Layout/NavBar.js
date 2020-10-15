import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { history } from "../HistoryUtil";
import signinCred from "../MockData/signinCred";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.signout = this.signout.bind(this);
    }
    signout(e) {
        e.preventDefault()
        localStorage.removeItem('access-token')
        history.push('/signin');
    }
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" style= {{ 'background-color': '#1BA1E2' }}>
                    <Navbar.Brand>
                        Dashboard
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto" />
                        <Nav>
                            <NavDropdown title={signinCred.fullname} id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={this.signout}><i className="fas fa-sign-out-alt"/>&nbsp;Sign out</NavDropdown.Item>
                                <NavDropdown.Item href="#"><i className="fas fa-users"/>&nbsp;Profile</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
