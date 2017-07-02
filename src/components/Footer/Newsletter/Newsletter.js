import React, {Component} from 'react';

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

    let reqBody = {
      email: this.state.email
    };

    fetch('/contactus', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Something went wrong with your fetch');
      }
    }).then((json) => {
      console.log(json);
    })
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
