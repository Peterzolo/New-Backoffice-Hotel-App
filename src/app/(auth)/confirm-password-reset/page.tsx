"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import { FlashMessage } from "@/components/FlashMessage/Flashmessage";
import {
  confirmResetErrorSelector,
  confirmResetSuccessSelector,
  dataLoadingSelector,
} from "@/app/redux/slice/newRedux/reducers/auth/selectors/signupSelector";
import { confirmResetPasswordStart } from "@/app/redux/slice/newRedux/reducers/auth/signUpReducer";
import BlankPageLoader from "@/app/loading";

const ConfirmPasswordReset = () => {
  const dataLoading = useSelector(dataLoadingSelector);
  const confirmSuccess = useSelector(confirmResetSuccessSelector);
  const confirmError = useSelector(confirmResetErrorSelector);
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  console.log("CONFIRM TOKEN", token);

  useEffect(() => {
    if (token) {
      // Dispatch an action to confirm sign up with the token
      dispatch(confirmResetPasswordStart(token));
    }
  }, [dispatch, token]);

  useEffect(() => {
    // If confirmation is successful, redirect immediately
    if (confirmSuccess) {
      router.push("/complete-password-reset");
    }
  }, [confirmError, router, confirmSuccess]);

  if (dataLoading) {
    // Display BlankPageLoader if loading
    return <BlankPageLoader />;
  }

  if (confirmError) {
    // Display FlashMessage component with error message if there is an error
    return <FlashMessage message={confirmError} type="error" />;
  }

  // By default, return null or any other fallback component
  return null;
};
ConfirmPasswordReset;
export default ConfirmPasswordReset;
