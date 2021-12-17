import {USER_GET_ONE} from "../types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_GET_ONE: {
      return action.payload;
    }

    default:
      return state;
  }
};