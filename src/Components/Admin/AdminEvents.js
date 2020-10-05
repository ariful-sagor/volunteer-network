import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const AdminEvent = (props) => {
    console.log(props.events[0])
  const { name, email, description } = props.events;

  const deleteEvent = id => {
    fetch(`http://localhost:7000/volunteer/${id}`)
      .then(response => response.json())
      .then(result => console.log(result));
  }

  return (
    <div className="col-md-12">
      <div className="row py-3 align-items-center">
        <div className="col-md">
          <span className="text-black">{name}</span>
        </div>
        <div className="col-md">
          <span className="text-black">{email}</span>
        </div>
        {/* <div className="col-md">
          <span className="text-black">{date}</span>
        </div> */}
        <div className="col-md">
          <span className="text-black">{description}</span>
        </div>
        {/* <div className="col-md">
          <span onClick={() => deleteEvent(_id)} className="d-inline-block bg-danger rounded text-white-50 px-2 py-1 delete-btn">
            <FontAwesomeIcon icon={faTrash} />
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default AdminEvent;