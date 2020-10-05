import React from 'react';
import logo from '../../logos/logo.png';
import volunteer from '../../logos/users-alt 1.png';
import add from '../../logos/plus 1.png';
import { Link } from 'react-router-dom';
const Admins = () => {

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
        </div>
    )
}

export default Admins;