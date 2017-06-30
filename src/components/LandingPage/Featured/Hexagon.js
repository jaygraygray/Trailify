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
                    <div></div>
                    <img src={this.state.trail.photo_1} />
                    <h1>{this.state.trail.featured_trail_name}</h1>
                </div>
            </div>
        );
    }
}
export default Hexagon;