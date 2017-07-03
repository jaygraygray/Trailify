import React, {Component} from 'react';
import axios from 'axios';
import './Newsletter.css';

class Newsletter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    }

    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleEmail(event) {
    this.setState({email: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()

    axios.post('/contactus', {email: this.state.email}).then(function(response) {
      console.log(response);
    }).catch(function(error) {
      console.log(error);
    });

  }
  render() {
    return (
      <div >
        <h2 className="footer-headline">Newsletter</h2>
        <h3 className="newsletter-headline">Subscribe to our newsletter to stay up to date!</h3>
        <form onSubmit={this.handleSubmit}>
          <input id="email-input" type="email" placeholder="E-MAIL" value={this.state.email} onChange={this.handleEmail} required/>
          <input id="email-submit" type="submit"/>
        </form>
      </div>
    );
  }
}

export default Newsletter;
