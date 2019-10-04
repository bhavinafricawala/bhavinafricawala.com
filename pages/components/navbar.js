import React from 'react';
import '../bootstrap.min.css';
import '../App.css';
import { Link } from 'react-browser-router';

const NavigationBar=({ pagename }) =>{
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-bg-dark fixed-top">
      <span className="navbar-brand">
        <Link to="/">
          <img
            src="images/android-chrome-192x192.png"
            alt="Bhavin Africawala"
            width="45"
            height="45"
            className="d-inline-block align-middle"
          />
        </Link>
        <span className="navbar-brand mb-0 h2"><Link className="brand-color" to="/">Bhavin Africawala</Link></span>
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsingNavbar"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="navbar-collapse collapse" id="collapsingNavbar">
        <ul className="navbar-nav ml-auto ">
          <li
            className={
              pagename === 'about' ? 'nav-item active' : 'nav-item'
            }
          >
            <Link className="nav-link link" to="/about">
                About
            </Link>

          </li>
          <li
            className={
              pagename === 'contact' ? 'nav-item active' : 'nav-item'
            }
          >
            <Link className="nav-link link" to="/contact">
                Contact
            </Link>

          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
