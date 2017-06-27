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
          <div className="trail-list-items" key={i}>
            <Link to={`/details/${data.unique_id}`}>
            <h3 id="list-name">{data.name}</h3>
            <img src={data.activities[0].thumbnail} alt="Photo Not Found" />
            <h4 id="list-rating">Rating: {data.activities[0].rating > 0 ? data.activities[0].rating + "/5" : "N/A"}</h4>
            <h4 id="list-length">Length: {data.activities[0].length > 0 ? data.activities[0].length + " mi" : "N/A"}</h4>
            </Link>
          </div>
        ))

        return (
          <section className="results-container">

          <div className="maps-results-wrapper">
            <div className="google-maps-contain">
              <GoogleMap />
            </div>
          </div>


            <div className="trails-contain">
                <div>{this.props.loading ? 'Loading...' : TrailData}

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
