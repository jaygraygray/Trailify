import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFeaturedTrails } from '../../../ducks/featured';

class NearbyHike extends Component {
    constructor(props) {
        super(props);
    this.state = {
      trail: {}
    }
  }
componentDidMount() {
  this.props.getFeaturedTrails();
  this.setState({
    featuredTrails: this.props.Trails
  })
}

    render() {
        const hikeOne = this.props.Trails[0];
        console.log(hikeOne);
        // console.log(hikeOne.featured_trail_id);
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
function mapStateToProps(state) {
    return {
      Trails: state.featuredReducer.featuredTrails,
      loading: state.trailReducer.loading
    }
  }
export default connect(mapStateToProps, { getFeaturedTrails })(NearbyHike);