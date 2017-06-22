import React, { Component } from 'react';
import { getTrailData } from '../../ducks/trail';
import { connect } from 'react-redux';

class TrailResults extends Component {

  constructor(props) {
  super(props);

  this.state = {
    trailData: {}
  }
}

    render() {

      const TrailData = this.props.info.map((data, i) => (
          <div key={i}>{data.name}</div>
        ))

        return (
            <div>
              {this.props.loading ? 'Loading...' : TrailData}
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

export default connect(mapStateToProps, {getTrailData})(TrailResults);
