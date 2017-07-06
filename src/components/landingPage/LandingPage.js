import React, {Component} from 'react';
import TrailSearch from '../../containers/trail-search';
import {getTrailData} from '../../ducks/trail';
import {connect} from 'react-redux';
import Nearby from './Nearby/Nearby'
import Featured from './Featured/Featured'
import './LandingPage.css';

class LandingPage extends Component {

  componentDidMount() {
    document.body.scrollTop = 0;
  }

  render() {
    return (

      <section className="landing-page-contain">
        <section className="landing-page-photo-contain"></section>
        <section className="search-contain">
          <div className="trail-search">
            <div className="slogan-wrapper">
              <div className="slogan">Find Your Trail</div>
              <div className="slogan">Find Yourself</div>
            </div>

            <TrailSearch/>
          </div>
        </section>
        <section className="nearby-container">
          <Nearby/>
        </section>
        <Featured/>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {info: state.trailReducer.trailData, loading: state.trailReducer.loading}
}

export default connect(mapStateToProps, {getTrailData})(LandingPage);
