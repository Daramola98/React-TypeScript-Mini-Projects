import { IFetchPostSuccess } from "../actions/interfaces";
import { FETCH_POSTS } from "../actions/types";

export interface IPostReducerState {
  listOfPosts: any[] | null;
}
const InitialState: IPostReducerState = {
  listOfPosts: null
};

export default (
  state: IPostReducerState = InitialState,
  action: IFetchPostSuccess
) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, listOfPosts: action.payload };
    default:
      return state;
  }
};
