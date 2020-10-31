import React, { useEffect, useState } from 'react';
import {  Col, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logos/logo.png';
const Header = () => {
    const [task, setTask]= useState([]);
    useEffect(()=>{
        fetch('https://dry-dusk-16500.herokuapp.com/volunteer')
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
            </Navbar>

            <Row>
            {
                task.map(task =>                    
                        <Col md={6} key={task.id}  id='task'>
                            <div>
                                <img src={task.photo} alt="" className="photo" />
                                <h3>{task.description}</h3>
                                
                            </div>
                        </Col>
                        )
            }</Row>

      
   
        </div>
    );
};

export default Header;