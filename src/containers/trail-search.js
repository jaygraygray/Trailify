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

search() {
  console.log(`Searching for ${this.state.searchCity} and ${this.state.searchState}`)
}

searchOnClick(event) {
  event.preventDefault();
  this.props.getTrailData(this.state.searchCity, this.state.searchState);
  this.setState({searchCity: '', searchState: ''});
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
      <button onClick={this.searchOnClick}>Search</button>
      <p>Results for: {this.state.searchCity} {this.state.searchState}</p>
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
