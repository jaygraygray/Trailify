import React, { Component } from 'react';
// import { GoogleApiWrapper } from 'google-maps-react'
import GoogleMap from '../TrailResults/GoogleMap'

class MapContainer extends Component {
    render() {
        return (
            <div>
               <Map initialPosition={{lat: 48.858608, lng: 2.294471}} />
            </div>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBM7qJ_ib5e6s7vVb3-gU64Ck6If-s1Dmc'
})(MapContainer);