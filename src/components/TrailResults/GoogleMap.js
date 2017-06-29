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
const TrailMap = withGoogleMap( props => {
const markers = props.markers || []
console.log(props)
  return(
  
        <GoogleMap
            ref={props.onMapMounted}
            defaultZoom={props.zoom}
            defaultCenter={new google.maps.LatLng({lat:props.lat, lng:props.lng})}
            
        >
            {markers.map((marker, index) => (
              <Marker {...marker} />
              )
            )}
        </GoogleMap>
  )
  }
);

class Map extends Component {
  constructor(props){
    super(props);

    this.state={
      lat: 40.233845,
      lng: -111.658531
    }
    this.handleMapMounted = this.handleMapMounted.bind(this);
}
handleMapMounted(map) {
    this._map = map;
  }
  shouldComponentUpdate(nextProps, nextState){
    if(this.state.lat === nextProps.center.lat){
      return false
    }else{
  console.log(this.state);
      return true
    }
  }
    componentWillReceiveProps(nextProps) {
    this.setState({
      lat: nextProps.center.lat,
      lng: nextProps.center.lng,
    });
  }

  componentDidUpdate(nextProps, prevState) {
    console.log('props', nextProps.center.lat);
    if (nextProps.center.lat !== this.state.lat){
      this.setState({
      lat: nextProps.center.lat || 40.233845,
      lng: nextProps.center.lng || -111.658531
    })
    }
    console.log('this.state', this.state);
  }
  mapMoved() {
    console.log('mapMoved: ')
  }
  
  render() {
    console.log('RENDER', this.props);    // const center = (‎40.758701, -111.876183)
    // lat: 40.32631, lng: -111.64272
    // const actualLat= this.props.lat || 40.32631
    // const actualLng = this.props.lng || -111.64272

    console.log(this.state)
    return (
      <div ref="map">
        <TrailMap
        onMapMounted={this.handleMapMounted}
        lat={this.state.lat}
        lng={this.state.lng}
        zoom={this.props.zoom}
       containerElement={
        <div style={{ height: `500px` }} />
          }
        mapElement={
          <div style={{ height: `500px` }} />
          }
         />
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