import React from "react";
import { Navbar, NavbarBrand, Nav } from "react-bootstrap";

export default class HomeHeader extends React.Component {
    render(){
        return (
            <div>
                <Navbar style= {{ 'background-color': '#1BA1E2' }} collapseOnSelect expand="lg">
                    <NavbarBrand>Home</NavbarBrand>
                    <Navbar.Toggle aria-control="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav.Link style={{color: 'black'}}>About</Nav.Link>
                        <Nav.Link style={{color: 'black'}}>Contact</Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
