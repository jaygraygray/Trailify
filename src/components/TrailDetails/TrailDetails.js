import React, { Component } from 'react';
import { getTrailData } from '../../ducks/trail';
import { connect } from 'react-redux';
import YTSearch from 'youtube-api-search';
import VideoList from '../YouTube/video-list';
import VideoDetail from '../YouTube/video-detail';
import TrailSearch from '../../containers/trail-search';

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
      this.videoSearch(trailArr[0].name);
    }
    console.log(trailArr[0].name + ' ' + this.props.info);
  }

    render() {

        return (
            <div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1>{this.state.trail ? this.state.trail.name : 'Please search again'} </h1>
              <VideoDetail video={this.state.selectedVideo}/>
              <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      info: state.trailReducer.trailData,
      loading: state.trailReducer.loading
    }
  }

export default connect(mapStateToProps, {getTrailData})(TrailDetails);
