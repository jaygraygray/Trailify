import React, { Component } from 'react';
import { getUserInfo } from '../../ducks/user';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './UserProfile.css';


class UserProfile extends Component {

  constructor(props) {
  super(props);

  this.state = {
    user: {}
  }

}

componentDidMount() {
  this.props.getUserInfo();
  this.setState({user: this.props.userInfo})
}

    render() {

        return (
          <section className="profile-container">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
            <h1 className="welcome-message">Hello, {this.props.userInfo.displayName}!</h1>
            <img src={this.props.userInfo.picture} />
          </section>
        );
    }
}

function mapStateToProps(state) {
    return {
      userInfo: state.userLoginReducer.userData,
      loading: state.userLoginReducer.loading
    }
  }

export default connect(mapStateToProps, {getUserInfo})(UserProfile);
