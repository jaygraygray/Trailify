import React, { Component } from 'react';
import { getTrailData } from '../../ducks/trail';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './TrailResults.css';
import Map from './GoogleMap';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

var delicatearch = require('./delicatearch.jpg')


class TrailResults extends Component {
  constructor(props) {
  super(props);

  this.state = {
    trailData: {},
    map: null,
  }
}

  componentDidMount() {
    document.body.scrollTop = 0;
  }
    render() {

      const filteredName = (str) => {
        let filtered = str.replace(/&amp;/gi, "and");
        return filtered;
       }

       var labels = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50"];

      const getLabels = labels.map((data, i) => {
        return(data + "")
      })
       console.log(this.props.info);
      const TrailData = this.props.info.map((data, i) => (
          <div className="trail-list-items" key={i}>
            

            <h2 id="list-name">{filteredName(data.name)} {i + 1}</h2>
            <img src={data.activities[0].thumbnail != null ?  data.activities[0].thumbnail : delicatearch} alt="picture" />

            <h4 id="list-rating">Rating: {data.activities[0].rating > 0 ? data.activities[0].rating + "/5" : "N/A"}</h4>
            <h4 id="list-length">Length: {data.activities[0].length > 0 ? data.activities[0].length + " mi" : "N/A"}</h4>
          </div>
        ))
      const TrailLat = this.props.info.map((data, i) => {
          return data.lat
      })
      const TrailLng = this.props.info.map((data, i) => {
          return data.lon
      })
        const latObj = TrailLat[0];
        let actualLat = latObj;
        const lngObj = TrailLng[0];
        let actualLng = lngObj;

    const makeMarkers = function createMarker() {
      const Lat = TrailLat;
      // console.log(Lat);
      const Lng = TrailLng;

      function makeCoord(Lat, Lng) {
      var coords = []
        for (var i = 0; i < Lat.length; i++) {
          let newElement = {
            lat: Lat[i],
            lng: Lng[i]
          }
          coords.push(newElement)
        }
        // console.log(coords)
        return coords
      }
        return makeCoord(Lat,Lng)
    }
    const coordinates =  makeMarkers();


        return (
          <section className="results-container">
          <div className="maps-results-wrapper">
            <div className="google-maps-contain">
              <Map
                center={{lat: actualLat, lng: actualLng}}
                zoom={8}
                coords={coordinates}
              />
            </div>
            <div className="trails-contain">
                <div>{this.props.loading ? <LoadingScreen /> : TrailData}</div>
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
