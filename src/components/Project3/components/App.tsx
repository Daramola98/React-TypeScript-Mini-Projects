import React, { Component } from "react";
import unsplash from "../../../api/Project3/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

interface IAppState {
  images: any[];
}

class App extends Component<{}, IAppState> {
  public state = {
    images: []
  };

  public render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <br />
        <ImageList images={this.state.images} />
      </div>
    );
  }

  private onSearchSubmit = async (term: string) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    });
    this.setState({ images: response.data.results });
  };
}

export default App;
