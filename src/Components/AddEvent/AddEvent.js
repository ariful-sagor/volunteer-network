import React from 'react';
import logo from '../../logos/logo.png';
import volunteer from '../../logos/users-alt 1.png';
import add from '../../logos/plus 1.png';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const AddEvent = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    fetch('https://dry-dusk-16500.herokuapp.com/addTask', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(result => console.log(result))
  };
  return (
    <div className="container">
      <Link to="/">
        <img src={logo} id="logo" href='/header' alt="logo" />
      </Link>
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
        <form onSubmit={handleSubmit(onSubmit)} className="wasValidated">
          <div className="form-row">
            <div className="col-md-6">
              <label>Event Title</label>
              <input type="text" name="name" placeholder="Enter title" className={`form-control ${errors?.name ? 'is-invalid' : null}`} ref={register({ required: { value: true, message: 'This field cannot be empty.' } })} />
              <div className="invalid-feedback">{errors?.name?.message}</div>
            </div>
            <div className="col-md-6">
              <label>Event Date</label>
              <input type="date" name="date" className="form-control" ref={register} />
            </div>
            <div className="col-md-6 mt-3">
              <label>Description</label>
              <input type="text" name="description" placeholder="Enter Designation" className={`form-control ${errors?.description ? 'is-invalid' : null}`} ref={register({ required: { value: true, message: 'This field cannot be empty.' } })} />
              <div className="invalid-feedback">{errors?.description?.message}</div>
            </div>
            <div className="col-md-6 mt-3">
              <label>Insert Image</label>
              <br />
              <input type="file" accept="image/*"  ref={register({ required: { value: true, message: 'This field cannot be empty.' } })} />
              <div className="invalid-feedback">{errors?.photo?.message}</div>
            </div>

          </div>
          <input type="submit" value="Submit" className="btn btn-primary mt-3"/>
        </form>
      </div>
    </div>
    </div>
  );
};

export default AddEvent;