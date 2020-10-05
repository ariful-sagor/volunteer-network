import React from 'react';
import { Col } from 'react-bootstrap';


const Home = (task) => {
    // console.log(task.task.photo);
    // const {photo, name}= task.task;
    
    return (
        <div>
            <Col md={4}>
                <img src={task.task.photo} alt="pics"/>
            </Col>
        </div>
    );
};

export default Home;