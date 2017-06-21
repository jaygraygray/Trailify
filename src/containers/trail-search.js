import React, { Component } from 'react';
import { getTrailData } from '../ducks/trail';
import { connect } from 'react-redux';
import { createHashHistory } from 'history'
// import { Link } from 'react-router-dom';

export const history = createHashHistory();

class TrailSearch extends Component {

  constructor(props) {
  super(props);

  this.state = {
    trailData: {},
    searchCity: '',
    searchState: '',
    searchActivity: ''
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
  }
  else {
    alert("Please search for a city, state, and activity type");
  }

  // Reset values on "Search".

  const cityInput = document.getElementById('city-search');
  const stateInput = document.getElementById('state-search');
  const activityInput = document.getElementById('activity-search');

  cityInput.value = '';
  stateInput.value = '';
  activityInput.value = 'select';

  // Reset state? I don't think so since we want to
  // pass it down as props into different views. -TG

  // this.setState({searchCity: '', searchState: '', searchActivity: ''});
  history.push('./results')
}

render() {

  const TrailData = this.props.info.map((data, i) => (
      <div key={i}>{data.name}</div>
    ))
    // console.log(this.props.info);

return (
  <div className="trail-search">

    <div className="search-input">
      <h4>Search for a Trail:</h4>
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
        <button onClick={this.searchOnClick}>Search</button>
        {this.props.loading ? 'Loading...' : TrailData}
      
    </div>

  </div>
);

  }
}

// Get data from reducer and action creator.

function mapStateToProps(state) {
    return {
      info: state.trailReducer.trailData,
      loading: state.trailReducer.loading
    }
  }

export default connect(mapStateToProps, {getTrailData})(TrailSearch);
