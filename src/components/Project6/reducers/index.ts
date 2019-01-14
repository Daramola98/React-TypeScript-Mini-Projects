import { combineReducers } from "redux";
import postsReducer, { IPostReducerState } from "./postsReducer";
import usersReducer, { IUserReducerState } from "./usersReducer";

export interface IStoreState {
  posts: IPostReducerState;
  user: IUserReducerState;
}

export default combineReducers({
  posts: postsReducer,
  user: usersReducer
});
