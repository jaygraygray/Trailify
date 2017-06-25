import React, { Component } from 'react';
import { getTrailData } from '../../ducks/trail';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './TrailResults.css';
import GoogleMap from'./GoogleMap';

class TrailResults extends Component {

  constructor(props) {
  super(props);

  this.state = {
    trailData: {}
  }
}

    render() {

      const TrailData = this.props.info.map((data, i) => (
          <div className="trail-list-items" key={i}><Link to={`/details/${data.unique_id}`}>{data.name}</Link></div>
        ))

        return (
          <section className="results-container">

          <div className="maps-results-wrapper">
            <div className="google-maps-contain">
              <GoogleMap />
            </div>

            <div className="trails-contain">
                <div>{this.props.loading ? 'Loading...' : TrailData}</div>

            </div>
          </div>

          </section>
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
