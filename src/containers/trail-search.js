import React, { Component } from 'react';
import { getTrailData } from '../ducks/trail';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TrailSearch extends Component {

  constructor(props) {
  super(props);

  this.state = {
    trailData: {},
    searchCity: ''
  }

  this.handleSearch = this.handleSearch.bind(this);
  this.search = this.search.bind(this);
  this.searchOnClick = this.searchOnClick.bind(this);

}

handleSearch(event) {
  this.setState({
    searchCity: event.target.value
  })
}

search() {
  console.log(`Searching for ${this.state.searchCity}`)
}

searchOnClick(event) {
  event.preventDefault();
  this.props.getTrailData(this.state.searchCity);
  this.setState({searchCity: ''});
}

render() {

  const TrailData = this.props.info.map((data, i) => (
      <div key={i}>{data.name}</div>
    ))

return (
  <div className="trail-search">

    <div className="search-input">
      <h4>Search for a Trail in Utah:</h4>
      <input
      onChange={this.handleSearch}
      placeholder="City" />
      <button onClick={this.searchOnClick}>Get Data</button>
      <p>Results for: {this.state.searchCity}</p>
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
