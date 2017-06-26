import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail">
      <div>
        <iframe allowFullScreen src={url}></iframe>
      </div>
      <div className="vid-title-contain">
      <div className="selected-video-title">
        <div>{video.snippet.title}</div>
      </div>
      </div>
    </div>
  )
}

export default VideoDetail;
