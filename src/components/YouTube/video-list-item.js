import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)}>
      <div>
        <div>
          <img src={imageUrl} alt=""/>
        </div>
        <div>
          <div>{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
