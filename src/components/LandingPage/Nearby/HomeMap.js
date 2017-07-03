/*global google*/
import React, { Component } from 'react';


class HomeMap extends Component {

    componentDidMount(){
        new google.maps.Map(document.getElementById("homeMap"),{
        center: {lat: 40.233845, lng: -111.658531},
        zoom: 8
        })
    }
    
    render() {
        return (
            <div className="wrapper">
            <div id="homeMap">
                
            </div>
            </div>
        );
    }
}

export default HomeMap;