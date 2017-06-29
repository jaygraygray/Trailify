import React, { Component } from 'react';
import Hexagon from './Hexagon';
import '../LandingPage.css';

class Featured extends Component {
    render() {
        return (
            <section>
                <div className="featured-container">
                    <div className="header-container">
                        <div className="featured-header"><div className="featured-text">Featured Hikes</div></div>
                    </div>
                    <div className="top-triangle-container">
                        <div className="top-triangle"></div>
                    </div>
                    <div className="hexagon-container">
                        <div className="hexagon-top">
                            <Hexagon />
                            <Hexagon />
                            <Hexagon />
                            <Hexagon />
                        </div>
                        <div className="hexagon-middle">
                            <Hexagon />
                            <Hexagon />
                            <Hexagon />
                            <Hexagon />
                            <Hexagon />
                        </div>
                        <div className="hexagon-bottom">
                            <Hexagon />
                            <Hexagon />
                            <Hexagon />
                            <Hexagon />
                        </div>
                    </div>
                    <div className="bottom-triangle-container">
                        <div className="bottom-triangle"></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Featured;
