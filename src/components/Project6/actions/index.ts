import _ from "lodash";
import { Dispatch } from "react";
import jsonPlaceHolder from "../api";
import { IFetchPostSuccess, IFetchUserSuccess } from "./interfaces";
import { FETCH_POSTS, FETCH_USER } from "./types";

export const fetchPosts = () => {
  return async (dispatch: Dispatch<IFetchPostSuccess>, getState: any) => {
    const response = await jsonPlaceHolder.get("/posts");
    dispatch({ type: FETCH_POSTS, payload: response.data });
  };
};

export const fetchUser = (userId: number) => async (
  dispatch: Dispatch<IFetchUserSuccess>
) => {
  const response = await jsonPlaceHolder.get(`/users/${userId}`);
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetchPostsAndUsers = () => async (
  dispatch: Dispatch<any>,
  getState: any
) => {
  await dispatch(fetchPosts());
  const userIds = Array.from(
    new Set(_.map(getState().posts.listOfPosts, "userId"))
  );
  userIds.forEach(userId => dispatch(fetchUser(userId)));
};

// tslint:disable-next-line:variable-name
const _fetchUser = _.memoize(
  async (userId: number, dispatch: Dispatch<IFetchUserSuccess>) => {
    const response = await jsonPlaceHolder.get(`/users/${userId}`);
    dispatch({ type: FETCH_USER, payload: response.data });
  }
);

// function memoize(func: Function) {
//   const cache: { [key: string]: any } = {};
//   return () => {
//     const key = JSON.stringify(arguments);
//     if (cache[key]) {
//       return cache[key];
//     } else {
//       const result = func.apply(null, arguments);
//       cache[key] = result;
//       return result;
//     }
//   };
// }
