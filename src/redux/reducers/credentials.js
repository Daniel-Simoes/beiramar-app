import {GET_CREDENTIALS} from "../types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CREDENTIALS: {
      return action.payload;
    }

    default:
      return state;
  }
};