import React, {Component} from 'react';
import axios from 'axios';
import './newsletter.css';

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
    console.log(event.target.value);
    this.setState({email: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()

    axios.post('/contactus', {
      email: this.state.email
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit} >
          <input type="text"
            placeholder="E-MAIL"
            value={this.state.email}
            onChange={this.handleEmail} required/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Newsletter;
