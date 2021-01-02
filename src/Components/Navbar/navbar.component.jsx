import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
//import "./navbar.css";
import { Link, BrowserRouter } from "react-router-dom";
class NavbarComponent extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light" href="#" >
                <a className="navbar-brand">
                    <BrowserRouter>
                        <Link to="/">
                            <img
                                src="/Assets/Icons/logo.png"
                                width="35"
                                height="35"
                                className="d-inline-block align-top"
                                alt=""
                            />
                        </Link>
                    </BrowserRouter>
                    <div className="text-align-center d-inline-block pl-2">Fortune Teller</div>
                </a>
                <div className="navbar_container">
                    <Navbar bg="light" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto" >
                                <Nav.Link href="#home"style={{color:"blue"}}>HOME</Nav.Link>{" "}
                                <Nav.Link href="#about" style={{color:"blue"}}>ABOUT</Nav.Link>{" "}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </nav>
        );
    }
}
export default NavbarComponent;