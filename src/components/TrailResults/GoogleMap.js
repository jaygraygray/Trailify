/* global google */
import { default as React, Component, } from "react";

class Map extends Component {
    componentWillReceiveProps(nextProps) {
    this.setState({
      lat: nextProps.center.lat,
      lng: nextProps.center.lng,
    });
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
    return (
      <div id="map">
      </div>
    );
  }
}
export default Map;
