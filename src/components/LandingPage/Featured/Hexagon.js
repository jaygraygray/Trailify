import React, { Component } from 'react';
import '../LandingPage.css';
class Hexagon extends Component {
    constructor(props){
        super(props);

    this.state = {
        trail: {}
    }
}
componentWillReceiveProps(nextProps){
this.setState({
    trail: nextProps.trail || {}
})
}

    render() {
        return (
<<<<<<< HEAD
          <div>
              <div className="hexagon">
                  <img className="hexagon-background-image" src={this.state.trail.photo_1} />
                  <div className="name-overlay">
                      <div className="trail-name">{this.state.trail.featured_trail_name}</div>
                  </div>
              </div>
          </div>
=======
            <div>
                <div className="hexagon">
                    <img className="hexagon-background-image" src={this.state.trail.photo_1} alt="trail pic"/>
                    <h1>{this.state.trail.featured_trail_name}</h1>
                </div>
            </div>
>>>>>>> master
        );
    }
}
export default Hexagon;
