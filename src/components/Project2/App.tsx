import React, { Component } from "react";
import Spinner from "../../Spinner";
import { IAppState } from "./interface";
import SeasonDisplay from "./SeasonDisplay";

class App extends Component<{}, IAppState> {
  public state = {
    errorMessage: "",
    lat: null
  };

  public componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  public render() {
    const { lat, errorMessage } = this.state;
    if (lat && !errorMessage) {
      return (
        <div>
          <SeasonDisplay latitude={lat} />
        </div>
      );
    }

    if (!lat && errorMessage) {
      return <div>{errorMessage}</div>;
    }

    return <Spinner message="Please Accept Location Request" />;
  }
}

export default App;
