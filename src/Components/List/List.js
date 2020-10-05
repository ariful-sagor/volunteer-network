import React, { useEffect, useState } from 'react';
import logo from '../../logos/logo.png';
import volunteer from '../../logos/users-alt 1.png';
import add from '../../logos/plus 1.png';
import { Link } from 'react-router-dom';
import './List.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const List = () => {


  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch('http://localhost:7000/volunteer')
      .then(response => response.json())
      .then(result => {
        setEvents(result);
      })
  }, []);

    return (
        <div className="container">
            <img src={logo} id="logo" alt="logo" />
              <div class="Logo">
                  <Link to="/list">
                  <img src={volunteer}  alt="logo" />
                  <h6>Volunteer resister list</h6>
                  </Link>
              </div>
              <div class="Logo">
                  <Link to='/addEvent'>
                  <img src={add} alt="logo" />
                  <h6>add event</h6>
                  </Link>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="row py-3 bg-light rounded">
                    <div className="col-md">
                    <span className="text-black-50">Name</span>
                    </div>
                    <div className="col-md">
                    <span className="text-black-50">Email ID</span>
                    </div>
                    <div className="col-md">
                    <span className="text-black-50">Registating date</span>
                    </div>
                    <div className="col-md">
                    <span className="text-black-50">Volunteer list</span>
                    </div>
                    <div className="col-md">
                    <span className="text-black-50">Action</span>
                    </div>
                  </div>
                </div>
              </div>
            {
              events.map(event =>
                <div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row py-3 bg-light rounded">
                        <div className="col-md">
                      <span className="text-black-50">{event.name}</span>
                        </div>
                        <div className="col-md">
                      <span className="text-black-50">{event.email}</span>
                        </div>
                        <div className="col-md">
                        <span className="text-black-50">{event.date}</span>
                        </div>
                        <div className="col-md">
                        <span className="text-black-50">{event.description}</span>
                        </div>
                        <div className="col-md">
                        <span style={{cursor: 'pointer'}} className="d-inline-block bg-danger rounded text-white-50 px-2 py-1 delete-btn">
                          <FontAwesomeIcon icon={faTrash} />
                        </span>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
          
                  )
                }
    
        </div>

  );

};

export default List;