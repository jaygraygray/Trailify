import React, { Component } from 'react';
import NearbyHike from './NearbyHike';
import HomeMap from './HomeMap';
import { connect } from 'react-redux';
import { getLandingData } from '../../../ducks/landing';
import '../LandingPage.css';

class Nearby extends Component {
    constructor(props) {
        super(props);

        this.state = {
            center: {}
        }
        this.getCenter = this.getCenter.bind(this);
    }
    
    componentDidMount() {
       
    }
    getCenter(center) {
        this.setState({
            center
        })
        this.props.getLandingData(center.lat, center.lng);
    }


    render() {
        return (
            <div>
                <header className="nearby-header">
                    <h1>Trails In Your Area</h1>
                </header>
                <div className="nearby-content">
                    <div>
                        <NearbyHike 
                        data = {this.props.data}
                        />
                        <NearbyHike />
                    </div>
                    <div className="nearby-map-container">
                        <HomeMap 
                        getCenter = {this.getCenter}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
      data: state.landingReducer.landingData,
      loading: state.landingReducer.loading
    }
  }
export default connect(mapStateToProps, { getLandingData })(Nearby);