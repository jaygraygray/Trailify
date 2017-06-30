/* global google */
import { default as React, Component, } from "react";
class Map extends Component {
  componentDidMount(){
    new google.maps.Map(document.getElementById("map"),{
      center: {lat: "", lng: ""},
      zoom: 8
    })
  }
  componentDidUpdate() {
    var mapCenter = { lat:this.props.center.lat, lng: this.props.center.lng }
    // var bounds = new google.maps.LatLngBounds();
    var myMap = document.getElementById("map")
    myMap.innerHTML = ""
    var newMap = new google.maps.Map(myMap,{
      center: mapCenter,
      zoom: 8
  })
  var marker = new google.maps.Marker({
    position: mapCenter,
    map: newMap
  })
  //   bounds.extend(position);
  // marker.setMap(myMap);
  }
  
  render() {
    return (
      <div id="map">
         
      </div>
  
    );
  }
}
export default Map;
