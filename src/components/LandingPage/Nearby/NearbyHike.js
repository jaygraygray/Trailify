import React, { Component } from 'react';

class NearbyHike extends Component {
    render() {
        return (
            <main className="nearby-content">
                    <div className="nearby-hikes">
                        <div>
                            Hike Image
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

export default NearbyHike;