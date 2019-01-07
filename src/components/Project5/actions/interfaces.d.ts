import { SELECT_SONG } from "./types";

export interface ISelectSongSuccess {
    type: SELECT_SONG;
    payload: ISong;
}

export interface ISong {
    title: string;
    duration: string;
}
