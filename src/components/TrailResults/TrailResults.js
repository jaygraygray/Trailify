import React, { Component } from 'react';
import { getTrailData } from '../../ducks/trail';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './TrailResults.css';
import Map from'./GoogleMap';

var delicatearch = require('./delicatearch.jpg')


class TrailResults extends Component {
  constructor(props) {
  super(props);

  this.state = {
    trailData: {},
    map: null
    
  }

}
    mapMoved() {
      console.log('mapMoved: ' + JSON.stringify(this.state.map.getCenter()));
    }
    mapLoaded(map) {
      console.log('mapLoaded ' + JSON.stringify(map.getCenter()))
      if (this.state.map != null)
      return
      this.setState({
        map: map
      }) 
    }
    render() {

      const filteredName = (str) => {
        let filtered = str.replace(/&amp;/gi, "and")
        return filtered;
       }
      const TrailData = this.props.info.map((data, i) => (

          <div className="trail-list-items" key={i}>
            <Link id="results-link" to={`/details/${data.unique_id}`}>
            
            <h2 id="list-name">{filteredName(data.name)}</h2>
            <img src={data.activities[0].thumbnail != null ?  data.activities[0].thumbnail : delicatearch} alt="picture" />

            <h4 id="list-rating">Rating: {data.activities[0].rating > 0 ? data.activities[0].rating + "/5" : "N/A"}</h4>
            <h4 id="list-length">Length: {data.activities[0].length > 0 ? data.activities[0].length + " mi" : "N/A"}</h4>
            </Link>
          </div>
        ))
      const TrailLat = this.props.info.map((data, i) => (
          data.lat
        ))
      const TrailLng = this.props.info.map((data, i) => (
          data.lon
        ))
        const latObj = TrailLat[0];
        let actualLat = latObj;
        const lngObj = TrailLng[0];
        let actualLng = lngObj;

        return (
          <section className="results-container">
          <div className="maps-results-wrapper">
            <div className="google-maps-contain">
              <Map
                center={{lat: actualLat, lng: actualLng}}
                zoom={8}  
              />
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