import { ISelectSongSuccess, ISong } from "./interfaces";
import { SELECT_SONG } from "./types";

export const selectSong = (song: ISong): ISelectSongSuccess => {
  return {
    payload: song,
    type: SELECT_SONG
  };
};
