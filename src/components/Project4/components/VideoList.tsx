import React from "react";
import { IVideo } from "./App";
import VideoItem from "./VideoItem";

interface IVideoListProps {
  videos: IVideo[];
  onVideoSelect: (video: IVideo) => void;
}

const VideoList = ({ videos, onVideoSelect }: IVideoListProps) => {
  const videosList = videos.map((video: IVideo) => {
    return (
      <VideoItem key={video.etag} video={video} onVideoSelect={onVideoSelect} />
    );
  });
  return <div className="ui relaxed divided list">{videosList}</div>;
};

export default VideoList;
