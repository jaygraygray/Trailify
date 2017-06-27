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
                                Trailify was made by a team of senior student developers at DevMountain a coding bootcamp at the heart of the Wasatch Mountains in Provo, UT. This Website was made to exemplify there skills they’ve learned during there time at DevMountain. If you would like to inquire about this site please feel free to contact any of the emails at the bottom of the webpage.
                            </p>
                        </div>
                      </div>
                </main>
                <div className="linkedin-links">
                  <div className="chase-link">
                    <img className="chase-photo" src={chase}/>
                  </div>
                  <div className="taylor-link">
                    <img className="taylor-photo" src={taylor}/>
                  </div>
                  <div className="brian-link">
                    <img className="brian-photo" src={brian}/>
                  </div>
                  <div className="david-link">
                    <img className="david-photo" src={david}/>
                  </div>
                </div>
            </section>
        );
    }
}

export default About;
