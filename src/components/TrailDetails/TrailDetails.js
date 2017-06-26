import React, { Component } from 'react';
import { getTrailData } from '../../ducks/trail';
import { connect } from 'react-redux';
import YTSearch from 'youtube-api-search';
import VideoList from '../YouTube/video-list';
import VideoDetail from '../YouTube/video-detail';
import './TrailDetails.css';

const API_Key = 'AIzaSyCznzQ0hrAD3T27CxttlpvgfZtI9ogtuvw';


class TrailDetails extends Component {

  constructor(props) {
  super(props);

  this.state = {
    trailData: {},
    trail: {},
    videos: [],
    selectedVideo: null,
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
    this.setState({trail: trailArr[0]});
    if (trailArr[0]) {
      this.videoSearch(trailArr[0].name + " trail" + ' ' + trailArr[0].city);
    }
    console.log(trailArr[0].name + ' ' + this.props.searchActivity + ' ' + trailArr[0].city);
  }

    render() {

        return (
            <div className="trail-details-contain">
              <h1>{this.state.trail ? this.state.trail.name : 'Please search again'}</h1>
              <h1>Videos</h1>
              <VideoDetail video={this.state.selectedVideo}/>
              <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
  console.log(state.trailReducer)
    return {
      info: state.trailReducer.trailData,
      loading: state.trailReducer.loading,
      searchActivity: state.trailReducer.searchActivity
    }
  }

export default connect(mapStateToProps, {getTrailData})(TrailDetails);
