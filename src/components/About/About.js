import React, { Component } from 'react';
import './About.css';

var david = require('./david.JPG')
var chase = require('./chase.jpeg')
var brian = require('./brian.png')
var taylor = require('./taylor.jpg')

class About extends Component {
    render() {
        return (
            <section>
                <div className="about-picture">
                </div>
                <main className="about-content-container">
                    <div className="about-header">
                        <h3>TRAILIFY</h3>
                         <div className="about-content-wrapper">
                            <p className="about-content">
                                Trailify was made by a team of student developers at DevMountain, a coding bootcamp at the heart of the Wasatch Mountains in Provo, UT. This website was made to exemplify the skills they’ve learned during their time at DevMountain. If you would like to inquire about this site, please feel free to contact any of the emails at the bottom of the webpage.
                            </p>
                        </div>
                      </div>
                </main>
                <div className="linkedin-links">
                  <div className="chase-link">
                    <a href="https://www.linkedin.com/in/chasederr/"><img className="chase-photo" src={chase}/><p>CHASE DERR</p></a>
                  </div>
                  <div className="taylor-link">
                    <a href="https://www.linkedin.com/in/tsgriffith/"><img className="taylor-photo" src={taylor}/><p>TAYLOR GRIFFITH</p></a>
                  </div>
                  <div className="brian-link">
                    <a href="https://www.linkedin.com/in/briandinhtran/"><img className="brian-photo" src={brian}/><p>BRIAN TRAN</p></a>
                  </div>
                  <div className="david-link">
                    <a href="https://linkedin.com/in/davidtagholmes"><img className="david-photo" src={david}/><p>DAVID HOLMES</p></a>
                  </div>
                </div>
            </section>
        );
    }
}

export default About;
