import React from "react";
import { IVideo } from "./App";
import "./VideoItem.css";

interface VideoItemProps {
  video: IVideo;
  onVideoSelect: (video: IVideo) => void;
}

const VideoItem = ({ video, onVideoSelect }: VideoItemProps) => {
  const videoSelect = () => onVideoSelect(video);
  return (
    <div className="item video-item">
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content" onClick={videoSelect}>
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
