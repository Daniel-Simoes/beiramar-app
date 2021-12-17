import {GET_TRIP} from "../types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRIP: {
      return action.payload;
    }

    default:
      return state;
  }
};