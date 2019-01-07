import React, { Component, Dispatch } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions/index";
import { ISelectSongSuccess, ISong } from "../actions/interfaces";
import { IStoreState } from "../reducers";

interface ISongListProps {
  songs: ISong[];
  onSelectSong: (song: ISong) => void;
}

class SongList extends Component<ISongListProps> {
  public render() {
    return <div className="ui divided list">{this.renderSongList()}</div>;
  }

  private renderSongList = () => {
    return this.props.songs.map((song, index) => {
      return (
        <div className="item" key={index}>
          <div className="right floated content">
            <button
              className="ui button primary"
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() => this.props.onSelectSong(song)}
            >
              Select Song
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };
}

const mapStateToProps = ({ songs }: IStoreState) => {
  return {
    songs
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ISelectSongSuccess>) => {
  return {
    onSelectSong: (song: ISong) => dispatch(selectSong(song))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);
