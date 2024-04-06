import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../../store/store";
import { initialState } from "../signUpReducer";

export const mySelector = (state: RootState) => state.signUp || initialState;

export const dataLoadingSelector = createSelector(
  mySelector,
  (state) => state.isLoading
);
export const logingLoadingSelector = createSelector(
  mySelector,
  (state) => state.logingLoading
);

export const signUpErrorSelector = createSelector(
  mySelector,
  (state) => state.error
);

export const signUpSuccessSelector = createSelector(
  mySelector,
  (state) => state.signUpSuccess
);
export const signUpSuccessMessageSelector = createSelector(
  mySelector,
  (state) => state.successMessage
);
export const hasVerifiedEmailSelector = createSelector(
  mySelector,
  (state) => state.hasVerifiedEmail
);
export const confirmSignUpDataSelector = createSelector(
  mySelector,
  (state) => state.confirmSignUpData
);
export const confirmSignUpSuccessMessageSelector = createSelector(
  mySelector,
  (state) => state.confirmSignUpSuccessMessage
);
export const confirmSignUpSuccessSelector = createSelector(
  mySelector,
  (state) => state.confirmSignUpSuccess
);
export const confirmSignUpErerorSelector = createSelector(
  mySelector,
  (state) => state.confirmSignUperror
);
export const completeSignUpErerorSelector = createSelector(
  mySelector,
  (state) => state.completeSignUperror
);
export const completeSignUpSuccessSelector = createSelector(
  mySelector,
  (state) => state.completeSignUpSuccess
);
export const loginSuccessMessageSelector = createSelector(
  mySelector,
  (state) => state.loginSuccessMessage
);
export const userAuthenticatedSelector = createSelector(
  mySelector,
  (state) => state.isAuthenticated
);
export const loginSuccessSelector = createSelector(
  mySelector,
  (state) => state.loginSuccessful
);
export const loginErrorSelector = createSelector(
  mySelector,
  (state) => state.loginError
);
export const logoutLoadingSelector = createSelector(
  mySelector,
  (state) => state.logoutLoading
);
export const logoutSuccessSelector = createSelector(
  mySelector,
  (state) => state.logoutSuccessful
);
export const logoutErrorSelector = createSelector(
  mySelector,
  (state) => state.logoutError
);
export const forgotPasswordSuccessSelector = createSelector(
  mySelector,
  (state) => state.forgotPawordRequestSuccessful
);
export const forgotPasswordSuccessMessageSelector = createSelector(
  mySelector,
  (state) => state.forgotPawordRequestSuccessMessage
);
export const forgotPasswordErrorSelector = createSelector(
  mySelector,
  (state) => state.forgotPawordRequestError
);
export const confirmResetSuccessSelector = createSelector(
  mySelector,
  (state) => state.confirmResetSucces
);
export const confirmResetErrorSelector = createSelector(
  mySelector,
  (state) => state.confirmResetError
);
export const completePasswordResetErrorSelector = createSelector(
  mySelector,
  (state) => state.completePasswordReseterror
);
export const completePasswordResetSuccessSelector = createSelector(
  mySelector,
  (state) => state.completePasswordResetSuccess
);
