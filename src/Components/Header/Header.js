import React, { useEffect, useState } from 'react';
import './Header.css'
import { Button, Col, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import logo from '../../logos/logo.png';
import { Link } from 'react-router-dom';
const Header = () => {
    const [task, setTask]= useState([]);
    useEffect(()=>{
        fetch('https://dry-dusk-16500.herokuapp.com/tasks')
        .then(res=> res.json())
        .then(data=>{
            setTask(data)
        })
    })
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
            
            <h3 className="search">Grow By Helping People In Need</h3>

            <Form inline id="searchBar">
                <FormControl type="text" placeholder="Search"/>
                <Button variant="primary">Search</Button>
            </Form>

            <Row>
            {
                task.map(task =>                    
                        <Col sm={3} key={task._id}  id='task'>
                            <div>
                                <Link to={"/register/"+ task.id} >
                                    <img src={task.photo} alt="" className="photo" />
                                    <h3>{task.name}</h3>
                                </Link>
                            </div>
                        </Col>
                        )
            }
            </Row>

      
   
        </div>
    );
};

export default Header;