import React, { Component } from 'react';
import { getTrailData } from '../ducks/trail';
import { connect } from 'react-redux';

class TrailSearch extends Component {

  constructor(props) {
  super(props);

  this.state = {
    trailData: {},
    searchCity: ''
  }

  this.handleCitySearch = this.handleCitySearch.bind(this);
  this.handleStateSearch = this.handleStateSearch.bind(this);
  this.handleActivitySearch = this.handleActivitySearch.bind(this);
  this.search = this.search.bind(this);
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

search() {
  console.log(`Searching for ${this.state.searchCity}, ${this.state.searchState}, and ${this.state.searchActivity}`)
}

searchOnClick(event) {
  event.preventDefault();
  this.props.getTrailData(this.state.searchCity, this.state.searchState, this.state.searchActivity);
  this.setState({searchCity: '', searchState: '', searchActivity: ''});
}

render() {

  const TrailData = this.props.info.map((data, i) => (
      <div key={i}>{data.name}</div>
    ))

return (
  <div className="trail-search">

    <div className="search-input">
      <h4>Search for a Trail:</h4>
      <input
      onChange={this.handleCitySearch}
      placeholder="City" />
      <input
      onChange={this.handleStateSearch}
      placeholder="State" />
      <select
        onChange={this.handleActivitySearch}
        placeholder="Select activity">
          <option>Select activity</option>
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
