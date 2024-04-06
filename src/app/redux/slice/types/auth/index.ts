// export interface AuthState {
//   isLoading: boolean;
//   error: any;
//   isSignUpSuccessful: boolean;
// }

export interface ISignUpData {
  email: string;
}

export interface ICompleteSignup {
  password: string;
  firstName: string;
  email: string;
  lastName: string;
  phoneNumber: string;
}
export interface ILoginData {
  password: string;
  email: string;
}

export interface IForgotPasswordRequest {
  email: string;
}
export interface ICompletePasswordReset {
  password: string;
}

export interface AuthState {
  isLoading: boolean;
  logingLoading: boolean;
  logoutLoading: boolean;
  signUpSuccess: boolean;
  logoutSuccessful: boolean;
  confirmSignUpSuccess: boolean;
  successMessage: string | null;
  confirmSignUpSuccessMessage: string | null;
  signUpData: ISignUpReturndata | null;
  confirmSignUpData: ISignUpReturndata | null;
  error: any | null;
  confirmSignUperror: string | null;
  completeSignUperror: string | null;
  hasVerifiedEmail: boolean;
  completeSignUpSuccess: boolean;
  completeSignUpSuccessMessage: string | null;
  completeSignUpData: IUser | null;
  isAuthenticated: boolean;
  loginData: IUser | null;
  loginSuccessful: boolean;
  loginError: any;
  logoutError: any;
  accessToken: string | null;
  refreshToken: string | null;
  loginSuccessMessage: string | null;
  forgotPawordRequestSuccessful: boolean;
  forgotPawordRequestError: string | null;
  forgotPawordRequestSuccessMessage: string | null;
  confirmResetSucces: boolean;
  confirmResetError: string | null;
  completePasswordResetSuccess: boolean;
  completePasswordResetSuccessMessage: string | null;
  completePasswordReseterror: string | null;
}

export interface ISignUpReturndata {
  email: string;
  hasVerifiedEmail: boolean;
}

export interface IUser {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
}
