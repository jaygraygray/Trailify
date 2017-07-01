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
    var mapCenter = { 
      lat:this.props.center.lat,
      lng: this.props.center.lng
    }
    var myMap = document.getElementById("map")
    myMap.innerHTML = ""
    var newMap = new google.maps.Map(myMap,{
      center: mapCenter,
      zoom: 8
  })
    console.log(this.props.coords);
    let coords = this.props.coords;

    const trailMarkers = coords.map((data, i) => {
    console.log(data)
    var marker = null
    return (
        marker = new google.maps.Marker({
          position: data,
          map: newMap,
          title: "coolness"
        }))
  })
  console.log(mapCenter)
  }
  render() {
    return (
      <div id="map">
         
      </div>
  
    );
  }
}
export default Map;

// Create an array of alphabetical characters used to label the markers.
       
