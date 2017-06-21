import React, { Component } from 'react';
import './App.css';
import TrailSearch from './containers/trail-search';
import { getTrailData } from './ducks/trail';
import { connect } from 'react-redux';

class App extends Component {

  constructor(props) {
  super(props);
  this.state = {
    trailData: {}
  }
}

  render() {

    return (
      <div className="App">
        <div className="App-header"></div>
        <TrailSearch />
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

export default connect(mapStateToProps, {getTrailData})(App);
