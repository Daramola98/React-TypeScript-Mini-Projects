import { combineReducers } from "redux";
import { ISelectSongSuccess, ISong } from "../actions/interfaces";
import { SELECT_SONG } from "../actions/types";

export interface IStoreState {
  selectedSong: ISong | null;
  songs: ISong[];
}

const songsReducer = (): ISong[] => {
  return [
    { title: "YoungBlood", duration: "4.05" },
    { title: "Burn Out", duration: "3.58" },
    { title: "So far away", duration: "4.00" },
    { title: "Together", duration: "5.00" }
  ];
};

const selectedSongReducer = (
  state: ISong | null = null,
  action: ISelectSongSuccess
): ISong | null => {
  if (action.type === SELECT_SONG) {
    return action.payload;
  }
  return state;
};

export default combineReducers({
  selectedSong: selectedSongReducer,
  songs: songsReducer
});
