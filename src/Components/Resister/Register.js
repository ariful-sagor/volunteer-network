import React, { useContext, useEffect, useState } from 'react';
import { Button,  Col,  Form, Nav, Row} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

import logo from '../../logos/logo.png';
import './Register.css';


const Register = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        fetch('https://dry-dusk-16500.herokuapp.com/addVolunteer', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
          .then(response => response.json())
          .then(result => console.log(result))
          
          alert("Register Successfull")
          
      };
      
      


    const { taskId } = useParams();
    const [Task,setTask]= useState([]);
    
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);

    useEffect(()=>{
        fetch('https://dry-dusk-16500.herokuapp.com/tasks/'+ taskId)
        .then(res=> res.json())
        .then(data=>{
            setTask(data);
        })
    },[])

    
    return (
        <div className="container" >
            <Row style={{marginTop:'20px'}}>
                <Col sm={8}>
                    <Link to="/">
                        <img src={logo} id="logo" href='/header' alt="logo" />
                    </Link>
                </Col>
                <Col sm={4}>
                    <Nav.Link className="link" href="/listTask">My Tasks</Nav.Link>
                </Col>
            </Row>
            

            <div id="login">
                <h3>Register as a Volunteer</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="wasValidated">
                <div className="form-row">
                    <div >
                        <label>Full Name</label>
                        <input type="text" name="name" defaultValue={loggedInUser.name} required  className={`form-control ${errors?.name ? 'is-invalid' : null}`} ref={register({ required: { value: true, message: 'This field cannot be empty.' } })} />
                        <div className="invalid-feedback">{errors?.name?.message}</div>
                    </div>
                    <div >
                        <label>Username or Email</label>
                        <input type="text" name="email" defaultValue={loggedInUser.email} required className={`form-control ${errors?.name ? 'is-invalid' : null}`} ref={register({ required: { value: true, message: 'This field cannot be empty.' } })} />
                        <div className="invalid-feedback">{errors?.name?.message}</div>
                    </div>
                    <div>
                        <label>Date</label>
                        <input type="date" name="date" className="form-control" required ref={register} />
                        <div className="invalid-feedback">{errors?.name?.message}</div>
                    </div>
                    <div >
                        <label>Description</label>
                        <input type="text" name="description" defaultValue={Task.name} required className={`form-control ${errors?.name ? 'is-invalid' : null}`} ref={register({ required: { value: true, message: 'This field cannot be empty.' } })} />
                        <div className="invalid-feedback">{errors?.name?.message}</div>
                    </div>
                    <div>
                        <label>Organize books at the library</label>
                        <input type="text" name="books" required className={`form-control ${errors?.name ? 'is-invalid' : null}`} ref={register({ required: { value: true, message: 'This field cannot be empty.' } })} />
                        <div className="invalid-feedback">{errors?.name?.message}</div>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary mt-3" />
                </div>
            </form>
                </div>
        </div>
    );
};

export default Register;
