/* global google */
import { default as React, Component, } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
class Map extends Component {
  render() {
    const markers = this.props.markers || []
    return (
      <div>
        <GoogleMap
            
            defaultZoom={ this.props.zoom }
            defaultCenter={ this.props.center }
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