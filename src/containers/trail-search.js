import React, { Component } from 'react';
import { getTrailData } from '../ducks/trail';
import { connect } from 'react-redux';
import YTSearch from 'youtube-api-search';
import { Redirect } from 'react-router-dom';


// Go in config

const API_Key = 'AIzaSyCznzQ0hrAD3T27CxttlpvgfZtI9ogtuvw';

YTSearch({key: API_Key, term: "insert trail and activity here"}, function(data) {
  console.log(data);
})

class TrailSearch extends Component {

  constructor(props) {
  super(props);

  this.state = {
    trailData: {},
    searchCity: '',
    searchState: '',
    searchActivity: '',
    shouldRedirect: false
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
// console.log(window.history);

  // Check to make sure values to be passed to the API have been entered and selected.
  // If they are, run API call. If not, alert user.

  if (this.state.searchCity && this.state.searchState && this.state.searchActivity) {
    this.props.getTrailData(this.state.searchCity, this.state.searchState, this.state.searchActivity);
    this.setState({
      shouldRedirect: true
    });
  }

  else {
    alert("Please search for a city, state, and activity type");
  }

  // Reset values on "Search".

  // const cityInput = document.getElementById('city-search');
  // const stateInput = document.getElementById('state-search');
  // const activityInput = document.getElementById('activity-search');

  // cityInput.value = '';
  // stateInput.value = '';
  // activityInput.value = 'select';

  // this.setState({searchCity: '', searchState: '', searchActivity: ''});


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
      <button onClick={this.searchOnClick} />
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
      loading: state.trailReducer.loading
    }
  }

export default connect(mapStateToProps, {getTrailData})(TrailSearch);
