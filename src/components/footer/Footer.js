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
                            <h4>Taylor</h4>
                                <br />
                                tgriffith14@hotmail.com
                            <h4>Chase</h4>
                                <br />
                                chasederr@gmail.com
                            <h4>David</h4>
                            <br />
                                davidtagholmes@gmail.com
                            <h4>Brian</h4>
                            <br />
                                brianinhtran@outlook.com
                        </div>
                    </div>
                </main>
            </section>
        );
    }
}

export default Footer;
