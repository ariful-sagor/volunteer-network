import React from 'react';
import { Col } from 'react-bootstrap';


const Home = (task) => {
    
    return (
        <div>
            <Col md={4}>
                <img src={task.task.photo} alt="pics"/>
            </Col>
        </div>
    );
};

export default Home;