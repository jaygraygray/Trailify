/* global google */
import { default as React, Component, } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

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
  mapMoved() {
    console.log('mapMoved: ')
  }

  componentDidMount(){
    new google.maps.Map(document.getElementById("map"),{
      center: {lat: "", lng: ""},
      zoom: 8
    })
  }
  componentDidUpdate() {
    var myMap = document.getElementById("map")
    myMap.innerHTML = ""
    new google.maps.Map(myMap,{
      center: { lat:this.props.center.lat, lng: this.props.center.lng },
      zoom: 8
  }
      )
  }
  
  render() {
    const markers = this.props.markers || []
    console.log('RENDER', this.props);    // const center = (‎40.758701, -111.876183)
    // lat: 40.32631, lng: -111.64272
    // const actualLat= this.props.lat || 40.32631
    // const actualLng = this.props.lng || -111.64272

    console.log(this.state)
    return (
      <div id="map">
         
      </div>
  
    );
  }
}
export default Map;
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