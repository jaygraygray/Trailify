/* global google */
import { default as React, Component, } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// const SimpleMapExampleGoogleMap = withGoogleMap( props => {
//     console.log("here new props are used", props)
//     return <GoogleMap
//       defaultZoom={15}
//       defaultCenter={new google.maps.LatLng(props.lat, props.lng)}
//     />
//  }
// );

class Map extends Component {
  constructor(props){
    super(props);

    this.state={
      lat: null,
      lng: null
    }
  }

  componentDidUpdate(nextProps, prevState) {
    // console.log('props', nextProps.center.lat);
    if (nextProps.center.lat !== this.state.lat){
      this.setState({
      lat: nextProps.center.lat,
      lng: nextProps.center.lng
    })
    }
    console.log('this.state', this.state);
  }
  mapMoved() {
    console.log('mapMoved: ')
  }
  
  render() {
    // const center = (‎40.758701, -111.876183)
    // lat: 40.32631, lng: -111.64272
    // const actualLat= this.props.lat || 40.32631
    // const actualLng = this.props.lng || -111.64272

    const markers = this.props.markers || []
    return (
      <div>
        <GoogleMap
            onDragEnd={this.mapMoved.bind(this)}
            defaultZoom={ this.props.zoom }
            defaultCenter={{lat: this.state.lat, lng: this.state.lng}}
            gestureHandling={'greedy'}
        >
            {markers.map((marker, index) => (
              <Marker {...marker} />
              )
            )}
  </GoogleMap>
      </div>
    );
  }
}
export default withGoogleMap(Map);
/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 */
// const RealGoogleMap = withGoogleMap(props => (
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={ props.center }
    
//   />
// ));
// /*
//  * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
//  */
// class Map extends Component {
//   constructor(props) {
//     super(props);
//     this.state={
//       center: null,
//     }
//   }
//   render() {
//     return (
//       <RealGoogleMap
//         containerElement={
//           <div style={{ height: `100%` }} />
//         }
//         mapElement={
//           <div style={{ height: `100%` }} />
//         }
//         center={this.state.center}
//       />
//     );
//   }
// }
// export default Map;