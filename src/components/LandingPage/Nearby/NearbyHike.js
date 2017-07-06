import React, { Component } from 'react';
import LoadingScreen from '../../LoadingScreen/LoadingScreen';


var delicatearch = require('../../TrailResults/delicatearch.jpg')

class NearbyHike extends Component {

    render() {
        console.log("the props", this.props.data);
           const LandingData = this.props.data.map((data, i) => (
          <div className="in-your-area-hike-container"key={i}>
            <img className="in-your-area-image" src={data.activities[0].thumbnail != null ?  data.activities[0].thumbnail : delicatearch} alt="picture" />
            <div className="nearby-hike-title-container">
                <h2>{data.name}</h2>
                <h4>Rating: {data.activities[0].rating > 0 ? data.activities[0].rating + "/5" : "N/A"}</h4>
                <h4>Length: {data.activities[0].length > 0 ? data.activities[0].length + " mi" : "N/A"}</h4>
            </div>
          </div>
        ))

        return (
            <main className="nearby-content">
                    
                        <ul className="nearby-list">
                            <div className="nearby-hike-container">
                                {this.props.loading ? <LoadingScreen /> : LandingData}
                            </div>
                        </ul>
                    
                </main>
        );
    }
}
export default (NearbyHike);