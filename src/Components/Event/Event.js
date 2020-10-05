import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';
import logo from '../../logos/logo.png';

const Event = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    console.log(loggedInUser);
    return (
        <div className="container">
            
            <Navbar  expand="lg">
                <img src={logo} id="logo" alt="logo" />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link className="link" href="#home">Home</Nav.Link>
                    <Nav.Link className="link" href="#link">Donation</Nav.Link>
                    <Nav.Link className="link" href="#link">Event</Nav.Link>
                    <Nav.Link className="link" href="#link">Blog</Nav.Link>
                    <h3 className="link">Name</h3>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Event;