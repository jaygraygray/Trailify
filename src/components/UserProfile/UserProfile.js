import React, { Component } from 'react';
import { getUserInfo } from '../../ducks/user';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class UserProfile extends Component {

  constructor(props) {
  super(props);

  this.state = {
    userData: {}
  }
}

    render() {

        return (
          <section className="profile-container">
            <div className="welcome-message">Hello, {this.props.info}!</div>
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
