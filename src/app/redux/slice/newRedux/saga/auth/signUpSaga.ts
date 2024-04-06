import { takeLatest, call, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  completeResetPasswordFailure,
  completeResetPasswordStart,
  completeResetPasswordSuccess,
  completeSignUpFailure,
  completeSignUpSuccess,
  completeSignUpUpStart,
  confirmResetPasswordFailure,
  confirmResetPasswordStart,
  confirmResetPasswordSuccess,
  confirmSignUpSuccess,
  confirmSignUpUpStart,
  forgotPasswordRequestFailure,
  forgotPasswordRequestStart,
  forgotPasswordRequestSuccess,
  loginRequestFailure,
  loginRequestStart,
  loginRequestSuccess,
  logoutRequestFailure,
  logoutRequestStart,
  logoutRequestSuccess,
  refreshTokenRequestFailure,
  refreshTokenRequestStart,
  refreshTokenRequestSuccess,
  setIsAuthenticated,
  signUpFailure,
  signUpStart,
  signUpSuccess,
} from "../../reducers/auth/signUpReducer";
import { request } from "@/app/utils/services/api";
import { localStore } from "@/app/utils/localStore";
import { StorageVariable } from "@/app/utils/constants/storageVariables";
import {
  ICompleteSignup,
  IForgotPasswordRequest,
  ILoginData,
} from "../../../types/auth";

const TOKEN_EXPIRY_MIN = 60;

function* signUpUser(
  action: PayloadAction<{ email: string; isTermsAgreed: boolean }>
): Generator<any, void, any> {
  try {
    const { email, isTermsAgreed } = action.payload;
    const config = {
      method: "POST",
      url: "/auth/guest-signup",
      data: { email, isTermsAgreed },
    };
    const response = yield call(request, config);

    if (response.content.hasVerifiedEmail) {
      localStore.setItem(
        StorageVariable.ONBOARDING_TOKEN,
        response.content.signupCompletionToken
      );
    }
    yield put(signUpSuccess(response));
  } catch (error: any) {
    yield put(signUpFailure(error.message));
  }
}
function* confirmSignUp(
  action: PayloadAction<{ token: string }>
): Generator<any, void, any> {
  try {
    const token = action.payload;

    const config = {
      method: "GET",
      url: `/auth/confirm-signup?token=${token}`,
    };
    const response = yield call(request, config);

    localStore.setItem(StorageVariable.ONBOARDING_TOKEN, token);

    yield put(confirmSignUpSuccess(response));
  } catch (error: any) {
    yield put(signUpFailure(error.message));
    console.log("ERROR", error);
  }
}

function* completeSignUp(
  action: PayloadAction<{
    formData: ICompleteSignup;
  }>
): Generator<any, void, any> {
  const signupVerificationToken = localStore.getItem(
    StorageVariable.ONBOARDING_TOKEN
  );

  try {
    const config = {
      method: "POST",
      url: `/auth/complete-signup?token=${signupVerificationToken}`,
      data: action.payload,
    };
    const response = yield call(request, config);

    yield put(completeSignUpSuccess(response));
  } catch (error: any) {
    yield put(completeSignUpFailure(error.message));
    console.log("ERROR", error);
  }
}

function* login(
  action: PayloadAction<{
    formData: ILoginData;
  }>
): Generator<any, void, any> {
  try {
    const config = {
      method: "POST",
      url: `/auth/login`,
      data: action.payload,
    };
    const response = yield call(request, config);

    const tokens = JSON.parse(response.content.tokens);

    const { accessToken, refreshToken } = tokens;

    if (!accessToken || !refreshToken) {
      throw new Error("Access token or refresh token not found in response.");
    }

    localStore.setItem(StorageVariable.ACCESS_TOKENS, accessToken);
    localStore.setItem(StorageVariable.REFRESH_TOKENS, refreshToken);
    localStore.setItem(StorageVariable.USER_DATA, response.content.user);
    localStore.setItem(StorageVariable.IS_AUTHENTICATED, true);

    yield put(setIsAuthenticated(true));
    yield put(loginRequestSuccess(response));
  } catch (error: any) {
    yield put(loginRequestFailure(error.message));
    console.log("ERROR", error);
  }
}

function* refreshAccessToken(): Generator<any, void, any> {
  try {
    const accessToken = localStore.getItem(StorageVariable.ACCESS_TOKENS);
    const refreshToken = localStore.getItem(StorageVariable.REFRESH_TOKENS);

    if (!accessToken || !refreshToken) {
      throw new Error("Access token or refresh token not found.");
    }

    const config = {
      method: "GET",
      url: "/auth/token/refresh",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        RefreshToken: refreshToken,
      },
      credentials: "same-origin",
    };

    const response = yield call(request, config);

    const {
      tokens: { accessToken: newAccessToken, refreshToken: newRefreshToken },
    } = response.content;

    if (!newAccessToken || !newRefreshToken) {
      throw new Error(
        "New access token or refresh token not found in response."
      );
    }

    localStore.setItem(StorageVariable.ACCESS_TOKENS, newAccessToken);
    localStore.setItem(StorageVariable.REFRESH_TOKENS, newRefreshToken);

    yield put(refreshTokenRequestSuccess(response));
  } catch (error: any) {
    yield put(refreshTokenRequestFailure(error.message));
    console.log("ERROR", error);
  }
}

function* logout(): Generator<any, void, any> {
  try {
    const accessToken = localStore.getItem(StorageVariable.ACCESS_TOKENS);
    const refreshToken = localStore.getItem(StorageVariable.REFRESH_TOKENS);

    if (!accessToken || !refreshToken) {
      return;
    }

    const tokens = {
      accessToken,
      refreshToken,
    };

    const tokensString = JSON.stringify(tokens);
    console.log("TOKENS", tokensString);

    const config = {
      method: "POST",
      url: "/auth/logout",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {},
      credentials: "same-origin",
    };

    const response = yield call(request, config);

    localStore.removeItem(StorageVariable.ACCESS_TOKENS);
    localStore.removeItem(StorageVariable.REFRESH_TOKENS);
    localStore.removeItem(StorageVariable.USER_DATA);
    localStore.removeItem(StorageVariable.IS_AUTHENTICATED);
    localStore.removeItem(StorageVariable.USER_EMAIL);

    yield put(logoutRequestSuccess(response));
  } catch (error: any) {
    yield put(logoutRequestFailure(error.message));
    console.log("ERROR", error);
  }
}

function* forgotPassword(
  action: PayloadAction<{
    formData: IForgotPasswordRequest;
  }>
): Generator<any, void, any> {
  try {
    const config = {
      method: "POST",
      url: `/auth/forgot-password`,
      data: action.payload,
    };

    const response = yield call(request, config);

    localStore.setItem(StorageVariable.USER_EMAIL, action.payload);

    yield put(forgotPasswordRequestSuccess(response));
  } catch (error: any) {
    yield put(forgotPasswordRequestFailure(error.message));
    console.log("ERROR", error);
  }
}

function* confirmResetPassword(
  action: PayloadAction<{ token: string }>
): Generator<any, void, any> {
  try {
    const token = action.payload;

    const config = {
      method: "GET",
      url: `/auth/confirm-password-reset?token=${token}`,
    };
    const response = yield call(request, config);

    localStore.setItem(StorageVariable.ONBOARDING_TOKEN, token);

    yield put(confirmResetPasswordSuccess(response));
  } catch (error: any) {
    yield put(confirmResetPasswordFailure(error.message));
    console.log("ERROR", error);
  }
}

function* completePasswordReset(
  action: PayloadAction<{ token: string }>
): Generator<any, void, any> {
  try {
    const token = localStore.getItem(StorageVariable.ONBOARDING_TOKEN);

    const config = {
      method: "POST",
      url: `/auth/complete-password-reset?token=${token}`,
      data: action.payload,
    };
    const response = yield call(request, config);

    localStore.removeItem(StorageVariable.USER_EMAIL);
    localStore.removeItem(StorageVariable.ONBOARDING_TOKEN);

    yield put(completeResetPasswordSuccess(response));
  } catch (error: any) {
    yield put(completeResetPasswordFailure(error.message));
    console.log("ERROR", error);
  }
}

export default function* rootSaga() {
  yield takeLatest(signUpStart.type, signUpUser);
  yield takeLatest(confirmSignUpUpStart.type, confirmSignUp);
  yield takeLatest(completeSignUpUpStart.type, completeSignUp);
  yield takeLatest(loginRequestStart.type, login);
  yield takeLatest(logoutRequestStart.type, logout);
  yield takeLatest(refreshTokenRequestStart.type, refreshAccessToken);
  yield takeLatest(forgotPasswordRequestStart.type, forgotPassword);
  yield takeLatest(confirmResetPasswordStart.type, confirmResetPassword);
  yield takeLatest(completeResetPasswordStart.type, completePasswordReset);
}
