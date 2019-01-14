import { IFetchUserSuccess } from "../actions/interfaces";
import { FETCH_USER } from "../actions/types";

export interface IUserReducerState {
  data: any[];
}
const InitialState: IUserReducerState = {
  data: []
};

export default (
  state: IUserReducerState = InitialState,
  action: IFetchUserSuccess
) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, data: [...state.data, action.payload] };
    default:
      return state;
  }
};
