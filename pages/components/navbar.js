import React from 'react';
import '../stylesheets/bootstrap.min.css';
import '../stylesheets/App.css';


const NavigationBar=({ pagename }) =>{
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-bg-dark fixed-top">
      <span className="navbar-brand">
        <a href="/">
          <img
            src="images/android-chrome-192x192.png"
            alt="Bhavin Africawala"
            width="45"
            height="45"
            className="d-inline-block align-middle"
          />
        </a>
        <span className="navbar-brand mb-0 h2"><a className="brand-color" href="/">Bhavin Africawala</a></span>
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
            <a className="nav-link link" href="/about">
                About
            </a>

          </li>
          <li
            className={
              pagename === 'contact' ? 'nav-item active' : 'nav-item'
            }
          >
            <a className="nav-link link" href="/contact">
                Contact
            </a>

          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
