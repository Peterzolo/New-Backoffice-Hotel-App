import { combineReducers } from "@reduxjs/toolkit";
import signUpReducer from "./auth/signUpReducer";
const rootReducer = combineReducers({
  // Add other reducers here
  signUp: signUpReducer,
});

export default rootReducer;
