import React from "react";
import { connect } from "react-redux";
import { ISong } from "../actions/interfaces";
import { IStoreState } from "../reducers";

interface ISongDetailProps {
  selectedSong: ISong | null;
}

const SongDetail = ({ selectedSong }: ISongDetailProps) => {
  if (!selectedSong) {
    return <div>Select a Song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {selectedSong.title}
        <br />
        Duration: {selectedSong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = ({ selectedSong }: IStoreState) => {
  return {
    selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
