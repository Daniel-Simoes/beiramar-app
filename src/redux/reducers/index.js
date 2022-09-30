import {combineReducers} from "redux";
import trip from "./trip";
import notification from "./notification";
import category from "./category";
import oneTrip from "./oneTrip";
import oneUser from "./oneUser";
import credentials from "./credentials";

export default combineReducers({
  trip,
  notification,
  oneTrip,
  oneUser,
  category,
  credentials,
});