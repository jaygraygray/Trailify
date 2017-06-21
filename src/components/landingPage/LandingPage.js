import React, { Component } from 'react';
import TrailSearch from '../../containers/trail-search';
import { getTrailData } from '../../ducks/trail';
import { connect } from 'react-redux';

class LandingPage extends Component {
    constructor(props) {
  super(props);
  this.state = {
    trailData: {}
  }
}
    render() {
        return (
            <div>
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

export default connect(mapStateToProps, {getTrailData})(LandingPage);