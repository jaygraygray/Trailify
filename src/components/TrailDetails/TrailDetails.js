import React, { Component } from 'react';
import { getTrailData } from '../../ducks/trail';
import { connect } from 'react-redux';
import YTSearch from 'youtube-api-search';
import VideoList from '../YouTube/video-list';
import VideoDetail from '../YouTube/video-detail';
import './TrailDetails.css';
import { Redirect } from 'react-router-dom';

const API_Key = 'AIzaSyCznzQ0hrAD3T27CxttlpvgfZtI9ogtuvw';


class TrailDetails extends Component {

  constructor(props) {
  super(props);

  this.state = {
    trailData: {},
    trail: {},
    trailDescription: '',
    trailPhoto: '',
    trailLength: '',
    videos: [],
    selectedVideo: null,
    shouldRedirect: false
  }

}

videoSearch(term) {
  YTSearch({key: API_Key, term: term}, (videos) => {
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
    });
  })
}


  componentDidMount() {

    const arr = this.props.info;
    const trailArr = [];
    const {id} = this.props.match.params;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i].unique_id == id) {
        trailArr.push(arr[i]);
      }
    }

    localStorage.setItem('trailStorage', JSON.stringify(trailArr[0]))

    if (trailArr.length > 0) {
      this.setState({trail: trailArr[0], trailLength: trailArr[0].activities[0].length, trailDescription: trailArr[0].activities[0].description, trailPhoto: trailArr[0].activities[0].thumbnail});
      this.videoSearch(trailArr[0].name + ' ' + trailArr[0].activities[0].activity_type_name + ' ' + trailArr[0].city + ' ' + trailArr[0].state);
    }

    else if (trailArr.length < 1) {
      this.setState({trail: localStorage.getItem('trailStorage'), shouldRedirect: true})
    }

  }

    render() {

      if (this.state.shouldRedirect) {
        return <Redirect to="/" />
      }
      else {

      return (
          <div className="trail-details-contain">
            <div className="image-wrapper">
                <img className="trail-photo" src={ this.state.trailPhoto } alt="Not Found" />
                  <div className="trail-location-container">
                    <div className="title-center">
                      <h1 className="trail-title">{this.state.trail ? this.state.trail.name : 'Please search again'}</h1>
                    <div className="location-end">
                      <h2 className="trail-location">{this.state.trail.city}, {this.state.trail.state}</h2>
                    </div>
                    </div>
              </div>
            </div>
           <div className="trail-additional-info-contain">
             <div>
                        <div>DISTANCE <span>(ROUND-TRIP)</span></div>
                        <h1>{this.state.trailLength > 0 ? this.state.trailLength + " mi" : 'Trail length not found'}</h1>
                      </div>
                      <div className="trail-weather">
                        <h3>WEATHER</h3>
                        <h1>93 &#8457;</h1>

                    </div>
          </div>
              <h3 className="trail-name-h2">{this.state.trail.name}</h3>
              <h4 className="trail-description">{this.state.trailDescription ? this.state.trailDescription : 'No Description Found'}</h4>
              <h3 className="trail-directions-h2">Directions</h3>
              <h4 className="trail-directions">{this.state.trail.directions ? this.state.trail.directions : 'No Directions Found'}</h4>
              <VideoDetail video={this.state.selectedVideo}/>
              <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos}/>
          </div>
      );
  }
}
}

function mapStateToProps(state) {
    return {
      info: state.trailReducer.trailData,
      loading: state.trailReducer.loading
    }
  }

export default connect(mapStateToProps, {getTrailData})(TrailDetails);
