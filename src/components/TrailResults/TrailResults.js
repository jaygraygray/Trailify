import React, { Component } from 'react';
import { getTrailData } from '../../ducks/trail';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './TrailResults.css';
import Map from'./GoogleMap';
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
      const TrailData = this.props.info.map((data, i) => (
          <div className="trail-list-items" key={i}><Link to={`/details/${data.unique_id}`}>{data.name}</Link></div>
        ))
      const TrailLat = this.props.info.map((data, i) => (
          data.lat
        ))
      const TrailLng = this.props.info.map((data, i) => (
          data.lon
        ))
        // console.log("TRAIL-LAT",TrailLat[0].props.children);
        // console.log(TrailLng);
        // console.log(this.props.TrailData);
        // const centerTrail = this.props.info[0]
        // console.log('CenterTrail', centerTrail)
        const latObj = TrailLat[0];
        let actualLat = latObj;
        const lngObj = TrailLng[0];
        let actualLng = lngObj;
        // console.log(actualLat);
        // console.log(actualLng);
        // const center= (actualLat, actualLng);
        
        // const center = TrailLat[0] + TrailLng[0];
        // const isolated = center[0]
        // console.log(center);
        // console.log(isolated);
        // console.log(actualLng);
        // console.log(latObj); 
        // console.log('ACTUALLNG', actualLng);

        return (
          <section className="results-container">
          <div className="maps-results-wrapper">
            <div className="google-maps-contain">
              <Map
              onMapMounted={this.handleMapMounted}
                center={{lat: actualLat, lng: actualLng}}
                zoom={8}
                 containerElement={
                    <div style={{ height: `0%` }} />
                      }
                  mapElement={
                    <div style={{ height: `100%` }} />
                      }  
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