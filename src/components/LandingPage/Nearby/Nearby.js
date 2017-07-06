import React, { Component } from 'react';
import NearbyHike from './NearbyHike';
import HomeMap from './HomeMap';
import '../LandingPage.css';

class Nearby extends Component {
    render() {
        return (
            <div>
                <header className="nearby-header">
                    <h1 className="inyourarea">Trails In Your Area</h1>
                </header>
                <div className="nearby-content">
                    <div>
                        <NearbyHike />
                        <NearbyHike />
                    </div>
                    <div className="nearby-map-container">
                        <HomeMap />
                    </div>
                </div>
            </div>
        );
    }
}

export default Nearby;
