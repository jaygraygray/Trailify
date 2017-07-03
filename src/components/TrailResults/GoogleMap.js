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
      zoom: 10
  })
    console.log(this.props.coords);
    let coords = this.props.coords;

    const trailMarkers = coords.map((data, i) => {
    var marker = null
      var labels = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50"];
        
      const getLabels = labels.map((data, i) => {
        return(data + "")
      })
    return (
        marker = new google.maps.Marker({
          position: data,
          label: getLabels[i],
          map: newMap,
          // animation: google.maps.Animation.BOUNCE
          
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
       
