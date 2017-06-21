import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Header.css';


class Header extends Component {
    render() {
        return (
            <div>
              <ul className="navbar">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li>LOGIN/REGISTER</li>
              </ul>
            </div>
        );
    }
}

export default Header;
