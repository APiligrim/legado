
import React, { useState } from "react";
 import { ReactComponent as CloseMenu } from "../img/menu.svg";
 import { ReactComponent as MenuIcon } from "../img/x.svg";
//import {ReactComponent as logo} from "./img/logo";
import "./navbar.css";
 import logo from "../img/legadologo.png";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
    <div className="logo-nav">
      <div className="logo-container">
        <a href="#">
          <img href="#main" className=" legado-logo" src={logo}></img> 
        </a>
      </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option effect-underline" onClick={closeMobileMenu}>
            <a href="#about">About Us</a>
          </li>
          <li className="option effect-underline" onClick={closeMobileMenu}>
            <a href="#how-it-works">How it Works</a>
          </li>


          <li className="option effect-underline " onClick={closeMobileMenu}>
            <a href="#contact">Contact</a>
          </li>

        </ul>
      </div>
      <ul className="signin-up">

        <li onClick={closeMobileMenu}>
          <a href="" className="signup-btn">
            Sign Up
          </a>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <MenuIcon className="menu-icon" /> 
        ) : (
          <CloseMenu className="menu-icon" />
          
        )}
      </div>
    </div>
  );
};

export default Header;


// <li className="option logo-container" src={logo}>
// <a href="#">
// <img className=" legado-logo" src={logo}></img> 
// </a>
// </li>

// <div className="logo-container">
// <a href="#">
//   <img className=" legado-logo" src={logo}></img> 
// </a>
// </div>



// <img src={logo}></img>
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