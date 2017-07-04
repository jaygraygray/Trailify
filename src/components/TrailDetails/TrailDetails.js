import React, { Component } from 'react';
import { getTrailData } from '../../ducks/trail';
import { connect } from 'react-redux';
import YTSearch from 'youtube-api-search';
import VideoList from '../YouTube/video-list';
import VideoDetail from '../YouTube/video-detail';
import './TrailDetails.css';
import { Redirect } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { getWeatherData } from '../../ducks/weather';
import { addToFavorites } from '../../services/favorites';
import { getUserInfo } from '../../ducks/user';

const API_Key = 'AIzaSyCznzQ0hrAD3T27CxttlpvgfZtI9ogtuvw';


class TrailDetails extends Component {

  constructor(props) {
  super(props);

  this.state = {
    trailData: {},
    trail: {},
    trailName: '',
    trailDescription: '',
    trailPhoto: '',
    trailLength: '',
    videos: [],
    selectedVideo: null,
    shouldRedirect: false,
    weather: [],
    trailDirections: '',
  }

  this.addToFavorites = this.addToFavorites.bind(this);

}

videoSearch(term) {
  YTSearch({key: API_Key, term: term}, (videos) => {
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
    });
  })
}

addToFavorites(event) {
  event.preventDefault();
  addToFavorites(this.props.userInfo.user_id, this.state.trail.unique_id, this.state.trailName, this.state.trail.city, this.state.trail.state, this.state.trailLength, this.state.trail.activities[0].rating);
}


  componentDidMount() {

    document.body.scrollTop = 0;

    this.props.getUserInfo();
    this.setState({user: this.props.userInfo});


    const arr = this.props.info;
    const trailArr = [];
    const { id } = this.props.match.params;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i].unique_id == id) {
        trailArr.push(arr[i]);
      }
    }

    localStorage.setItem('trailStorage', JSON.stringify(trailArr[0]))

    if (trailArr.length > 0) {

      // Name filter //

      const nameStr = trailArr[0].name;
      const filteredName = nameStr.replace(/&amp;/gi, "and");

      // Description filter //

      const descReplaceObj = {
        '&amp;': "and",
        '<br />': '',
        '&lt;br /&gt;': ' ',
        '&quot;Y&quot;': '',
        '&quot;': '',
        '&lt;BR&gt;&lt;BR&gt;': ''
      }

      const descStr = trailArr[0].activities[0].description;
      const filteredDesc = descStr.replace(/&amp;|<br \/>|&lt;br \/&gt;|&quot;Y&quot;|&quot;|&lt;BR&gt;&lt;BR&gt;/gi, function(matched) {
        return descReplaceObj[matched];
      });

      // Directions filter //

      const dirReplaceObj = {
        '&amp;': "and",
        '<br />': '',
        '&lt;br /&gt;': ' ',
        '&quot;Y&quot;': '',
        '&quot;': '',
        '&lt;BR&gt;&lt;BR&gt;': ''

      }

      const dirStr = trailArr[0].directions;
      const filteredDir = dirStr.replace(/&amp;|<br \/>|&lt;br \/&gt;|&quot;Y&quot;|&quot;|&lt;BR&gt;&lt;BR&gt;/gi, function(matched) {
        return dirReplaceObj[matched];
      });

      // Set state with filtered info //

      this.setState({weather: this.props.weather.list[0].main.temp, trail: trailArr[0], trailName: filteredName, trailDescription: filteredDesc, trailDirections: filteredDir, trailLength: trailArr[0].activities[0].length, trailPhoto: trailArr[0].activities[0].thumbnail});
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
          <div id="trail-details-contain">
            <div className="image-wrapper">
                <img className="trail-photo" src={ this.state.trailPhoto } alt="Not Found" />
                  <div className="trail-location-container">
                    <div className="title-center">
                      <h1 className="trail-title">{this.state.trail ? this.state.trailName : 'Please search again'}</h1>
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
                        <h1>{Math.round(this.state.weather)}°F</h1>

                    </div>
          </div>
              <h3 className="trail-name-h2">{this.state.trailName}</h3>
              <h4 className="trail-description">{this.state.trailDescription ? this.state.trailDescription : 'No Description Found'}</h4>
              <h3 className="trail-directions-h2">Directions</h3>
              <h4 className="trail-directions">{this.state.trailDirections ? this.state.trailDirections : 'No Directions Found'}</h4>
              <button id="favorite-trail" onClick={this.addToFavorites}>Add to favorites</button>
              <VideoDetail video={this.state.selectedVideo}/>
              {this.state.videos ? <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos}/> : <LoadingScreen />}
          </div>
      );
  }
}
}

function mapStateToProps(state) {
    return {
      userInfo: state.userLoginReducer.userData,
      info: state.trailReducer.trailData,
      loading: state.trailReducer.loading,
      weather: state.weatherReducer.weatherData
    }
  }

export default connect(mapStateToProps, {getTrailData, getWeatherData, getUserInfo})(TrailDetails);
