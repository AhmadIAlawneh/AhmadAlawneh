import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import s16 from '../../assets/S16.jpg'
class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a style={{ color: 'white' }} className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Recipe
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Feedback
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <div className="logo">
                    <img src={s16} alt="logo" />
                  </div>
                </a>
              </li>
              <li className="nav-item">
                    <Link to="/faq" className="nav-link">
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <ul className="navbar-nav navbar-right">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;