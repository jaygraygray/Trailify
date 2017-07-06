import React, { Component } from 'react';
import Hexagon from './Hexagon';
import '../LandingPage.css';
import { getFeaturedTrails } from '../../../ducks/featured';
import { connect } from 'react-redux';
class Featured extends Component {
      constructor(props) {
        super(props);
    this.state = {
      featuredTrails: {}
    }
  }
componentDidMount() {
  this.props.getFeaturedTrails();
  this.setState({
    featuredTrails: this.props.Trails
  })
}
    render() {
        const Featured = this.props.Trails
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
                            <Hexagon
                            trail= {Featured[0]}
                            />
                            <Hexagon
                            trail= {Featured[1]}
                            />
                            <Hexagon
                            trail= {Featured[2]}
                            />
                            <Hexagon
                            trail= {Featured[3]}
                            />
                        </div>
                        <div className="hexagon-middle">
                            <Hexagon
                            trail= {Featured[4]}
                            />
                            <Hexagon
                            trail= {Featured[5]}
                            />
                            <Hexagon
                            trail= {Featured[6]}
                            />
                            <Hexagon
                            trail= {Featured[7]}
                            />
                            <Hexagon
                            trail= {Featured[8]}
                            />
                        </div>
                        <div className="hexagon-bottom">
                            <Hexagon
                            trail= {Featured[9]}
                            />
                            <Hexagon
                            trail= {Featured[10]}
                            />
                            <Hexagon
                            trail= {Featured[11]}
                            />
                            <Hexagon
                            trail= {Featured[12]}
                            />
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
function mapStateToProps(state) {
    return {
      Trails: state.featuredReducer.featuredTrails,
      loading: state.trailReducer.loading
    }
  }
export default connect(mapStateToProps, { getFeaturedTrails })(Featured);
