import { all } from "redux-saga/effects";
import signupSaga from "./auth/signUpSaga";

export default function* rootSaga() {
  yield all([
    signupSaga(),
    // Add more sagas here if needed
  ]);
  console.log("LOADING");
}
