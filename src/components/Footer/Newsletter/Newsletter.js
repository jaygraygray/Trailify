import React, { Component } from 'react';

import './newsletter.css';

class Newsletter extends Component {
    render() {
        return (
          <div >
              <form>
                <input type="email" placeholder="Email Address"/>
                <input type="submit" value="SUBMIT"/>
              </form>
          </div>
        );
    }
}

export default Newsletter;
