import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import './Header.css';

class Header extends Component {
    render() {
      const {location, match, history} = this.props;
      console.log(location, match, history);
        return (
            <div className="navbar">
              <img className="logo" src="./white-logo-nav.png" alt=""></img>
              <ul>
                <Link to="/" className="text"><li className="nav-link">HOME</li></Link>
                <Link to="/about" className="text"><li className="nav-link">ABOUT</li></Link>
                <a href="http://localhost:5000/auth"><li className="nav-link">LOGIN/REGISTER</li></a>
              </ul>
            </div>
        );
    }
}

export default withRouter(Header);
