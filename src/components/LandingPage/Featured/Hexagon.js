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
    console.log(nextProps.trail)
this.setState({
    trail: nextProps.trail || {}
})
console.log(this.state);
}

    render() {
        console.log(this.state);
        return (
          <div>
              <div className="hexagon">
                  <img className="hexagon-background-image" src={this.state.trail.photo_1} />
                  <div className="name-overlay">
                      <div className="trail-name">{this.state.trail.featured_trail_name}</div>
                  </div>
              </div>
          </div>
        );
    }
}
export default Hexagon;
