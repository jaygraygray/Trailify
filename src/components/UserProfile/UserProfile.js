import React, { Component } from 'react';
import { getUserInfo } from '../../ducks/user';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './UserProfile.css';
import { getFavoriteTrails } from '../../ducks/favorites';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { Redirect } from 'react-router-dom';
import { removeFromFavorites } from '../../services/favorites';


class UserProfile extends Component {

  constructor(props) {
  super(props);

  this.state = {
    user: {},
    favorites: {},
    shouldRedirect: false
  }

}


componentDidMount() {

  var outsideContext = this;
  // DB Call Functions//
  this.props.getUserInfo().then(() => {
    outsideContext.props.getFavoriteTrails(outsideContext.props.userInfo.user_id);
  });

    // Set State //

  this.setState({favorites: this.props.favoriteTrails, user: this.props.userInfo});

  }

  removeFromFavorites(index) {
    removeFromFavorites(this.props.favoriteTrails[index].user_id, this.props.favoriteTrails[index].unique_id);
    console.log('REMOVE BY:', this.props.favoriteTrails[index].user_id, this.props.favoriteTrails[index].unique_id);
  }

    render() {


      // Name Filter //

      const filteredName = (str) => {
        let filtered = str.replace(/&amp;/gi, "and");
        return filtered;
       }

      console.log("Fav Trails Mapping:", this.props.favoriteTrails.map((data, i) => {
        return data
      }));

      const FavoriteTrails = this.props.favoriteTrails.map((data, i) => (
        <div className="fav-contain">
          <div className="fav-trail-items" key={i}>
            <Link id="details-link" to={`/details/${data.unique_id}`}>

            <h2 id="fav-name">{filteredName(data.name)}</h2>
            <h4 id="fav-rating">Rating: {data.rating > 0 ? data.rating + "/5" : "N/A"}</h4>
            <h4 id="fav-length">Length: {data.length > 0 ? data.length + " mi" : "N/A"}</h4>
            </Link>
            </div>
            <div className="fav-remove-contain"><button id="remove-from-favorites" onClick={() => this.removeFromFavorites(i)}>Remove</button></div>
            </div>
        ))


        return (
          <section className="profile-container">
          <div className="user-contain">
            <div className="user-info">
              <img className="profile-picture" src={this.props.userInfo.picture} />
              <h1 className="welcome-message">{this.props.userInfo ? this.props.userInfo.user_first_name + ' ' + this.props.userInfo.user_last_name : "User info not found"}</h1>
            </div>
          </div>
          <div className="favorite-bar">
            <div className="favorite-title">Favorite Trails</div>
          </div>
          <div className="favorite-trails-container">
              <div>{this.props.loading ? <LoadingScreen /> : FavoriteTrails}</div>
          </div>
          </section>
        );
    }
}

function mapStateToProps(state) {
    return {
      favoriteTrails: state.favReducer.favoriteTrails,
      userInfo: state.userLoginReducer.userData,
      loading: state.userLoginReducer.loading
    }
  }

export default connect(mapStateToProps, {getUserInfo, getFavoriteTrails})(UserProfile);
