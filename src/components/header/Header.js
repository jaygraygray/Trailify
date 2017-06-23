import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Header.css';


class Header extends Component {
    render() {
        return (
            <div>
              <ul className="navbar">
                <img src="./white-logo-nav.png" alt=""></img>
                <li><Link to="/" className="text">HOME</Link></li>
                <li><Link to="/about" className="text">ABOUT</Link></li>
                <li>LOGIN/REGISTER</li>
              </ul>
            </div>
        );
    }
}

export default Header;
