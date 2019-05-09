import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className='navbar navbar-light bg-light d-flex'>
          <Link className='navbar-brand' to='/'>
            Hotel Luxury
          </Link>
          <ul className='navbar-nav flex-row '>
            <li className='nav-item'>
              <Link to='/' className='nav-link p-4'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/rooms' className='nav-link p-4'>
                Rooms
              </Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
export default Navbar;
