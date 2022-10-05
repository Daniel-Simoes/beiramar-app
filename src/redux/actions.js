import {
  GET_TRIP, 
  GET_NOTIFICATION, 
  TRIP_GET_ONE,
  USER_GET_ONE,
  GET_CATEGORY,
  GET_CREDENTIALS,
} from "./types";
import {createAction} from "redux-actions";
import * as API from "./api";

import {useDispatch} from "react-redux";
const getAllTripAction = createAction(GET_TRIP);
const getAllNotificationAction = createAction(GET_NOTIFICATION);
const getAllCategoryAction = createAction(GET_CATEGORY);
const tripGetOneAction = createAction(TRIP_GET_ONE);
const userGetOneAction = createAction(USER_GET_ONE);

const userGetCredentialsAction = createAction(GET_CREDENTIALS);

export const useActions = () => {
  const dispatch = useDispatch();

  return {
    GetAllTrip: async () => {
      // console.log("antes");
      const response = await API.Trips.get();
      // console.log("depois", response);

      dispatch(getAllTripAction(response.data));
      return {response};
    },

    TripGetOne: async (serviceId) => {
      const response = await API.Trips.show(serviceId);
      console.log("UM PASSEIO", response);

      dispatch(tripGetOneAction(response.data));
      return {response};
    },

    UserGetOne: async (userId) => {
      const response = await API.Users.show(userId);
      // console.log("Presponse", response);

      dispatch(userGetOneAction(response.data));
      return {response};
    },

    GetAllNotification: async () => {
      const response = await API.Notifications.get();
      // console.log("Presponse", response);

      dispatch(getAllNotificationAction(response.data));
      return {response};
    },

    GetAllCategory: async () => {
      const response = await API.Categories.get();
      // console.log("Presponse", response);

      dispatch(getAllCategoryAction(response.data));
      return {response};
    },


    GetCredentials: async (credentials) => {
      dispatch(userGetCredentialsAction(credentials));
      return {credentials};
    },
    

  };
};