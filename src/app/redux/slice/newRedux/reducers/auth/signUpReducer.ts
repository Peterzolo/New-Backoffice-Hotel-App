// userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../../types/auth";
import { StorageVariable } from "@/app/utils/constants/storageVariables";
import { localStore } from "@/app/utils/localStore";

export const initialState: AuthState = {
  isLoading: false,
  logingLoading: false,
  logoutLoading: false,
  logoutSuccessful: false,
  error: null,
  confirmSignUperror: null,
  signUpSuccess: false,
  confirmSignUpSuccess: false,
  successMessage: null,
  confirmSignUpSuccessMessage: null,
  signUpData: null,
  confirmSignUpData: null,
  hasVerifiedEmail: false,
  completeSignUpSuccess: false,
  completeSignUpSuccessMessage: null,
  completeSignUpData: null,
  completeSignUperror: null,
  loginData: null,
  loginSuccessful: false,
  loginError: undefined,
  logoutError: undefined,
  accessToken: localStore.getItem(StorageVariable.ACCESS_TOKENS) || null,
  refreshToken: localStore.getItem(StorageVariable.REFRESH_TOKENS) || null,
  isAuthenticated: false,
  loginSuccessMessage: null,
  forgotPawordRequestSuccessful: false,
  forgotPawordRequestError: null,
  forgotPawordRequestSuccessMessage: null,
  confirmResetSucces: false,
  confirmResetError: null,

  completePasswordResetSuccess: false,
  completePasswordResetSuccessMessage: null,
  completePasswordReseterror: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuthenticated(state: AuthState, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },

    signUpStart(state: AuthState, action: PayloadAction<any>) {
      state.isLoading = true;
      state.error = null;
    },

    signUpSuccess: (state: AuthState, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.signUpSuccess = true;
      state.successMessage = action.payload.message;
      state.hasVerifiedEmail = action.payload.content.hasVerifiedEmail;
    },
    signUpFailure: (state: AuthState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    confirmSignUpUpStart(state: AuthState, action: PayloadAction<any>) {
      state.isLoading = true;
      state.error = null;
    },

    confirmSignUpSuccess: (state: AuthState, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.confirmSignUpSuccess = true;
      state.confirmSignUpSuccessMessage = action.payload.message;
      state.confirmSignUpData = action.payload.content;
    },
    confirmSignUpFailure: (state: AuthState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    completeSignUpUpStart(state: AuthState, action: PayloadAction<any>) {
      state.isLoading = true;
      state.error = null;
    },

    completeSignUpSuccess: (state: AuthState, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.completeSignUpSuccess = true;
      state.completeSignUpSuccessMessage = action.payload.message;
      state.completeSignUpData = action.payload.content;
    },
    completeSignUpFailure: (
      state: AuthState,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    loginRequestStart(state: AuthState, action: PayloadAction<any>) {
      state.logingLoading = true;
      state.loginError = null;
    },

    loginRequestSuccess: (state: AuthState, action: PayloadAction<any>) => {
      state.loginSuccessful = true;
      state.loginData = action.payload.content.user;
      state.loginSuccessMessage = action.payload.message;
      state.logingLoading = false;
    },
    loginRequestFailure: (state: AuthState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.loginError = action.payload;
    },

    setTokens: (
      state: AuthState,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },

    clearTokens: (state: AuthState) => {
      state.accessToken = null;
      state.refreshToken = null;
    },

    logoutRequestStart(state: AuthState, action: PayloadAction<any>) {
      state.logoutLoading = true;
      state.logoutError = null;
    },
    logoutRequestSuccess: (state: AuthState, action: PayloadAction<any>) => {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.logoutLoading = false;
      state.loginSuccessful = false;
      state.loginData = null;
      state.logoutSuccessful = true;
      state.logoutError = null;
    },

    logoutRequestFailure(state: AuthState, action: PayloadAction<any>) {
      state.logoutLoading = false;
      state.loginError = action.payload;
    },
    refreshTokenRequestStart(state: AuthState, action: PayloadAction<any>) {
      state.isLoading = true;
      state.logoutError = null;
    },
    refreshTokenRequestSuccess: (
      state: AuthState,
      action: PayloadAction<any>
    ) => {
      state.isAuthenticated = false;
      state.loginData = action.payload.content;
    },

    refreshTokenRequestFailure(state: AuthState, action: PayloadAction<any>) {
      state.isLoading = true;
      state.loginError = action.payload;
    },
    forgotPasswordRequestStart(state: AuthState, action: PayloadAction<any>) {
      state.isLoading = true;
      state.logoutError = null;
    },
    forgotPasswordRequestSuccess: (
      state: AuthState,
      action: PayloadAction<any>
    ) => {
      state.forgotPawordRequestSuccessful = true;
      state.forgotPawordRequestSuccessMessage = action.payload.content.message;
    },

    forgotPasswordRequestFailure(state: AuthState, action: PayloadAction<any>) {
      state.isLoading = true;
      state.forgotPawordRequestError = action.payload;
    },
    confirmResetPasswordStart(state: AuthState, action: PayloadAction<any>) {
      state.isLoading = true;
      state.confirmResetError = null;
    },

    confirmResetPasswordSuccess: (
      state: AuthState,
      action: PayloadAction<any>
    ) => {
      state.isLoading = false;
      state.confirmResetSucces = true;
    },
    confirmResetPasswordFailure: (
      state: AuthState,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.confirmResetError = action.payload;
    },
    completeResetPasswordStart(state: AuthState, action: PayloadAction<any>) {
      state.isLoading = true;
      state.completePasswordReseterror = null;
    },

    completeResetPasswordSuccess: (
      state: AuthState,
      action: PayloadAction<any>
    ) => {
      state.isLoading = false;
      state.completePasswordResetSuccess = true;
    },
    completeResetPasswordFailure: (
      state: AuthState,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.completePasswordReseterror = action.payload;
    },
  },
});

export const {
  signUpStart,
  signUpSuccess,
  signUpFailure,
  confirmSignUpUpStart,
  confirmSignUpSuccess,
  confirmSignUpFailure,
  completeSignUpUpStart,
  completeSignUpSuccess,
  completeSignUpFailure,
  loginRequestStart,
  loginRequestSuccess,
  loginRequestFailure,
  logoutRequestSuccess,
  logoutRequestStart,
  logoutRequestFailure,
  refreshTokenRequestStart,
  refreshTokenRequestSuccess,
  refreshTokenRequestFailure,
  forgotPasswordRequestStart,
  forgotPasswordRequestSuccess,
  forgotPasswordRequestFailure,
  confirmResetPasswordStart,
  confirmResetPasswordSuccess,
  confirmResetPasswordFailure,
  completeResetPasswordStart,
  completeResetPasswordSuccess,
  completeResetPasswordFailure,
  setIsAuthenticated,
} = userSlice.actions;

export default userSlice.reducer;
