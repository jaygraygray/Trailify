import React, { Component } from 'react';
import LoadingScreen from '../../LoadingScreen/LoadingScreen';


var delicatearch = require('../../TrailResults/delicatearch.jpg')

class NearbyHike extends Component {

    render() {
        console.log(this.props.data);
         //   const TrailData = this.props.info.map((data, i) => (
    //       <div className="trail-list-items" key={i}>
    //         <h2 id="list-name">{data.featured_trail_name}</h2>
    //         <img src={data.activities[0].thumbnail != null ?  data.activities[0].thumbnail : delicatearch} alt="picture" />

    //         <h4 id="list-rating">Rating: {data.activities[0].rating > 0 ? data.activities[0].rating + "/5" : "N/A"}</h4>
    //         <h4 id="list-length">Length: {data.activities[0].length > 0 ? data.activities[0].length + " mi" : "N/A"}</h4>

    //       </div>
        // ))

        return (
            <main className="nearby-content">
                    <div className="nearby-hikes">
                        <div>
                         
                        </div>
                        <ul className="nearby-list">
                            
                            <li>Hike Name</li>
                            <li>Hike Time</li>
                            <li>Hike Elevevation Gain</li>
                            <li>Hike Difficulty</li>
                        </ul>
                    </div>
                </main>
        );
    }
}
export default (NearbyHike);