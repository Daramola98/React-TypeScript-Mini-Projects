import { FETCH_POSTS, FETCH_USER } from "./types";

export interface IFetchPostSuccess {
    type: FETCH_POSTS;
    payload: any;
}

export interface IFetchUserSuccess {
    type: FETCH_USER;
    payload: any;
}
