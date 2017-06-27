import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <section>
                <main className="footer-wrapper">
                  <div className="site-navigator">
                      <h2 className="footer-headline">Links</h2>
                        <h3 className="footer-links">Home</h3>
                        <h3 className="footer-links">About</h3>
                        <h3 className="footer-links">Blog</h3>
                        <h3 className="footer-links">Gear</h3>
                  </div>
                  <div className="follow-us">
                      <h2 className="footer-headline">Follow Us</h2>
                      <div className="media-container">
                          <i className="fa fa-facebook-square about-media" aria-hidden="true"></i>
                          <i className="fa fa-instagram about-media" aria-hidden="true"></i>
                          <i className="fa fa-twitter-square about-media" aria-hidden="true"></i>
                          <i className="fa fa-youtube-play about-media" aria-hidden="true"></i>
                      </div>
                  </div>
                  <div className="mailing-list">
                      <h2 className="footer-headline">Mailing List</h2>
                      <h3 className="newsletter-headline">Subscribe To Our Newsletter</h3>
                      <form>
                        <input id="email-input" type="email" placeholder="Email Address"/>
                        <input id="email-submit" type="submit" value="SUBMIT"/>
                      </form>
                  </div>
                  <div className="contact-us">
                      <h2 className="footer-headline">Contact Us</h2>
                        <div className="contact-info">
                          <div><a href="mailto:tgriffith14@hotmail.com?Subject=Hello" target="_top" className="contact-names">Taylor <span className="email-text">&nbsp;&nbsp;tgriffith14@hotmail.com</span></a></div>
                          <div><a href="mailto:chasederr@gmail.com?Subject=Hello" target="_top" className="contact-names">Chase <span className="email-text">&nbsp;&nbsp;chasederr@gmail.com</span></a></div>
                          <div><a href="mailto:davidtagholmes@gmail.com?Subject=Hello" target="_top" className="contact-names">David <span className="email-text">&nbsp;&nbsp;&nbsp;davidtagholmes@gmail.com</span></a></div>
                          <div><a href="mailto:briandinhtran@outlook.com?Subject=Hello" target="_top" className="contact-names">Brian <span className="email-text">&nbsp;&nbsp;&nbsp;&nbsp;brianinhtran@outlook.com</span></a></div>
                        </div>
                  </div>
                </main>
                <div className="copyright-wrapper">
                  <div>Copyright © | <span className="site-name">Trailify</span> | All Rights Reserved</div>
                </div>
            </section>
        );
    }
}

export default Footer;
