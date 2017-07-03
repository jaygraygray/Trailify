import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTrailData } from '../../../ducks/trail';
import LoadingScreen from '../../LoadingScreen/LoadingScreen';


var delicatearch = require('../../TrailResults/delicatearch.jpg')

class NearbyHike extends Component {
    constructor(props) {
  super(props);

  this.state = {
    trailData: {},
    map: null,
  }
}
// componentDidMount() {
//   this.props.getFeaturedTrails();
//   this.setState({
//     featuredTrails: this.props.Trails
//   })
// }



    render() {
       console.log(this.props.info);
      const TrailData = this.props.info.map((data, i) => (
          <div className="trail-list-items" key={i}>
            <h2 id="list-name">{data.featured_trail_name}</h2>
            <img src={data.activities[0].thumbnail != null ?  data.activities[0].thumbnail : delicatearch} alt="picture" />

            <h4 id="list-rating">Rating: {data.activities[0].rating > 0 ? data.activities[0].rating + "/5" : "N/A"}</h4>
            <h4 id="list-length">Length: {data.activities[0].length > 0 ? data.activities[0].length + " mi" : "N/A"}</h4>

          </div>
        ))




        return (
            <main className="nearby-content">
                    <div className="nearby-hikes">
                        <div>
                         
                        </div>
                        <ul className="nearby-list">
                            <div>{this.props.loading ? <LoadingScreen /> : TrailData}</div>
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
function mapStateToProps(state) {
    return {
      info: state.trailReducer.trailData,
      loading: state.trailReducer.loading
    }
  }
export default connect(mapStateToProps, {getTrailData})(NearbyHike);