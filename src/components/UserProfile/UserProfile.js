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
  this.setState({user: this.props.userInfo});
}

    render() {

        return (
          <section className="profile-container">
          <div className="user-contain">
            <div className="user-info">
            <br />
            <br />
            <br />
            <br />
              <img className="profile-picture" src={this.props.userInfo.picture} />
              <h1 className="welcome-message">{this.props.userInfo ? this.props.userInfo.user_first_name + ' ' + this.props.userInfo.user_last_name : "User info not found"}</h1>
            </div>
          </div>
          <div className="favorite-bar">
            <div className="favorite-title">Favorite Trails</div>
          </div>
          <div className="favorite-trails-container">

          </div>
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
