import React, { Component } from 'react';
import { getTrailData } from '../ducks/trail';
import { getWeatherData } from '../ducks/weather';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class TrailSearch extends Component {

  constructor(props) {
  super(props);

  this.state = {
    trailData: {},
    searchCity: '',
    searchState: '',
    searchActivity: '',
    shouldRedirect: false,
    weather: {}
  }

  this.handleCitySearch = this.handleCitySearch.bind(this);
  this.handleStateSearch = this.handleStateSearch.bind(this);
  this.handleActivitySearch = this.handleActivitySearch.bind(this);
  this.searchOnClick = this.searchOnClick.bind(this);
}

// Set state of search inputs.

handleCitySearch(event) {
  this.setState({
    searchCity: event.target.value,
  })
}

handleStateSearch(event) {
  this.setState({
    searchState: event.target.value
  })
}

handleActivitySearch(event) {
  this.setState({
    searchActivity: event.target.value
  })
}

// Search function to be run when "Submit button is clicked".
searchOnClick(event) {
  event.preventDefault();

  // Check to make sure values to be passed to the API have been entered and selected.
  // If they are, run API call. If not, alert user.

  if (this.state.searchCity && this.state.searchState && this.state.searchActivity) {
    this.props.getTrailData(this.state.searchCity, this.state.searchState, this.state.searchActivity);
    this.props.getWeatherData(this.state.searchCity);
    this.setState({
      shouldRedirect: true
    });
  }

  else {
    alert("Please search for a city, state, and activity type");
  }
}



render() {
  if (this.state.shouldRedirect) {
    return <Redirect to="/results" />
  }
  else{



return (

  <div className="trail-search">

    <div className="search-input">
      <input id="city-search"
      onChange={this.handleCitySearch}
      placeholder="City" />
      <input id="state-search"
      onChange={this.handleStateSearch}
      placeholder="State" />
      <select id="activity-search"
        onChange={this.handleActivitySearch}
        placeholder="Select activity">
          <option value="select">Select activity</option>
          <option value="hiking">Hiking</option>
          <option value="mountain biking">Mountain Biking</option>
      </select>
      <br />
      <button onClick={this.searchOnClick}>SUBMIT</button>
    </div>
  </div>

);

  }
}
}

// Get data from reducer and action creator.

function mapStateToProps(state) {
    return {
      info: state.trailReducer.trailData,
      loading: state.trailReducer.loading,
      weather: state.weatherReducer.weatherdata
    }
  }

export default connect(mapStateToProps, {getTrailData, getWeatherData})(TrailSearch);
