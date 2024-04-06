"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import { FlashMessage } from "@/components/FlashMessage/Flashmessage";
import {
  confirmSignUpErerorSelector,
  confirmSignUpSuccessMessageSelector,
  confirmSignUpSuccessSelector,
  dataLoadingSelector,
} from "@/app/redux/slice/newRedux/reducers/auth/selectors/signupSelector";
import { confirmSignUpUpStart } from "@/app/redux/slice/newRedux/reducers/auth/signUpReducer";
import BlankPageLoader from "@/app/loading";

const ConfirmationPage = () => {
  const dataLoading = useSelector(dataLoadingSelector);
  const confirmSuccess = useSelector(confirmSignUpSuccessSelector);
  const confirmSuccessMessage = useSelector(
    confirmSignUpSuccessMessageSelector
  );
  const error = useSelector(confirmSignUpErerorSelector);
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      // Dispatch an action to confirm sign up with the token
      dispatch(confirmSignUpUpStart(token));
    }
  }, [dispatch, token]);

  useEffect(() => {
    // If confirmation is successful, redirect immediately
    if (!dataLoading && !error) {
      router.push("/complete-sign-up");
    }
  }, [dataLoading, error, router]);

  if (dataLoading) {
    // Display BlankPageLoader if loading
    return <BlankPageLoader />;
  }

  if (error) {
    // Display FlashMessage component with error message if there is an error
    return <FlashMessage message={error} type="error" />;
  }

  // By default, return null or any other fallback component
  return null;
};

export default ConfirmationPage;
