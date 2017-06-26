import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="navbar">
              <img className="logo" src="./white-logo-nav.png" alt=""></img>
              <ul >
                <li className="nav-link"><Link to="/" className="text">HOME</Link></li>
                <li className="nav-link"><Link to="/about" className="text">ABOUT</Link></li>
                <li className="nav-link"><a href="http://localhost:5000/auth">LOGIN/REGISTER</a></li>
              </ul>
            </div>
        );
    }
}

export default Header;
