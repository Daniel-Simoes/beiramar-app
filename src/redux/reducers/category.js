import {GET_CATEGORY} from "../types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY: {
      return action.payload;
    }

    default:
      return state;
  }
};