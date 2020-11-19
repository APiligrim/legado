import React,{Component} from 'react'; 
import {MenuItems} from "./MenuItems"
import {Button} from './Button';
import './navbar.css';
import logo from './img/logo.png'
import { render } from '@testing-library/react';


class Navbar extends Component{
    state = { clicked: false}

    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className="navbar-items">
                <h1 className="navbar-logo"> Legado</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active": 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={ImageBitmapRenderingContext}> 
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a> 
                            </li>
                        )
                    })}
                </ul>
                <Button> Sign Up</Button>
            </nav>
        )
    }    
}
export default Navbar;


// import React from 'react'; 
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// import './navbar.css';
// import logo from './img/logo.png'
// function Menu() {
//     return (
//         <Navbar sticky="top" collapseOnSelect expand="lg" className=" text-style">

//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-center">
//                 <Nav className="justify-content-center " activeKey="/home">
//                     <Nav.Link href="#features">About</Nav.Link>
//                     <Nav.Link href="#pricing">How it Works</Nav.Link>

//                     <NavDropdown title="Subjects" id="collasible-nav-dropdown">
//                         <NavDropdown.Item href="#action/3.1">Business</NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.2">STEM</NavDropdown.Item>
//                     </NavDropdown>
//                     <Navbar.Brand href="#home"><img src={logo} className="legado-logo justify-content-center r" alt="logo" /></Navbar.Brand>
//                     <Nav.Link href="#pricing">Pricing</Nav.Link>
//                     <Nav.Link href="#pricing">Contact</Nav.Link>
//                     <Nav.Link href="#pricing"><button className='button-style'>Sing In</button></Nav.Link>
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
        
//     );
// }
// export default Menu;

// <Navbar.Brand href="#home"><img src={logo} className="legado-logo justify-content-center" alt="logo" /></Navbar.Brand>

// <Navbar sticky="top" collapseOnSelect expand="lg" className="justify-content-center"></Navbar>