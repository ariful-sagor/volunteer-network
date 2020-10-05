import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import logo from '../../logos/logo.png';
import { Link } from 'react-router-dom';
const NotFound = () => {
    
    return (
        <div className="container">
            <Navbar  expand="lg">
                <Link to="/">
                    <img src={logo} id="logo" href='/header' alt="logo" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link className="link" href="/">Home</Nav.Link>
                    <Nav.Link className="link" href="#link">Donation</Nav.Link>
                    <Nav.Link className="link" href="#link">Event</Nav.Link>
                    <Nav.Link className="link" href="#link">Blog</Nav.Link>
                    <Button className="btn" variant="primary" href="/login">Register</Button>
                    <Button variant="dark" href="/list">Admin</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
            <div style={{justifyContent: 'center', margin:'30px 30px'}}>
                <img style={{width: '100%', height: '100%'}} src="https://miro.medium.com/max/4038/1*uVW5KIjt28G-gEsrjqArRw.jpeg" alt="not found"/>

            </div>

            

      
   
        </div>
    );
};

export default NotFound;