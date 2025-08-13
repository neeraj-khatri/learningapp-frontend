import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div class="navbar-outer">
      <ul class="navbar">
        <li>
            <Link to="/">Home</Link>

        </li>
        <li>
            <Link to="/about">About</Link>

        </li>
        <li>
            <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
        <li>
            <Link to="/signup">Signup</Link>
        </li>
        <li>
            <Link to="/counter">Counter</Link>
        </li>
      </ul>
      <br></br>
    </div>
  );
}

export default Navbar;