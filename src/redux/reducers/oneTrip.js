import {TRIP_GET_ONE} from "../types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case TRIP_GET_ONE: {
      return action.payload;
    }

    default:
      return state;
  }
};