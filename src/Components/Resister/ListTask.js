import React, { useEffect, useState } from 'react';
import { Button, Col, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import logo from '../../logos/logo.png';
import { Link } from 'react-router-dom';
const Header = () => {
    const [task, setTask]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:7000/volunteer')
        .then(res=> res.json())
        .then(data=>{
            setTask(data)
        })
    })
    return (
        <div className="container">
            <Navbar  expand="lg">
                <img src={logo} id="logo" alt="logo" />
            </Navbar>

            <Row>
            {
                task.map(task =>                    
                        <Col sm={6} key={task.id}  id='task'>
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