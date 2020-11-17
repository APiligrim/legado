import React from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import './navbar.css';
import logo from './img/logo.png'
function Menu() {
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" className="navgiation-color text-style">

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav " className="justify-content-center  navgiation-color">
                <Nav className="justify-content-center " activeKey="/home">
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">How it Works</Nav.Link>
                    
                    <NavDropdown title="Subjects" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Business</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">STEM</NavDropdown.Item>
                    </NavDropdown>
                    <Navbar.Brand href="#home"><img src={logo} className="legado-logo justify-content-center" alt="logo" /></Navbar.Brand>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                    <Nav.Link href="#pricing"><button className='button-style'>Sing In</button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
    );
}
export default Menu;

// <Navbar.Brand href="#home"><img src={logo} className="legado-logo justify-content-center" alt="logo" /></Navbar.Brand>

// <Navbar sticky="top" collapseOnSelect expand="lg" className="justify-content-center"></Navbar>