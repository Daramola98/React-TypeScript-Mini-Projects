import React, { Component } from "react";
import youtubeApi from "../../../api/Project4/youtube";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

export interface IVideo {
  etag: string;
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    description: string;
  };
  id: {
    videoId: string;
  };
}

interface IAppState {
  videos: IVideo[];
  selectedVideo: IVideo | null;
}
export default class App extends Component<{}, IAppState> {
  public state = {
    selectedVideo: null,
    videos: []
  };

  public render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <br />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  private onSearchSubmit = async (term: string) => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: term
      }
    });
    const { items } = response.data;
    this.setState({ videos: items, selectedVideo: items[0] });
  };

  private onVideoSelect = (video: IVideo): void => {
    this.setState({ selectedVideo: video });
  };
}
