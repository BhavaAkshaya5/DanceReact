import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <h2>Aksh DanceHub</h2>
      </div>

      <nav>

        <ul className="nav-links">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/classes">Classes</Link>
          </li>

          <li>
            <Link to="/gallery">Gallery</Link>
          </li>

          <li>
            <Link to="/student-dashboard">Student Portal</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          
<li>
    <Link to="/admission">Admission Form</Link>
</li>


        </ul>

      </nav>

      <Link to="/login">
        <button className="login-btn">
          Login
        </button>
      </Link>

    </header>
  );
}

export default Navbar;

