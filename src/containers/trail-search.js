import React, { Component } from 'react';
import { getTrailData } from '../ducks/trail';
import { connect } from 'react-redux';

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

searchOnClick(event) {
  event.preventDefault();


  if (this.state.searchCity && this.state.searchState && this.state.searchActivity) {
    this.props.getTrailData(this.state.searchCity, this.state.searchState, this.state.searchActivity);
  }
  else {
    alert("Please search for a city, state, and activity type");
  }

  // Reset search values on click

  const cityInput = document.getElementById('city-search');
  const stateInput = document.getElementById('state-search');
  const activityInput = document.getElementById('activity-search');

  cityInput.value = '';
  stateInput.value = '';
  activityInput.value = 'select';

  // Reset state? I don't think so since we want to
  // pass it down as props into different views. -TG

  // this.setState({searchCity: '', searchState: '', searchActivity: ''});

}

render() {

  const TrailData = this.props.info.map((data, i) => (
      <div key={i}>{data.name}</div>
    ))

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

function mapStateToProps(state) {
    return {
      info: state.trailReducer.trailData,
      loading: state.trailReducer.loading
    }
  }

export default connect(mapStateToProps, {getTrailData})(TrailSearch);
