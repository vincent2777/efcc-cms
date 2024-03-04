import { combineReducers } from "redux";
import authSlice from "./authSlice";
import usersSlice from "./usersSlice";
import roleSlice from "./roleSlice";



const combinedSlices = combineReducers({
  auth: authSlice,
  users: usersSlice,
  roles: roleSlice,
});

export default combinedSlices;
