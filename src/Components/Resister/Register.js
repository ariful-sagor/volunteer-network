import React, { useContext, useEffect, useState } from 'react';
import { Button,  Form} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';

import logo from '../../logos/logo.png';
import './Register.css';


const Register = () => {
    const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    fetch('http://localhost:7000/addVolunteer', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(result => console.log(result))
  };
    const { taskId } = useParams();
    const [Task,setTask]= useState([]);
    
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);

    useEffect(()=>{
        fetch('http://localhost:7000/tasks/'+ taskId)
        .then(res=> res.json())
        .then(data=>{
            setTask(data);
            alert("Registration successfully")
        })
    },[])
    console.log(Task);
    

    
    const handleBlur=(event) => {
        
    }
    return (
        <div className="container" >
            <img src={logo} id="logo" alt="logo" />
            <div id="login">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h3  style={{textAlign:"center"}}>Register as a Volunteer</h3>
                    <br />
                    <Form.Group >
                        <Form.Control type="text" name='name' ref={register({ required: { value: true, message: 'This field cannot be empty.' } })} onBlur={handleBlur} defaultValue={loggedInUser.name} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Control type="email" onBlur={handleBlur} ref={register({ required: { value: true, message: 'This field cannot be empty.' } })} name="email" defaultValue={loggedInUser.email} />
                    </Form.Group>
                    <Form.Group>
                        <input required className="form-control" type="date" id="dateTo" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Control type="text" onBlur={handleBlur} ref={register({ required: { value: true, message: 'This field cannot be empty.' } })} name="description" defaultValue={Task.name} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Control type="text" onBlur={handleBlur} ref={register({ required: { value: true, message: 'This field cannot be empty.' } })} name="books" placeholder="Organize books at the library" />
                    </Form.Group>
                    <Button variant="primary" type="submit" value="submit" href="/listTask">
                        <h5>Register</h5>
                    </Button>
                    <br />
                    
                    </Form>
                </div>
        </div>
    );
};

export default Register;
