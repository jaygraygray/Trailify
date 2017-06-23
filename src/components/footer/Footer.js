import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <section>
                <main className="footer-wrapper">
                    <div className="follow-us">
                        <h2>Follow Us</h2>
                        <div className="media-container">
                            <i className="fa fa-facebook-square about-media" aria-hidden="true"></i>
                            <i className="fa fa-instagram about-media" aria-hidden="true"></i>
                            <i className="fa fa-twitter-square about-media" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="mailing-list">
                        <h2>Mailing List</h2>
                        <h3>Subscribe To Our Newsletter</h3>
                        <input placeholder="Email Address"/>
                    </div>
                    <div className="contact-us">
                        <h2>Contact Us</h2>
                        <div className="contact-info">
                            <h4 className="contact-names">Taylor <div className="name-seperate">tgriffith14@hotmail.com</div></h4>

                            <h4 className="contact-names">Chase <div className="name-seperate">chasederr@gmail.com</div></h4>

                            <h4 className="contact-names">David <div className="name-seperate">davidtagholmes@gmail.com</div></h4>

                            <h4 className="contact-names">Brian <div className="name-seperate">brianinhtran@outlook.com</div></h4>
                        </div>
                    </div>
                </main>
            </section>
        );
    }
}

export default Footer;
